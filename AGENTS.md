# AGENTS.md

## Cursor Cloud specific instructions

This is a single Next.js 16 application (App Router) called **Elysian House** — an event/brand landing page. There is no database, no Docker, and no monorepo setup.

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 3000) |
| Build | `npm run build` |
| Lint | `npm run lint` (ESLint 9) |

### Notes

- The codebase has pre-existing lint errors (React hooks purity warnings, unescaped entities, and a debug `fetch` call in `src/app/gathering/page.tsx`). These are not regressions — they exist in the current main branch.
- No automated test suite exists (`npm test` is not configured).
- Environment variables for Resend email (`RESEND_API_KEY`, `FROM_EMAIL`, `NOTIFICATION_EMAIL`) are optional. The registration form and API route work without them — email sending simply fails gracefully and is logged.
- The dev server uses Turbopack by default (Next.js 16).
