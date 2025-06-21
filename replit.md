# Deep Mondal Portfolio - System Architecture

## Overview

This is a full-stack web application for Deep Mondal's personal portfolio website. The application is built using a modern React frontend with a Node.js/Express backend, designed to showcase projects, experience, and skills in software development and blockchain technology.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the stack
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast bundling

### Data Storage Strategy
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Drizzle config)
- **Connection**: Neon Database serverless driver for cloud PostgreSQL
- **Schema**: Shared schema definitions between client and server
- **Development Storage**: In-memory storage implementation for rapid prototyping

## Key Components

### Shared Components
- **Schema Definition**: Centralized database schema using Drizzle ORM
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Validation**: Zod schemas for runtime type validation

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling
- **Hero Section**: Landing area with profile image and call-to-action
- **About Section**: Personal information and education details
- **Projects Section**: Portfolio showcase with technology badges
- **Experience Section**: Professional experience timeline
- **Skills Section**: Categorized technical skills display
- **Contact Section**: Contact form with toast notifications
- **UI Components**: Comprehensive design system with 40+ reusable components

### Backend Components
- **Storage Interface**: Abstracted storage layer supporting multiple implementations
- **Route Registration**: Centralized route management system
- **Development Server**: Vite integration for hot module replacement
- **Error Handling**: Centralized error handling middleware

## Data Flow

### Development Mode
1. Client requests served by Vite development server
2. API requests proxied to Express server on port 5000
3. Hot module replacement for instant updates
4. In-memory storage for rapid development iteration

### Production Mode
1. Static assets served from Express server
2. API routes handled by Express backend
3. Database operations through Drizzle ORM
4. Optimized bundles for fast loading

## External Dependencies

### Core Dependencies
- **@radix-ui/***: Accessible UI component primitives
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **wouter**: Lightweight React router

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework
- **esbuild**: Fast bundler for production

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Port Configuration**: Internal port 5000, external port 80
- **Hot Reload**: Enabled through Vite development server
- **Database**: PostgreSQL provisioned through Replit

### Production Deployment
- **Target**: Autoscale deployment on Replit
- **Build Process**: Vite build for frontend, esbuild for backend
- **Static Assets**: Served from Express server
- **Database**: PostgreSQL with connection pooling via Neon

### Build Configuration
- **Frontend**: Compiled to `dist/public` directory
- **Backend**: Bundled to `dist/index.js` with external package references
- **Assets**: Optimized and fingerprinted for caching

## Recent Changes

```
- June 21, 2025: Created complete static portfolio website for Deep Mondal
  - Implemented responsive design with modern UI components
  - Added all sections: Hero, About, Projects, Experience, Skills, Contact
  - Integrated profile picture and resume information
  - Fixed CSS import order issue for proper styling
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```