# Arc-Lab MVP Studio - Replit.md

## Overview

Arc-Lab is a modern full-stack web application built as a marketing website for an award-winning MVP development studio. The application showcases the company's services, portfolio, and process while providing a contact form for potential clients. It emphasizes high-end design with glassmorphism effects, cosmic theming, and premium user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state, React hooks for local state
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with structured error handling
- **Development**: Hot reload with Vite integration for seamless full-stack development

### Database & Storage
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Development Storage**: In-memory storage implementation for development
- **Schema**: Shared schema definitions between frontend and backend

## Key Components

### Design System
- **Typography**: Inter font family with custom letter-spacing (-0.04em)
- **Color Palette**: 
  - Primary: Soft Purple (#7A5FFF)
  - Secondary: Teal (#00D1B2)
  - Background: Pure white with subtle grid overlay
- **Effects**: Glassmorphism with backdrop-filter blur effects
- **Shapes**: Large rounded corners (2xl radius) throughout

### UI Architecture
- **Component Library**: Complete shadcn/ui implementation
- **Responsive Design**: Mobile-first approach with breakpoint considerations
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Built on Radix UI primitives for comprehensive a11y support

### Page Structure
- **Single Page Application**: Landing page with smooth scroll navigation
- **Sections**: Navigation, Hero, Services, Portfolio, Process, Contact, Footer
- **Interactive Elements**: Contact form with validation and submission handling

## Data Flow

### Contact Form Workflow
1. User fills out contact form with validation
2. Frontend validates using Zod schemas
3. Data submitted to `/api/contact` endpoint
4. Backend validates and stores submission
5. Success feedback displayed to user
6. Form resets for new submissions

### State Management
- **Server State**: TanStack Query manages API calls and caching
- **Form State**: React Hook Form with Zod resolver for validation
- **UI State**: Local React state for component interactions
- **Toast Notifications**: Custom toast system for user feedback

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Routing**: Wouter for lightweight routing
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **UI Components**: Comprehensive Radix UI component suite

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for runtime type checking
- **Development**: TypeScript, ESLint configurations

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: PostgreSQL with connection pooling
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Utilities**: Date-fns for date manipulation

## Deployment Strategy

### Build Process
- **Development**: `npm run dev` - Runs both frontend and backend with hot reload
- **Production Build**: `npm run build` - Vite builds frontend, esbuild bundles backend
- **Database**: `npm run db:push` - Applies schema changes to database

### Environment Configuration
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Frontend**: Vite handles asset optimization and bundling
- **Backend**: Express serves API and static files in production

### Architecture Benefits
- **Type Safety**: End-to-end TypeScript with shared schemas
- **Developer Experience**: Fast hot reload, integrated error handling
- **Performance**: Optimized builds, efficient caching strategies
- **Scalability**: Modular architecture supports feature expansion
- **Maintainability**: Clear separation of concerns, comprehensive UI component system

The application is designed for rapid iteration while maintaining production-ready code quality, making it ideal for MVP development workflows.