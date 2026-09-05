require('dotenv').config();
const { Pool } = require('pg');
const path = require('path');
const fs = require('fs');

let pool = null;

/**
 * Get database connection string from environment variables
 * Tries multiple possible variable names for flexibility
 */
const getConnectionString = () => {
  return process.env.DATABASE_URL || 
         process.env.POSTGRES_URL || 
         process.env.POSTGRES_PRISMA_URL ||
         process.env.DATABASE_URL_UNPOOLED ||
         process.env.POSTGRES_URL_NON_POOLING;
};

/**
 * Create or return existing PostgreSQL connection pool
 */
const getPool = () => {
  if (!pool) {
    const connectionString = getConnectionString();
    
    if (!connectionString) {
      throw new Error('❌ No database connection string found in environment variables');
    }

    // Log which host we're connecting to (without exposing credentials)
    const hostMatch = connectionString.match(/@([^/]+)/);
    if (hostMatch) {
      console.log(`📊 Connecting to database host: ${hostMatch[1]}`);
    }

    pool = new Pool({
      connectionString: connectionString,
      ssl: {
        rejectUnauthorized: false, // Required for Neon/cloud databases
        sslmode: 'require'
      },
      // Connection pool settings
      max: 20, // Maximum number of clients in the pool
      idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
      connectionTimeoutMillis: 5000, // Return an error after 5 seconds if connection not established
    });

    // Handle pool errors
    pool.on('error', (err) => {
      console.error('❌ Unexpected database pool error:', err.message);
    });

    console.log('✅ PostgreSQL connection pool created');
  }
  return pool;
};

/**
 * Initialize database tables and run migrations
 */
const initDatabase = async () => {
  const pool = getPool();
  try {
    // Test connection with a simple query
    const result = await pool.query('SELECT NOW() as current_time');
    console.log('✅ PostgreSQL connected successfully at:', result.rows[0].current_time);
    
    // Create tables if they don't exist
    const createTablesSQL = `
      -- Create extension for UUID generation if needed
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

      -- Blogs table
      CREATE TABLE IF NOT EXISTS blogs (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        excerpt TEXT,
        content TEXT,
        category TEXT,
        tags TEXT[] DEFAULT '{}',
        "featuredImage" TEXT,
        "metaTitle" TEXT,
        "metaDescription" TEXT,
        keywords TEXT,
        published BOOLEAN DEFAULT true,
        author JSONB DEFAULT '{"name": "NeoVam Admin", "role": "Admin"}'::jsonb,
        "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        views INTEGER DEFAULT 0
      );

      -- Create index on slug for faster lookups
      CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
      
      -- Create index on published and createdAt for filtering/sorting
      CREATE INDEX IF NOT EXISTS idx_blogs_published_created ON blogs(published, "createdAt" DESC);

      -- Users table for admin authentication
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        name TEXT,
        email TEXT UNIQUE,
        role TEXT DEFAULT 'admin',
        "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        "lastLogin" TIMESTAMP
      );

      -- Insert default admin user if not exists
      INSERT INTO users (username, password, name, email, role) 
      VALUES ('admin', 'neovam@2024', 'NeoVam Admin', 'admin@neovam.com', 'admin')
      ON CONFLICT (username) DO NOTHING;

      -- Create function to automatically update updatedAt timestamp
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
          NEW."updatedAt" = CURRENT_TIMESTAMP;
          RETURN NEW;
      END;
      $$ language 'plpgsql';

      -- Create trigger for blogs table
      DROP TRIGGER IF EXISTS update_blogs_updated_at ON blogs;
      CREATE TRIGGER update_blogs_updated_at
          BEFORE UPDATE ON blogs
          FOR EACH ROW
          EXECUTE FUNCTION update_updated_at_column();
    `;
    
    await pool.query(createTablesSQL);
    console.log('✅ Database tables initialized successfully');
    
    // Migrate existing data from db.json if needed
    await migrateExistingData(pool);
    
    // Log table statistics
    const stats = await pool.query(`
      SELECT 
        (SELECT COUNT(*) FROM blogs) as blog_count,
        (SELECT COUNT(*) FROM users) as user_count
    `);
    
    console.log(`📊 Database stats: ${stats.rows[0].blog_count} blogs, ${stats.rows[0].user_count} users`);
    
  } catch (error) {
    console.error('❌ Database initialization error:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.error('💡 Tip: Make sure your database server is running and the connection string is correct');
    } else if (error.code === '28P01') {
      console.error('💡 Tip: Invalid password - check your database credentials');
    } else if (error.code === '3D000') {
      console.error('💡 Tip: Database does not exist - check your database name');
    }
    throw error;
  }
};

