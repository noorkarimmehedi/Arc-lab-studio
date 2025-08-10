# Arc Lab Studio

A modern web application for Arc Lab Studio, featuring a beautiful UI built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design with modern UI components
- Contact form with database storage
- PostgreSQL database integration with Drizzle ORM
- Fallback to in-memory storage when database is not available

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database (optional, falls back to in-memory storage if not available)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd Arc-lab-studio-1
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Database Setup (Optional):
   
   The application can work with or without a PostgreSQL database. If you want to use a database:

   a. Set up a PostgreSQL database (local or cloud service like Neon)
   
   b. Set the DATABASE_URL environment variable:
   ```
   export DATABASE_URL=postgresql://username:password@hostname:port/database
   ```
   
   c. Run database migrations:
   ```
   npm run db:push
   ```

### Development

Start the development server:
```
npm run dev
```

### Production

Build and start the production server:
```
npm run build
npm run start
```

## Architecture

- **Client**: React with TypeScript, styled with Tailwind CSS
- **Server**: Express.js API backend
- **Database**: PostgreSQL with Drizzle ORM (with in-memory fallback)

## Contact Form

The application includes a contact form that stores submissions in the database. If no database is available, it falls back to in-memory storage.

## API Endpoints

- `POST /api/contact`: Submit a contact form
- `GET /api/contact`: Get all contact form submissions (admin only)
