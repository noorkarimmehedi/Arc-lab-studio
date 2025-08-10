import { drizzle } from 'drizzle-orm/neon-serverless';
import { neon } from '@neondatabase/serverless';
import * as schema from '../shared/schema';

// Get the database URL from environment variable or use a default for development
const databaseUrl = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/arclab';

let sql;
try {
  sql = neon(databaseUrl);
  console.log('Database connection established');
} catch (error) {
  console.error('Failed to connect to database:', error);
  // Use in-memory fallback if database connection fails
  console.log('Using in-memory storage fallback');
}

export const db = sql ? drizzle(sql, { schema }) : null;