/**
 * Migrate existing data from db.json file to PostgreSQL
 */
const migrateExistingData = async (pool) => {
  try {
    const DB_FILE = path.join(__dirname, 'db.json');
    
    if (!fs.existsSync(DB_FILE)) {
      console.log('📁 No db.json file found for migration');
      return;
    }

    console.log('📁 Found db.json file, checking for data to migrate...');
    const fileContent = fs.readFileSync(DB_FILE, 'utf8');
    
    // Handle empty file
    if (!fileContent.trim()) {
      console.log('📁 db.json file is empty');
      return;
    }

    const data = JSON.parse(fileContent);
    
    // Migrate blogs
    if (data.blogs && Array.isArray(data.blogs) && data.blogs.length > 0) {
      console.log(`🔄 Migrating ${data.blogs.length} blogs from db.json...`);
      let migratedCount = 0;
      
      for (const blog of data.blogs) {
        try {
          // Check if blog already exists
          const exists = await pool.query('SELECT id FROM blogs WHERE id = $1 OR slug = $2', [blog.id, blog.slug]);
          
          if (exists.rows.length === 0) {
            const query = `
              INSERT INTO blogs (
                id, title, slug, excerpt, content, category, tags,
                "featuredImage", "metaTitle", "metaDescription", keywords,
                published, author, "createdAt", "updatedAt", views
              ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
            `;
            
            const values = [
              blog.id || `blog-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              blog.title || 'Untitled',
              blog.slug || `untitled-${Date.now()}`,
              blog.excerpt || null,
              blog.content || null,
              blog.category || 'Uncategorized',
              blog.tags || [],
              blog.featuredImage || null,
              blog.metaTitle || blog.title || null,
              blog.metaDescription || blog.excerpt || null,
              blog.keywords || null,
              blog.published !== false,
              JSON.stringify(blog.author || { name: 'NeoVam Admin', role: 'Admin' }),
              blog.createdAt ? new Date(blog.createdAt) : new Date(),
              blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
              blog.views || 0
            ];
            
            await pool.query(query, values);
            migratedCount++;
          }
        } catch (err) {
          console.log(`⚠️ Failed to migrate blog "${blog.title || 'Untitled'}":`, err.message);
        }
      }
      
      console.log(`✅ Successfully migrated ${migratedCount} blogs from db.json`);
    } else {
      console.log('📁 No blogs found in db.json to migrate');
    }
    
  } catch (error) {
    console.log('⚠️ Migration warning:', error.message);
    // Don't throw error - migration failure shouldn't crash the server
  }
};

// ============================================
// ✅ FIXED: Only this function changed!
// ============================================
/**
 * Execute a query with parameters - FIXED VERSION
 * No manual client connection/release - lets pool handle it
 */
const query = async (text, params) => {
  try {
    const pool = getPool();
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    console.error('❌ Database query error:', {
      message: error.message,
      code: error.code,
      detail: error.detail,
      table: error.table,
      constraint: error.constraint
    });
    throw error;
  }
};

/**
 * Execute a transaction with multiple queries
 */
const transaction = async (callback) => {
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

/**
 * Close all database connections (useful for graceful shutdown)
 */
const closePool = async () => {
  if (pool) {
    await pool.end();
    pool = null;
    console.log('✅ Database connection pool closed');
  }
};

// Handle application shutdown gracefully
process.on('SIGINT', async () => {
  console.log('\n🔄 Received SIGINT. Closing database connections...');
  await closePool();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🔄 Received SIGTERM. Closing database connections...');
  await closePool();
  process.exit(0);
});

module.exports = {
  getPool,
  initDatabase,
  query,
  transaction,
  closePool
};