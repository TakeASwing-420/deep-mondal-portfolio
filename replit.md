# Replit.md

## Overview

This is a full-stack web application featuring a personal portfolio website for a computer science student and blockchain developer. The application is built with a modern tech stack including React frontend, Express.js backend, and PostgreSQL database with Drizzle ORM. The project is designed as a single-page application showcasing professional experience, projects, skills, and contact information.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **API Style**: RESTful API design with `/api` prefix

### Development Setup
- **Development Server**: Vite dev server with HMR
- **Backend Dev**: tsx for TypeScript execution
- **Database**: Neon Database (serverless PostgreSQL)
- **Build Process**: Vite for frontend, esbuild for backend

## Key Components

### Database Schema
- **Users Table**: Basic user management with id, username, and password fields
- **Drizzle Configuration**: PostgreSQL dialect with schema validation using Zod

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Main landing area with call-to-action buttons
- **About Section**: Personal information and education details
- **Projects Section**: Showcase of development projects with technologies used
- **Experience Section**: Professional experience and achievements
- **Skills Section**: Technical skills organized by category
- **Contact Section**: Contact form with toast notifications

### UI System
- **Design System**: shadcn/ui components with consistent styling
- **Theme**: Light theme with neutral color palette
- **Typography**: Inter font family
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Storage Layer
- **Interface**: IStorage interface for database operations
- **Implementation**: MemStorage for in-memory development storage
- **CRUD Operations**: User creation, retrieval by ID and username

## Data Flow

1. **Frontend Requests**: Client makes API calls using TanStack Query
2. **Express Middleware**: Request logging and JSON parsing
3. **Route Handling**: Routes prefixed with `/api` for backend operations
4. **Storage Layer**: Database operations through storage interface
5. **Response**: JSON responses with appropriate HTTP status codes

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM)
- UI components (@radix-ui/* components)
- State management (@tanstack/react-query)
- Styling (Tailwind CSS, class-variance-authority)
- Forms (react-hook-form, @hookform/resolvers)
- Utilities (date-fns, clsx, cmdk)

### Backend Dependencies
- Express.js for server framework
- Drizzle ORM for database operations
- Neon Database for PostgreSQL hosting
- Session management (express-session, connect-pg-simple)
- Development tools (tsx, esbuild)

### Build Dependencies
- Vite with React plugin
- TypeScript compilation
- PostCSS with Tailwind CSS
- ESBuild for backend bundling

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: ESBuild bundles server to `dist/index.js`
- **Static Assets**: Served by Express in production

### Environment Configuration
- **Development**: NODE_ENV=development with hot reloading
- **Production**: NODE_ENV=production with bundled assets
- **Database**: DATABASE_URL environment variable required

### Hosting Platform
- **Target**: Replit autoscale deployment
- **Port Configuration**: Internal port 5000, external port 80
- **Process Management**: npm scripts for development and production

## Changelog
- June 21, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.