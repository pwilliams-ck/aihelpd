# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm i` - Install dependencies
- `pnpm dev` - Start development server at localhost:3000
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Payload CMS
- `pnpm generate:types` - Generate TypeScript types from Payload collections
- `pnpm db:fresh` - Fresh database migration (destructive)
- `pnpm db:seed` - Seed database with demo data

## Git

This repo opts in to Claude Code pushing branches and opening pull requests:
- Claude may `git push` a **feature branch** (never `main`) and open a PR with `gh pr create`.
- Opening only — never merge, never push to `main`, never tag. Those stay human-only.
- Still approval-gated: Claude shows the exact `git push` / `gh pr create` command and waits before running it.

## Project Architecture

This is a Next.js 15 application with Payload CMS as a headless CMS, using the App Router and TypeScript.

### Key Technologies
- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS, Shadcn/ui
- **Backend**: Payload CMS, tRPC, MongoDB (via Mongoose)
- **State Management**: TanStack React Query with tRPC
- **Authentication**: Payload CMS built-in auth
- **Deployment**: Vercel (with Payload Cloud plugin)

### Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (app)/             # Main application routes
│   │   ├── (auth)/        # Authentication pages
│   │   ├── (home)/        # Public pages with dynamic routing
│   │   └── api/trpc/      # tRPC API endpoint
│   └── (payload)/         # Payload admin and API routes
├── collections/           # Payload CMS collections (Products, Categories, Users, Media)
├── components/           # Reusable React components
│   └── ui/              # Shadcn/ui components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── modules/             # Feature-based modules
│   ├── auth/           # Authentication logic
│   ├── categories/     # Category management
│   ├── home/           # Home page components
│   └── ui/             # UI components and views
└── trpc/               # tRPC configuration and routers
```

### Payload CMS Collections
- **Users**: Authentication and user management
- **Categories**: Hierarchical category system with parent/child relationships
- **Products**: E-commerce products with category relationships, pricing, and media
- **Media**: File uploads and media management

### Route Groups
- `(app)`: Main application with public and authenticated routes
- `(payload)`: Payload CMS admin interface and API routes
- `(auth)`: Authentication pages (sign-in, sign-up)
- `(home)`: Public pages with dynamic category routing `[category]/[subcategory]`

### tRPC Setup
- API routes in `src/trpc/routers/`
- Modular router structure with auth and categories modules
- Client and server utilities in `src/trpc/`

### Environment Variables
Required environment variables (see `.env.example`):
- `DATABASE_URI`: MongoDB connection string
- `PAYLOAD_SECRET`: Payload CMS secret key
- `NEXT_PUBLIC_APP_URL`: Application URL

### Type Generation
- Payload types are auto-generated to `src/payload-types.ts`
- Run `pnpm generate:types` after modifying collections

### Styling Conventions
- Uses Tailwind CSS with custom configuration
- Shadcn/ui components in `src/components/ui/`
- CSS modules and global styles in `src/app/(app)/globals.css`

### Module Organization
Features are organized in modules under `src/modules/` with:
- Server procedures (tRPC)
- UI components
- Types and schemas
- Utilities specific to that module