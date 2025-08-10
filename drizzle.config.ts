import { defineConfig } from "drizzle-kit";

// Default database URL for local development
const databaseUrl = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/arclab';

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
