-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  category TEXT,
  tags TEXT[],
  "featuredImage" TEXT,
  "metaTitle" TEXT,
  "metaDescription" TEXT,
  keywords TEXT,
  published BOOLEAN DEFAULT true,
  author JSONB,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  views INTEGER DEFAULT 0
);

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT,
  email TEXT UNIQUE,
  role TEXT DEFAULT 'admin'
);

-- Insert default user (password: neovam@2024)
INSERT INTO users (username, password, name, email, role) 
VALUES ('admin', 'neovam@2024', 'NeoVam Admin', 'admin@neovam.com', 'admin')
ON CONFLICT (username) DO NOTHING;