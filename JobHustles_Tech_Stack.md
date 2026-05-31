# JobHustles Recruiting Platform — Tech Stack & Project Requirements

> **Architecture decision:** The platform uses a monorepo structure separated into distinct apps (`web` for the outer app, `admin` for the admin app, and `shared` for shared resources). For the MVP phase, **Supabase** will be utilized as the backend to maximize development velocity. The platform can expand or transition to custom backend services for remaining features as it scales. The frontend relies on **Next.js**, with a hybrid **Python** integration path reserved for AI/ML features (semantic matching, embeddings) in future phases.

---

## Table of Contents

1. [Frontend](#1-frontend)
2. [Backend — Modular Monolith](#2-backend--modular-monolith)
3. [Database & Storage](#3-database--storage)
4. [Payments & Billing](#4-payments--billing)
5. [Email & Notifications](#5-email--notifications)
6. [CV Builder](#6-cv-builder)
7. [Admin Matching Tools](#7-admin-matching-tools)
8. [Infrastructure & DevOps](#8-infrastructure--devops)
9. [Non-Functional Requirements](#9-non-functional-requirements)
10. [Database Models (Entity Overview)](#10-database-models-entity-overview)
11. [Build Phases](#11-build-phases)

---

## 1. Frontend

The frontend covers two interfaces: the **Site Portal** (applicants and employers) and the **Admin Portal** (internal team). Both are built within the same Next.js project using separate route groups.

### Core Framework & Language

| Tool | Role |
|---|---|
| **Next.js 14+ (App Router)** | Primary framework — SSR for SEO-critical job listing pages, RSC for dashboard data loading |
| **TypeScript** | Enforced across the entire codebase — shared types for CV, Job, User, and Application models |
| **React 18+** | Component layer for both portals |

### Styling & UI Components

| Tool | Role |
|---|---|
| **Tailwind CSS** | Utility-first styling with a shared design token config across both portals |
| **shadcn/ui** | Accessible, composable component library — tables, dialogs, forms, badges, dropdowns |
| **Framer Motion** *(optional)* | Page transitions, notification animations, CV template previews |

### Forms & Validation

| Tool | Role |
|---|---|
| **React Hook Form** | Multi-step forms — employer registration, job posting, CV builder, applicant profile |
| **Zod** | Schema validation shared between client forms and server API routes — single source of truth |

### Data Fetching & Client State

| Tool | Role |
|---|---|
| **TanStack Query (React Query)** | Server state management — job listings, applications, employer dashboards, notifications |
| **Zustand** | Lightweight client state — auth session, CV builder draft, notification queue |

### Data Visualisation

| Tool | Role |
|---|---|
| **Recharts** | Admin dashboard charts — revenue trends, application volume, user growth, credit usage |

### CV Builder — Client Side

| Tool | Role |
|---|---|
| **React-PDF (`@react-pdf/renderer`)** | In-browser CV preview with multiple templates; live re-render as user fills fields |

---

## 2. Backend — Modular Monolith

### Architecture

The frontend is structured as a monorepo containing distinct applications and shared packages. For the MVP, the backend heavily relies on **Supabase** (PostgreSQL, Auth, Edge Functions, Storage) to accelerate development.

```
directory-structure/
├── web/          # The outer app (Site Portal for applicants and employers)
├── admin/        # The admin app (Admin Portal for internal team)
└── shared/       # Shared resources, UI components, types, and utilities
```

**Future extraction path:** As the platform scales beyond the MVP, custom backend services (Node.js/Python) can be integrated or transition off Supabase into a dedicated modular monolith or microservices setup if required.

### Backend & API Layer (MVP)

| Tool | Role |
|---|---|
| **Supabase** | Backend-as-a-Service for the MVP phase, providing database, auth, and storage. |
| **Edge Functions** | For custom backend logic, payment webhook handling, and external API integrations. |
| **TypeScript** | Strict typing across all applications and edge functions. |
| **Zod** | Validation at the client and edge function layer. |

### Authentication

| Tool | Role |
|---|---|
| **Supabase Auth** | Handles user authentication, email/password login, and session management. |
| **OAuth 2.0** | Google and LinkedIn sign-in for applicants *(optional, Phase 2+)* |
| **Row Level Security (RLS)** | Postgres RLS enforces `applicant`, `employer`, and `admin` access rules securely. |

### Background Jobs

| Tool | Role |
|---|---|
| **Supabase Edge Functions & Webhooks** | Handling async tasks — email delivery, credit deduction on job approval, Stripe/Paystack webhook processing. |
| **pg_cron** *(optional)* | Scheduled tasks inside Postgres — subscription renewal reminders, expired job listing cleanup. |

### Python Integration (Future — AI Phase)

The AI/ML workload will be handled by a **Python sidecar service** (FastAPI) that runs alongside the Node.js monolith. Node.js calls it over internal HTTP. No changes to the monolith's public API are needed.

| Tool | Role |
|---|---|
| **FastAPI (Python)** | Sidecar service for AI features — embedding generation, semantic search, candidate scoring |
| **OpenAI API** or **local models** | Generates text embeddings from CV and job description content |
| **pgvector** | Stores embeddings in Postgres — vector similarity search for candidate-job matching |
| **Sentence-Transformers** *(optional)* | Open-source embedding alternative — avoids OpenAI API cost at scale |

---

## 3. Database & Storage

### Primary Database

| Tool | Role |
|---|---|
| **Supabase (PostgreSQL 15+)** | Primary relational database — users, jobs, applications, subscriptions, credits, transactions |
| **Supabase Client or Prisma ORM** | Data access layer; Supabase JS client handles most interactions natively. |

### Caching & Search

| Tool | Role |
|---|---|
| **Redis** | Session store, rate limiting, BullMQ broker, cached job listing pages |
| **Postgres Full-Text Search (`tsvector`)** | Keyword search across job titles and descriptions at launch — no external service needed |
| **Algolia / Meilisearch** *(optional, scale)* | Upgrade path for job and candidate search — typo tolerance, faceted filters, geosearch |

### File Storage

| Tool | Role |
|---|---|
| **Supabase Storage** | Primary file store — CV PDFs, company logos, profile photos. |
| **UploadThing** *(optional)* | Simplified Next.js file upload abstraction if needed. |

---

## 4. Payments & Billing

The platform supports **multiple payment gateways** to maximise coverage across global and African markets.

| Gateway | Primary Use Case | Market |
|---|---|---|
| **Stripe** | Subscription billing (recurring), one-time credit purchases, Stripe Customer Portal for self-serve billing management | Global / International |
| **Paystack** | Subscription and credit purchases for Nigerian and African employers — card, bank transfer, USSD | Nigeria, Ghana, Kenya, South Africa |
| **Flutterwave** | Broader African market coverage — mobile money, bank transfer, card, Barter | Pan-African |

### Payment Architecture

- All three gateways emit **webhook events** to the same internal endpoint, normalised by a gateway adapter layer before hitting BullMQ.
- The `Transaction` model is **gateway-agnostic** — stores `gateway: 'stripe' | 'paystack' | 'flutterwave'` alongside the gateway-specific reference ID.
- **Never store raw card data.** Stripe.js, Paystack Inline, and Flutterwave's inline script handle card capture on the client.
- The `CreditLedger` is **append-only** — debits and credits are separate insert rows. The current balance is always computed as `SUM(credits) - SUM(debits)` to maintain a full audit trail.
- Employer subscription status is synced from webhook events (`subscription.created`, `charge.success`, `transfer.failed`, etc.) — the DB is never updated from the client.

### Key Payment Flows

1. **Employer subscribes** → Paystack/Stripe/Flutterwave checkout → webhook → subscription row created → employer dashboard unlocked
2. **Employer purchases credits** → one-time payment → webhook → `CreditLedger` insert
3. **Employer posts job** → 1 credit deducted from ledger → job enters pending approval
4. **Admin approves job** → job status set to `live` — no additional payment action
5. **Subscription renews** → webhook → renewal recorded, subscription extended
6. **Payment fails** → webhook → employer notified by email, account access restricted

---

## 5. Email & Notifications

### Transactional Email

| Tool | Role |
|---|---|
| **Resend** | Email delivery service with high deliverability and developer-friendly API |
| **React Email** | Type-safe, component-based email templates co-located with the codebase |

### Email Triggers

| Event | Recipient |
|---|---|
| Account registration | Applicant / Employer |
| Email verification | Applicant / Employer |
| Password reset | Applicant / Employer |
| Job post submitted for approval | Employer (confirmation) |
| Job post approved / rejected | Employer |
| New application received | Employer |
| Application status updated | Applicant |
| Candidate matched to job by admin | Employer |
| Credit balance low | Employer |
| Subscription renewal upcoming | Employer |
| Payment failure | Employer |

### In-App Notifications

| Tool | Role |
|---|---|
| **`Notification` DB table** | Persistent in-app notification store — polled by TanStack Query on page focus |
| **Server-Sent Events (SSE)** *(optional)* | Real-time push for job approval and new application alerts — lower overhead than WebSockets |

---

## 6. CV Builder

The CV builder is one of the platform's core differentiators — applicants can create a professional CV directly on the platform without any external tool.

| Tool | Role |
|---|---|
| **React Hook Form + Zod** | Multi-step form — personal info, education, work experience, skills, certifications |
| **React-PDF (`@react-pdf/renderer`)** | Live client-side preview — re-renders the CV template as the user types |
| **Cloudflare R2** | Stores the generated PDF after the user saves or downloads |
| **Puppeteer** *(optional, server-side)* | Server-side PDF generation fallback for templates that exceed React-PDF's layout capabilities |

### CV Features (per PRD)

- Multiple selectable CV templates
- Live preview pane during editing
- Download as PDF
- Save and update stored CV
- Admin can view and (if needed) edit any applicant's CV

---

## 7. Admin Matching Tools

The admin matching feature allows internal staff to proactively match candidates to jobs, even if those candidates did not apply.

### Phase 1 — Manual Matching (Launch)

| Tool | Role |
|---|---|
| **Postgres Full-Text Search** | Admin searches the candidate database by skills, job title, location, and experience level |
| **Prisma filtered queries** | Results filtered and ranked by profile completeness, recency, and keyword relevance |
| **Admin UI — shadcn/ui data table** | Paginated candidate search results with match action button |

### Phase 2 — AI-Powered Matching (Future)

| Tool | Role |
|---|---|
| **Python FastAPI sidecar** | Runs embedding generation and vector similarity queries outside the Node.js monolith |
| **OpenAI `text-embedding-3-small`** | Generates embeddings from CV text and job descriptions |
| **pgvector (Postgres extension)** | Stores and queries embeddings — cosine similarity search returns ranked candidate list |
| **Sentence-Transformers** *(alternative)* | Open-source embedding model — eliminates OpenAI API cost for high-volume matching |

---

## 8. Infrastructure & DevOps

### Hosting

| Tool | Role |
|---|---|
| **Vercel** | Next.js frontend hosting for both `web` and `admin` apps. |
| **Supabase Platform** | Managed PostgreSQL, Auth, Storage, and Edge Functions. |
| **Cloudflare** | DNS and caching layer in front of Vercel. |

### CI/CD & Code Quality

| Tool | Role |
|---|---|
| **GitHub Actions** | Lint, type-check, test, and deploy pipeline — runs on every PR and push to `main` |
| **ESLint + Prettier** | Code quality and formatting — enforced in CI, fails PRs with violations |
| **Husky + lint-staged** | Pre-commit hooks — prevents unformatted or type-unsafe code from being committed |

### Testing

| Tool | Role |
|---|---|
| **Vitest** | Unit and integration tests — business logic, service methods, payment flow handlers |
| **Playwright** | End-to-end tests for critical user flows — registration, job application, admin approval |
| **Supertest** | API endpoint testing for the Node.js backend |

### Monitoring & Observability

| Tool | Role |
|---|---|
| **Sentry** | Error tracking for frontend and backend with source maps — alerts on new issues |
| **PostHog** *(optional)* | Product analytics — application funnel tracking, employer onboarding conversion rates |
| **BetterStack / UptimeRobot** *(optional)* | Uptime monitoring with alerting — supports the PRD's high-availability requirement |

---

## 9. Non-Functional Requirements

### Security

| Requirement | Implementation |
|---|---|
| HTTPS everywhere | Enforced at Cloudflare and Vercel — no plain HTTP in production |
| Role-based access control (RBAC) | `applicant`, `employer`, `admin` roles enforced on every API route via middleware guards |
| Input sanitisation | Zod schema validation on all API inputs — Prisma parameterised queries prevent SQL injection |
| CSRF protection | SameSite cookies in production; CSRF tokens on sensitive state-mutation endpoints |
| Rate limiting | Redis-backed rate limiting on auth routes, job application submissions, and payment webhook ingestion |
| PII data handling | CV data, phone numbers, and emails are sensitive — admin CV access is logged; define a data retention policy |
| Stripe/Paystack/Flutterwave card capture | Client-side SDKs only — raw card data never touches the application server |

### Performance

| Requirement | Implementation |
|---|---|
| Core Web Vitals | LCP &lt; 2.5s, CLS &lt; 0.1 — job listing pages SSR'd with Next.js, images via `next/image` with lazy loading |
| Pagination | Cursor-based pagination on all list endpoints — prevents full-table scans as data grows |
| DB indexing | Indexes on: `Job.status`, `Job.category`, `Application.applicantId`, `Application.jobId`, `User.email` |
| Caching | Redis caches public job listing pages — reduces DB load on high-traffic browse routes |

### Scalability

| Requirement | Implementation |
|---|---|
| Stateless API | Session stored in Redis — allows horizontal scaling of the Node.js app without sticky sessions |
| Background job isolation | BullMQ workers run async — email sending and PDF generation do not block API response time |
| Feature flags | Postgres-backed or PostHog feature flags — new features toggled per-user without a deploy |
| Modular monolith | Modules can be extracted into independent services or a Python sidecar without a full rewrite |

### Compliance

| Requirement | Implementation |
|---|---|
| NDPR (Nigeria Data Protection Regulation) | User data deletion endpoint, explicit consent on registration, data portability for applicants |
| GDPR *(if serving EU users)* | Same as NDPR — consent, deletion, and portability endpoints |
| PCI DSS | Stripe, Paystack, and Flutterwave handle card data — never stored on application servers |
| Privacy policy & Terms of Service | Must be live and accepted on registration before launch |

---

## 10. Database Models (Entity Overview)

| Model | Key Fields | Notes |
|---|---|---|
| `User` | `id`, `email`, `phone`, `role`, `passwordHash`, `status` | Shared base — role determines which sub-model exists |
| `ApplicantProfile` | `userId`, `fullName`, `location`, `bio`, `skills[]` | One-to-one with `User` |
| `Education` | `applicantId`, `institution`, `degree`, `startYear`, `endYear` | One-to-many on `ApplicantProfile` |
| `WorkExperience` | `applicantId`, `company`, `title`, `startDate`, `endDate`, `description` | One-to-many on `ApplicantProfile` |
| `CV` | `applicantId`, `templateId`, `pdfUrl`, `isDefault`, `updatedAt` | Multiple CVs per applicant; one marked default |
| `Employer` | `userId`, `companyName`, `industry`, `logoUrl`, `website`, `creditBalance` | One-to-one with `User` |
| `Job` | `employerId`, `title`, `description`, `category`, `location`, `type`, `salaryRange`, `status` | Status: `draft`, `pending`, `live`, `rejected`, `expired` |
| `Application` | `applicantId`, `jobId`, `cvId`, `status`, `matchedByAdmin` | Status: `applied`, `reviewed`, `matched`, `rejected` |
| `Subscription` | `employerId`, `tier`, `gateway`, `status`, `renewsAt` | Tier: `basic`, `standard`, `premium` |
| `CreditLedger` | `employerId`, `type`, `amount`, `referenceId`, `createdAt` | Append-only — type: `purchase` or `deduction` |
| `Transaction` | `employerId`, `gateway`, `gatewayRef`, `amount`, `currency`, `status`, `type` | Gateway: `stripe`, `paystack`, `flutterwave` |
| `Notification` | `userId`, `type`, `message`, `isRead`, `createdAt` | Consumed by both applicants and employers |
| `AdminMatchLog` | `adminId`, `applicantId`, `jobId`, `note`, `createdAt` | Audit log for all admin-initiated matches |

---

## 11. Build Phases

### Phase 1 — Foundation
**Scope:** Project scaffold, DB schema, auth, and core profiles.

- Set up Next.js (frontend) and Node.js/Fastify modular monolith (backend)
- Implement full Prisma schema with all models and migrations
- Build user registration and login (email/password, JWT, refresh tokens)
- RBAC middleware — applicant, employer, admin guards
- Applicant profile creation (personal info, education, experience, skills)
- Employer company profile creation

### Phase 2 — CV Builder
**Scope:** Full CV creation, templates, preview, and PDF download.

- Multi-step CV form — education, experience, skills, certifications
- At least 2 selectable templates
- Live React-PDF preview pane
- PDF download + cloud storage to Cloudflare R2
- Admin can access all CVs

### Phase 3 — Employer Job Posting Flow
**Scope:** Subscriptions, credit purchases, and job creation.

- Stripe, Paystack, and Flutterwave integration (subscription tiers + credit packs)
- Gateway adapter layer for normalised webhook handling
- Credit ledger — append-only debit/credit model
- Job creation form (requirements, salary, location, type)
- Employer dashboard — credit balance, active jobs, subscription status

### Phase 4 — Admin Portal
**Scope:** Job approval queue, user management, and payment oversight.

- Admin dashboard — overview of users, jobs, applications, revenue
- Job approval queue — approve or reject pending jobs
- User management — suspend/approve applicant and employer accounts
- Payment transaction history and subscription monitoring
- CV access panel for all registered applicants

### Phase 5 — Job Search, Applications & Notifications
**Scope:** Public-facing site portal for applicants.

- Browse and filter jobs by category, location, and keyword (Postgres FTS)
- Apply to jobs (attaches CV, creates Application record)
- Application status tracking for applicants
- Employer application review interface
- Email notifications (Resend + React Email) for all key events
- In-app notification feed

### Phase 6 — Admin Candidate Matching
**Scope:** Manual matching tool for the admin portal.

- Admin candidate search — filtered by skills, location, experience, availability
- Match candidate to job action (even without an application)
- `AdminMatchLog` audit trail
- Employer notified of matched candidates in their dashboard

### Phase 7 — Hardening, Security & Launch Prep
**Scope:** Security audit, performance pass, compliance, and monitoring.

- Rate limiting on auth and submission endpoints (Redis)
- RBAC audit — verify all endpoints are guarded correctly
- DB indexing review and `EXPLAIN ANALYZE` on heavy queries
- Core Web Vitals audit — LCP, CLS, FID
- NDPR compliance — consent flow, data deletion endpoint, privacy policy live
- Sentry integration — error tracking for frontend and backend
- Uptime monitoring setup
- Load testing and final QA pass

### Phase 8 — Future Enhancements
**Scope:** AI matching, messaging, and mobile app.

- Python FastAPI sidecar — embedding generation via OpenAI or Sentence-Transformers
- pgvector integration in Postgres — semantic candidate-job similarity search
- In-app messaging between employers and applicants
- Interview scheduling module
- Skill assessment tests
- React Native / Expo mobile application sharing the same backend API

---

*Document version 1.0 — Based on JobHustles PRD v1.0*
