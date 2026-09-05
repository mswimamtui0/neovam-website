const express = require('express');
const { query, initDatabase } = require('./db');

const app = express();

// ============================================
// Process-level error handlers (catch any crashes)
process.on('uncaughtException', (err) => {
  console.error('🔥 UNCAUGHT EXCEPTION:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('🔥 UNHANDLED REJECTION:', err);
});

// ============================================
// JSON parser with INCREASED limit for long URLs
app.use(express.json({ 
  limit: '50mb',
  verify: (req, res, buf) => {
    // Store raw body for debugging
    req.rawBody = buf.toString();
  }
}));

// ============================================
// ✅ CORS Middleware
app.use((req, res, next) => {
  const allowedOrigins = [
    'https://neovam.com',
    'https://www.neovam.com',
    'https://neovam-website-master.vercel.app',
    'https://neovam-website-master-o9sjs0gty-mwawezas-projects.vercel.app',
    'http://localhost:3000',
    'http://localhost:3001'
  ];

  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  }

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  next();
});

// ============================================
// Request logging
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.path}`);
  next();
});

// ============================================
// Auth Middleware - FIXED to allow public blog access
// ============================================
app.use((req, res, next) => {
  // Public endpoints - including ALL blog routes for GET requests
  const publicPaths = [
    '/api/login', 
    '/api/health', 
    '/api/debug-blog', 
    '/api/debug-schema',
    '/api/debug-check-column',
    '/api/debug-blog-id',
    '/api/debug-all-blogs',
    '/api/debug-raw-body',
    '/api/debug-test',
    '/api/debug-env'
  ];
  
  // Allow all GET requests to blog routes (anyone can view blogs)
  if (req.path.startsWith('/api/blogs') && req.method === 'GET') {
    return next();
  }
  
  // For POST, PUT, DELETE on blogs - require admin authentication
  if (req.path.startsWith('/api/blogs') && 
      (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE')) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader === 'Bearer admin-token-neovam') {
      return next();
    }
    return res.status(401).json({ error: 'Admin access required' });
  }
  
  // Check if the current path starts with any public path
  const isPublicPath = publicPaths.some(path => req.path.startsWith(path));
  
  if (isPublicPath && (req.method === 'POST' || req.method === 'GET')) {
    return next();
  }
  
  if (req.method === 'OPTIONS') return next();

  const authHeader = req.headers.authorization;
  if (authHeader && authHeader === 'Bearer admin-token-neovam') return next();

  return res.status(401).json({ error: 'Unauthorized' });
});

// ============================================
// SIMPLE TEST ENDPOINT - Check if server is running
// ============================================
app.get('/api/debug-test', (req, res) => {
  res.json({ 
    message: '✅ Server is running with latest code!', 
    timestamp: new Date().toISOString(),
    version: '2.2.0 - Ultimate Debug',
    endpoints: [
      '/api/debug-test',
      '/api/debug-check-column',
      '/api/debug-all-blogs',
      '/api/debug-raw-body',
      '/api/debug-blog-id/:id',
      '/api/health',
      '/api/blogs'
    ]
  });
});

// ============================================
// Debug environment variables (without exposing secrets)
// ============================================
app.get('/api/debug-env', (req, res) => {
  res.json({
    NODE_ENV: process.env.NODE_ENV,
    hasDatabaseUrl: !!process.env.DATABASE_URL,
    hasPgHost: !!process.env.PGHOST,
    hasPgUser: !!process.env.PGUSER,
    hasPgPassword: !!process.env.PGPASSWORD,
    hasPgDatabase: !!process.env.PGDATABASE,
    hasPgPort: !!process.env.PGPORT
  });
});

// ============================================
// SPECIAL DEBUG ENDPOINT to test raw body
// ============================================
app.post('/api/debug-raw-body', (req, res) => {
  console.log('🔬 RAW BODY DEBUG ENDPOINT');
  console.log('Headers:', req.headers);
  console.log('Raw body string:', req.rawBody);
  console.log('Parsed body:', req.body);
  console.log('thumbnail:', req.body.thumbnail);
  console.log('featuredImage:', req.body.featuredImage);
  console.log('thumbnail length:', req.body.thumbnail?.length);
  
  res.json({
    receivedThumbnail: req.body.thumbnail || req.body.featuredImage,
    rawBodyLength: req.rawBody?.length,
    parsedBodyKeys: Object.keys(req.body),
    message: '✅ Debug endpoint working!'
  });
});

// ============================================
// Check if featuredImage column exists
// ============================================
app.get('/api/debug-check-column', async (req, res) => {
  try {
    const result = await query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'blogs' AND column_name = 'featuredImage'
    `);
    
    if (result.rows.length > 0) {
      res.json({ 
        exists: true, 
        column: result.rows[0],
        message: '✅ featuredImage column exists'
      });
    } else {
      res.json({ 
        exists: false, 
        message: '❌ featuredImage column does NOT exist! Run: ALTER TABLE blogs ADD COLUMN "featuredImage" TEXT;'
      });
    }
  } catch (error) {
    console.error('Column check error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// Debug a specific blog by ID
// ============================================
app.get('/api/debug-blog-id/:id', async (req, res) => {
  try {
    const result = await query('SELECT * FROM blogs WHERE id = $1', [req.params.id]);
    if (result.rows.length > 0) {
      const blog = result.rows[0];
      res.json({
        id: blog.id,
        title: blog.title,
        featuredImage: blog.featuredImage,
        featuredImageType: typeof blog.featuredImage,
        featuredImageLength: blog.featuredImage ? blog.featuredImage.length : 0,
        featuredImageExists: !!blog.featuredImage,
        allColumns: Object.keys(blog),
        fullBlog: blog
      });
    } else {
      res.json({ error: 'Blog not found', id: req.params.id });
    }
  } catch (error) {
    console.error('Debug blog error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// List all blogs with thumbnail status
// ============================================
app.get('/api/debug-all-blogs', async (req, res) => {
  try {
    const result = await query('SELECT id, title, "featuredImage" FROM blogs ORDER BY "createdAt" DESC');
    const summary = result.rows.map(blog => ({
      id: blog.id,
      title: blog.title,
      hasThumbnail: !!blog.featuredImage,
      thumbnailUrl: blog.featuredImage || 'MISSING',
      thumbnailLength: blog.featuredImage ? blog.featuredImage.length : 0
    }));
    res.json({
      total: result.rows.length,
      withThumbnail: result.rows.filter(b => b.featuredImage).length,
      withoutThumbnail: result.rows.filter(b => !b.featuredImage).length,
      blogs: summary
    });
  } catch (error) {
    console.error('Debug all blogs error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// Original debug endpoints
// ============================================
app.post('/api/debug-blog', async (req, res) => {
  try {
    const dbTest = await query('SELECT NOW()');
    const testId = 'debug-' + Date.now();
    
    await query(
      `INSERT INTO blogs (id, title, slug, "createdAt", "updatedAt") 
       VALUES ($1, $2, $3, $4, $5)`,
      [testId, 'Debug Title', 'debug-slug', new Date().toISOString(), new Date().toISOString()]
    );
    
    await query('DELETE FROM blogs WHERE id = $1', [testId]);
    
    res.json({ success: true, dbTime: dbTest.rows[0].now });
  } catch (error) {
    res.status(500).json({ error: error.message, code: error.code });
  }
});

app.get('/api/debug-schema', async (req, res) => {
  try {
    const result = await query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'blogs' 
      ORDER BY ordinal_position
    `);
    res.json({ columns: result.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// Health check
// ============================================
app.get('/api/health', async (req, res) => {
  try {
    const result = await query('SELECT NOW()');
    res.json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(), 
      database: 'connected', 
      dbTime: result.rows[0].now 
    });
  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({ 
      status: 'ERROR', 
      database: 'disconnected', 
      error: error.message 
    });
  }
});

// ============================================
// Login
// ============================================
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }
  
  try {
    const result = await query(
      'SELECT id, username, name, email, role FROM users WHERE username=$1 AND password=$2', 
      [username, password]
    );
    
    if (result.rows.length > 0) {
      res.json({ 
        token: 'admin-token-neovam', 
        user: result.rows[0] 
      });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

// ============================================
// BLOG CRUD OPERATIONS
// ============================================

// GET all blogs
app.get('/api/blogs', async (req, res) => {
  const { published, category, search } = req.query;
  try {
    let sql = 'SELECT * FROM blogs WHERE 1=1';
    const values = [];
    let paramCount = 1;

    if (published !== 'false') { 
      sql += ` AND published=$${paramCount}`; 
      values.push(true); 
      paramCount++; 
    }
    if (category) { 
      sql += ` AND category=$${paramCount}`; 
      values.push(category); 
      paramCount++; 
    }
    if (search) { 
      sql += ` AND (title ILIKE $${paramCount} OR excerpt ILIKE $${paramCount} OR content ILIKE $${paramCount})`; 
      values.push(`%${search}%`); 
      paramCount++; 
    }

    sql += ' ORDER BY "createdAt" DESC';
    const result = await query(sql, values);
    
    // Transform each blog to include thumbnail for frontend
    const blogs = result.rows.map(blog => ({
      id: blog.id,
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      tags: blog.tags,
      thumbnail: blog.featuredImage,
      featuredImage: blog.featuredImage,
      metaTitle: blog.metaTitle,
      metaDescription: blog.metaDescription,
      keywords: blog.keywords,
      published: blog.published,
      author: blog.author,
      createdAt: blog.createdAt,
      updatedAt: blog.updatedAt,
      views: blog.views
    }));
    
    res.json(blogs);
  } catch (error) { 
    console.error('Get blogs error:', error);
    res.status(500).json({ error: error.message }); 
  }
});

// GET blog by slug
app.get('/api/blogs/slug/:slug', async (req, res) => {
  try {
    const result = await query('SELECT * FROM blogs WHERE slug=$1', [req.params.slug]);
    if (result.rows.length > 0) {
      const blog = result.rows[0];
      await query('UPDATE blogs SET views=views+1 WHERE id=$1', [blog.id]);
      
      const responseBlog = {
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        content: blog.content,
        category: blog.category,
        tags: blog.tags,
        thumbnail: blog.featuredImage,
        featuredImage: blog.featuredImage,
        metaTitle: blog.metaTitle,
        metaDescription: blog.metaDescription,
        keywords: blog.keywords,
        published: blog.published,
        author: blog.author,
        createdAt: blog.createdAt,
        updatedAt: blog.updatedAt,
        views: blog.views
      };
      
      res.json(responseBlog);
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) { 
    console.error('Get blog by slug error:', error);
    res.status(500).json({ error: error.message }); 
  }
});

// GET blog by ID
app.get('/api/blogs/:id', async (req, res) => {
  try {
    const result = await query('SELECT * FROM blogs WHERE id=$1', [req.params.id]);
    if (result.rows.length > 0) {
      const blog = result.rows[0];
      
      const responseBlog = {
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        content: blog.content,
        category: blog.category,
        tags: blog.tags,
        thumbnail: blog.featuredImage,
        featuredImage: blog.featuredImage,
        metaTitle: blog.metaTitle,
        metaDescription: blog.metaDescription,
        keywords: blog.keywords,
        published: blog.published,
        author: blog.author,
        createdAt: blog.createdAt,
        updatedAt: blog.updatedAt,
        views: blog.views
      };
      
      res.json(responseBlog);
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) { 
    console.error('Get blog by id error:', error);
    res.status(500).json({ error: error.message }); 
  }
});

// ============================================
// ✅ ULTIMATE DEBUG POST create new blog
// ============================================
app.post('/api/blogs', async (req, res) => {
  console.log('%c========== ULTIMATE BLOG CREATION DEBUG ==========', 'color: blue; font-size: 14px');
  
  // 🔥 Log EVERYTHING about the request
  console.log('🔍 CONTENT-TYPE:', req.headers['content-type']);
  console.log('🔍 RAW BODY LENGTH:', req.rawBody?.length);
  console.log('🔍 RAW BODY PREVIEW:', req.rawBody?.substring(0, 500));
  console.log('🔍 FULL PARSED BODY:', JSON.stringify(req.body, null, 2));
  
  // Specifically check thumbnail fields
  console.log('🔍 thumbnail:', req.body.thumbnail);
  console.log('🔍 thumbnail TYPE:', typeof req.body.thumbnail);
  console.log('🔍 thumbnail LENGTH:', req.body.thumbnail?.length);
  console.log('🔍 thumbnail FIRST 100:', req.body.thumbnail?.substring(0, 100));
  console.log('🔍 thumbnail LAST 50:', req.body.thumbnail?.substring(req.body.thumbnail?.length - 50));
  
  console.log('🔍 featuredImage:', req.body.featuredImage);
  console.log('🔍 featuredImage LENGTH:', req.body.featuredImage?.length);
  console.log('🔍 ALL KEYS:', Object.keys(req.body));
  
  try {
    const blog = req.body;
    
    // Validate required fields
    if (!blog.title || !blog.slug) {
      console.log('❌ Missing required fields');
      return res.status(400).json({ error: 'Title and slug are required' });
    }
    
    const id = Date.now().toString();
    
    // ✅ Get thumbnail from ANY possible field
    let thumbnailUrl = null;
    let thumbnailSource = 'none';
    
    if (blog.thumbnail && typeof blog.thumbnail === 'string' && blog.thumbnail.length > 0) {
      thumbnailUrl = blog.thumbnail;
      thumbnailSource = 'thumbnail';
      console.log(`✅ Using thumbnail field (length: ${thumbnailUrl.length})`);
      console.log(`✅ thumbnail COMPLETE URL:`, thumbnailUrl);
    } else if (blog.featuredImage && typeof blog.featuredImage === 'string' && blog.featuredImage.length > 0) {
      thumbnailUrl = blog.featuredImage;
      thumbnailSource = 'featuredImage';
      console.log(`✅ Using featuredImage field (length: ${thumbnailUrl.length})`);
      console.log(`✅ featuredImage COMPLETE URL:`, thumbnailUrl);
    } else if (blog.image && typeof blog.image === 'string' && blog.image.length > 0) {
      thumbnailUrl = blog.image;
      thumbnailSource = 'image';
      console.log(`✅ Using image field (length: ${thumbnailUrl.length})`);
      console.log(`✅ image COMPLETE URL:`, thumbnailUrl);
    } else {
      console.log('⚠️ No valid thumbnail found in any field');
    }
    
    // Prepare data for database
    const blogData = {
      id,
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt || null,
      content: blog.content || null,
      category: blog.category || null,
      tags: blog.tags || [],
      featuredImage: thumbnailUrl,
      metaTitle: blog.metaTitle || null,
      metaDescription: blog.metaDescription || null,
      keywords: blog.keywords || null,
      published: blog.published !== false,
      author: JSON.stringify(blog.author || { name: 'NeoVam Admin', role: 'Admin' }),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      views: 0
    };

    console.log('💾 FINAL CHECK before database insert:');
    console.log('💾 featuredImage value:', blogData.featuredImage);
    console.log('💾 featuredImage length:', blogData.featuredImage?.length);
    console.log('💾 featuredImage type:', typeof blogData.featuredImage);
    
    // Check for truncation
    if (blogData.featuredImage && blogData.featuredImage.length > 100) {
      console.log('🔍 URL first 100 chars:', blogData.featuredImage.substring(0, 100));
      console.log('🔍 URL last 50 chars:', blogData.featuredImage.substring(blogData.featuredImage.length - 50));
      console.log('🔍 URL contains "ixlib="?', blogData.featuredImage.includes('ixlib='));
      console.log('🔍 URL contains "auto=format"?', blogData.featuredImage.includes('auto=format'));
    }

    console.log('💾 Inserting into database:', {
      title: blogData.title,
      featuredImage: blogData.featuredImage,
      featuredImageLength: blogData.featuredImage ? blogData.featuredImage.length : 0,
      source: thumbnailSource
    });

    // Insert into database
    const result = await query(
      `INSERT INTO blogs (
        id, title, slug, excerpt, content, category, tags,
        "featuredImage", "metaTitle", "metaDescription", keywords,
        published, author, "createdAt", "updatedAt", views
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16) RETURNING *`,
      [
        blogData.id,
        blogData.title,
        blogData.slug,
        blogData.excerpt,
        blogData.content,
        blogData.category,
        blogData.tags,
        blogData.featuredImage,
        blogData.metaTitle,
        blogData.metaDescription,
        blogData.keywords,
        blogData.published,
        blogData.author,
        blogData.createdAt,
        blogData.updatedAt,
        blogData.views
      ]
    );
    
    const savedBlog = result.rows[0];
    console.log('✅ Database RETURNED:');
    console.log('✅ id:', savedBlog.id);
    console.log('✅ title:', savedBlog.title);
    console.log('✅ featuredImage:', savedBlog.featuredImage);
    console.log('✅ featuredImage length:', savedBlog.featuredImage?.length);
    
    // ✅ Construct response with thumbnail
    const responseBlog = {
      id: savedBlog.id,
      title: savedBlog.title,
      slug: savedBlog.slug,
      excerpt: savedBlog.excerpt,
      content: savedBlog.content,
      category: savedBlog.category,
      tags: savedBlog.tags,
      thumbnail: savedBlog.featuredImage,
      featuredImage: savedBlog.featuredImage,
      metaTitle: savedBlog.metaTitle,
      metaDescription: savedBlog.metaDescription,
      keywords: savedBlog.keywords,
      published: savedBlog.published,
      author: savedBlog.author,
      createdAt: savedBlog.createdAt,
      updatedAt: savedBlog.updatedAt,
      views: savedBlog.views
    };
    
    console.log('📤 Response thumbnail:', responseBlog.thumbnail);
    console.log('📤 Response thumbnail length:', responseBlog.thumbnail?.length);
    console.log('%c========== ULTIMATE DEBUG COMPLETE ==========', 'color: green; font-size: 14px');
    
    res.status(201).json(responseBlog);
    
  } catch (error) {
    console.error('❌ ERROR:', error);
    console.error('❌ ERROR DETAILS:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      detail: error.detail
    });
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// PUT update blog
// ============================================
app.put('/api/blogs/:id', async (req, res) => {
  try {
    console.log(`📝 Updating blog: ${req.params.id}`);
    const updates = req.body;
    
    // Get thumbnail from any field
    let thumbnailUrl = null;
    if (updates.thumbnail && updates.thumbnail.length > 0) {
      thumbnailUrl = updates.thumbnail;
    } else if (updates.featuredImage && updates.featuredImage.length > 0) {
      thumbnailUrl = updates.featuredImage;
    } else if (updates.image && updates.image.length > 0) {
      thumbnailUrl = updates.image;
    }
    
    const setClauses = [];
    const values = [];
    let paramCount = 1;

    // Handle regular fields
    Object.keys(updates).forEach(key => {
      if (!['id', 'createdAt', 'views', 'thumbnail', 'featuredImage', 'image'].includes(key)) {
        setClauses.push(`"${key}"=$${paramCount}`);
        if (key === 'tags') {
          values.push(updates[key] || []);
        } else if (key === 'author') {
          values.push(JSON.stringify(updates[key]));
        } else {
          values.push(updates[key]);
        }
        paramCount++;
      }
    });

    // Handle thumbnail specially
    if (thumbnailUrl) {
      setClauses.push(`"featuredImage"=$${paramCount}`);
      values.push(thumbnailUrl);
      paramCount++;
    }

    setClauses.push(`"updatedAt"=$${paramCount}`);
    values.push(new Date().toISOString());
    paramCount++;
    values.push(req.params.id);

    const result = await query(
      `UPDATE blogs SET ${setClauses.join(', ')} WHERE id=$${paramCount} RETURNING *`, 
      values
    );
    
    if (result.rows.length > 0) {
      const updatedBlog = result.rows[0];
      
      const responseBlog = {
        id: updatedBlog.id,
        title: updatedBlog.title,
        slug: updatedBlog.slug,
        excerpt: updatedBlog.excerpt,
        content: updatedBlog.content,
        category: updatedBlog.category,
        tags: updatedBlog.tags,
        thumbnail: updatedBlog.featuredImage,
        featuredImage: updatedBlog.featuredImage,
        metaTitle: updatedBlog.metaTitle,
        metaDescription: updatedBlog.metaDescription,
        keywords: updatedBlog.keywords,
        published: updatedBlog.published,
        author: updatedBlog.author,
        createdAt: updatedBlog.createdAt,
        updatedAt: updatedBlog.updatedAt,
        views: updatedBlog.views
      };
      
      res.json(responseBlog);
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) { 
    console.error('❌ Update blog error:', error);
    res.status(500).json({ error: error.message }); 
  }
});

// ============================================
// DELETE blog
// ============================================
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    console.log(`🗑️ Deleting blog: ${req.params.id}`);
    const result = await query('DELETE FROM blogs WHERE id=$1 RETURNING id', [req.params.id]);
    if (result.rows.length > 0) {
      console.log('✅ Blog deleted');
      res.json({ message: 'Blog deleted successfully' });
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) { 
    console.error('❌ Delete error:', error);
    res.status(500).json({ error: error.message }); 
  }
});

// ============================================
// Users
// ============================================
app.get('/api/users', async (req, res) => {
  try { 
    const result = await query('SELECT id, username, name, email, role FROM users'); 
    res.json(result.rows); 
  } catch (error) { 
    console.error('❌ Get users error:', error);
    res.status(500).json({ error: error.message }); 
  }
});

// ============================================
// Increment views
// ============================================
app.post('/api/blogs/slug/:slug/view', async (req, res) => {
  try {
    const result = await query(
      'UPDATE blogs SET views=views+1 WHERE slug=$1 RETURNING views',
      [req.params.slug]
    );
    if (result.rows.length > 0) {
      res.json({ views: result.rows[0].views });
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) { 
    console.error('❌ Increment views error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// ✅ FIXED 404 handler - NO WILDCARD '*'
// ============================================
app.use((req, res) => {
  console.log('404 Not Found:', req.method, req.path);
  res.status(404).json({ 
    error: 'Route not found',
    path: req.path,
    method: req.method
  });
});

// ============================================
// Error handler
// ============================================
app.use((err, req, res, next) => {
  console.error('🔥 Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// ============================================
// Sitemap and RSS Routes - FIXED to not block other routes
// ============================================
const sitemapRoutes = require('./sitemap');

// Only handle specific sitemap endpoints, not all /api/*
app.get('/api/sitemap.xml', sitemapRoutes);
app.get('/api/sitemap', sitemapRoutes);

// Redirect root-level sitemap.xml and rss.xml to API endpoints
app.get('/sitemap.xml', (req, res) => {
  res.redirect('/api/sitemap.xml');
});

app.get('/rss.xml', (req, res) => {
  res.redirect('/api/sitemap.xml');
});

// ============================================
// Only listen in dev
// ============================================
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, async () => {
    try {
      await initDatabase();
      console.log('%c🚀 NEOVAM API RUNNING WITH ULTIMATE DEBUG', 'color: green; font-size: 16px');
      console.log(`📍 http://localhost:${PORT}`);
      console.log(`📝 Version: 2.2.0 - Ultimate Debug`);
      console.log(`📝 DEBUG ENDPOINTS AVAILABLE:`);
      console.log(`   • GET  /api/debug-test - Test if server is running`);
      console.log(`   • GET  /api/debug-env - Check environment variables`);
      console.log(`   • POST /api/debug-raw-body - Test raw body parsing`);
      console.log(`   • GET  /api/debug-check-column - Check database column`);
      console.log(`   • GET  /api/debug-blog-id/:id - Inspect specific blog`);
      console.log(`   • GET  /api/debug-all-blogs - See all blogs`);
      console.log(`   • GET  /api/health - Health check`);
      console.log(`   • POST /api/blogs - Create blog (with ultimate debug)`);
      console.log(`   • GET  /api/sitemap.xml - Sitemap (NEW)`);
      console.log(`   • GET  /sitemap.xml - Sitemap redirect (NEW)`);
    } catch (error) {
      console.error('❌ Failed to start:', error);
    }
  });
}

module.exports = app;