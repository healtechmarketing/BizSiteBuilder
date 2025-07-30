# AI Automation Pro - Replit Project Guide

## Overview

This is a full-stack React application for an AI automation consultancy business. The app presents a landing page showcasing custom AI automation services for small to medium businesses (SMBs), with a focus on voice-powered automation systems. The application follows a modern full-stack architecture with React frontend, Express backend, and PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Language**: TypeScript with ES modules
- **API Style**: RESTful APIs for quote requests and contact messages
- **Middleware**: Express middleware for JSON parsing and request logging
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Development Environment
- **Build Tool**: Vite for fast development and optimized builds
- **Dev Server**: Custom Vite integration with Express for full-stack development
- **Hot Reload**: Vite HMR for instant frontend updates
- **TypeScript**: Shared types between frontend and backend

## Key Components

### Database Schema (Shared)
Located in `shared/schema.ts`, defines:
- **Quote Requests**: Customer inquiries with business details, feature requirements, and cost estimates
- **Contact Messages**: General contact form submissions
- Uses Drizzle ORM with PostgreSQL dialect and Zod validation schemas

### Storage Layer
- **Interface**: `IStorage` interface for data operations
- **Implementation**: In-memory storage (`MemStorage`) for development
- **Production Ready**: Configured for PostgreSQL via Drizzle ORM
- **Methods**: CRUD operations for quote requests and contact messages

### Frontend Components
- **Landing Page**: Complete marketing site with hero, services, pricing, case studies
- **Quote Form**: Dynamic form with real-time cost calculation based on selected features
- **Navigation**: Smooth scrolling navigation with mobile responsiveness
- **UI Library**: Full shadcn/ui component suite for consistent design

### API Endpoints
- `POST /api/quote-requests` - Submit quote request with validation
- `POST /api/contact-messages` - Submit contact form
- `GET /api/quote-requests` - Retrieve quote requests (admin)

## Data Flow

1. **User Interaction**: Users fill out quote form or contact form on frontend
2. **Form Validation**: Client-side validation using React Hook Form + Zod
3. **API Request**: TanStack Query sends validated data to Express API
4. **Server Processing**: Express validates data again and stores via storage interface
5. **Response**: Success/error responses with proper HTTP status codes
6. **UI Feedback**: Toast notifications inform users of success/failure

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- Vite for build tooling and development
- Express for backend server
- TypeScript for type safety

### UI and Styling
- Tailwind CSS for styling
- shadcn/ui + Radix UI for component primitives
- Lucide React for icons
- Class Variance Authority for component variants

### Database and Validation
- Drizzle ORM for database operations
- Neon Database serverless driver for PostgreSQL
- Zod for runtime validation
- Date-fns for date utilities

### Development Tools
- TSX for TypeScript execution
- ESBuild for production builds
- Replit-specific plugins for development environment

## Deployment Strategy

### Development
- Uses Vite dev server with Express middleware
- Hot module replacement for frontend changes
- TypeScript compilation with instant feedback
- Replit integration with runtime error overlay

### Production Build
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles Express server to `dist/index.js`
3. **Assets**: Static files served by Express in production
4. **Database**: PostgreSQL connection via environment variables

### Environment Configuration
- Development: In-memory storage, Vite dev server
- Production: PostgreSQL database, built static assets
- Database URL configuration via `DATABASE_URL` environment variable
- Drizzle migrations stored in `./migrations` directory

### Key Architectural Decisions

**Monorepo Structure**: Single repository with shared types between frontend and backend reduces duplication and ensures type safety across the full stack.

**In-Memory Development Storage**: Allows rapid development without database setup, while maintaining production PostgreSQL compatibility through the storage interface.

**Shared Validation**: Zod schemas shared between frontend and backend ensure consistent validation and reduce code duplication.

**Component-First UI**: shadcn/ui provides a complete, customizable component system that maintains design consistency while allowing for easy customization.

**Modern Tooling**: Vite + TypeScript + ESBuild provides fast development experience and optimized production builds.