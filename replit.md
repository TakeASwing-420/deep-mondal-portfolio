# Deep Mondal Portfolio - Portfolio Website Application

## Overview

This is a full-stack portfolio website application for Deep Mondal, a Computer Science student and blockchain developer. The application is built with a React frontend using Vite, an Express.js backend, and includes both development and static deployment configurations. The portfolio showcases personal projects, experience, skills, and contact information with a modern, responsive design using shadcn/ui components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and theme variables
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage for demo)
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Development**: Hot module replacement with Vite middleware integration

### Dual Deployment Strategy
The application supports two deployment modes:
1. **Full-stack mode**: Express server with React frontend (development/production)
2. **Static mode**: Pre-built static site for GitHub Pages deployment

## Key Components

### Client-Side Components
- **Navigation**: Fixed navigation with smooth scrolling and active section highlighting
- **Hero Section**: Introduction with profile image and call-to-action buttons
- **About Section**: Personal information, education, and social links
- **Projects Section**: Showcase of key projects with technologies and links
- **Experience Section**: Professional experience and open-source contributions
- **Skills Section**: Categorized technical skills with visual organization
- **Contact Section**: Contact form with toast notifications

### Server Components
- **Route Registration**: Centralized API route management
- **Storage Interface**: Abstract storage layer with in-memory implementation
- **User Management**: Basic user schema and CRUD operations (expandable)
- **Development Middleware**: Vite integration for hot reloading

### UI System
- **Design System**: Comprehensive component library with consistent theming
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA compliance through Radix UI primitives
- **Theme Support**: CSS custom properties for light/dark mode capability

## Data Flow

### Development Mode
1. Express server starts and registers API routes
2. Vite middleware handles frontend asset serving and HMR
3. React app communicates with backend via `/api` routes
4. TanStack Query manages client-server state synchronization

### Static Mode
1. Vite builds optimized static assets using static configuration
2. Assets are copied from `attached_assets` to distribution folder
3. Static files are deployed to GitHub Pages via GitHub Actions
4. Contact form simulates submission with client-side feedback

### Component Communication
- Parent-child communication through props
- Global state through React Context (toast notifications)
- Server communication through standardized API client
- Form state managed locally with React Hook Form

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **Build Tools**: Vite, TypeScript, esbuild
- **UI Framework**: Radix UI primitives, Tailwind CSS, Lucide icons
- **Backend**: Express.js, Drizzle ORM, PostgreSQL drivers
- **Utilities**: date-fns, clsx, class-variance-authority

### Development Dependencies
- **Type Safety**: TypeScript with strict configuration
- **Code Quality**: ESLint, Prettier (implied by component structure)
- **Build Optimization**: Vite plugins for development enhancement

### Asset Management
- Static assets stored in `attached_assets` directory
- Profile image imported directly in components
- Font loading from Google Fonts CDN
- Icon system through Lucide React

## Deployment Strategy

### GitHub Pages Deployment
- **Trigger**: Automatic deployment on main branch push
- **Build Process**: Node.js 20, npm ci, Vite static build
- **Asset Handling**: Automated copying of attached assets
- **Configuration**: Base path configuration for subdirectory deployment
- **Permissions**: Read contents, write pages, id-token for secure deployment

### Development Deployment
- **Local Development**: `npm run dev` starts Express with Vite middleware
- **Production Build**: `npm run build` creates optimized full-stack build
- **Production Server**: `npm start` runs Express server with built assets

### Configuration Management
- **Static Config**: `vite.config.static.ts` for GitHub Pages builds
- **Development Config**: `vite.config.ts` for local development
- **Path Aliases**: Consistent import paths across client and shared code
- **Environment Variables**: Database URL and other configuration

## Changelog

- June 22, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.