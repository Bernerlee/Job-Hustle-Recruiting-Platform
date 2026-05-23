# JobHustles Recruiting Platform
## Tech Stack Options & Pricing Guide

This document outlines the free and premium options for the selected technology stack of the JobHustles Recruiting Platform, alongside a structured project roadmap based on the provided technical specifications and PRD.

---

### 1. Frontend & UI
The frontend relies heavily on open-source frameworks. The primary costs are associated with hosting and potential premium UI component libraries if custom development is bypassed.

| Technology | Free / Open Source Option | Premium / Paid Option | Pricing Estimate |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js 14+, React 18+ (Free) | N/A | $0 |
| **Styling & UI** | Tailwind CSS, shadcn/ui, Framer Motion (Free) | Tailwind UI (Optional pre-built components) | ~$299 (One-time fee) |
| **State & Forms** | TanStack Query, Zustand, React Hook Form, Zod (Free) | N/A | $0 |
| **Data Viz & PDF** | Recharts, React-PDF (Free) | N/A | $0 |

### 2. Backend & Runtime
The backend leverages robust, free open-source tools. Costs arise from server scaling and enterprise-level queueing if self-hosting is not preferred.

| Technology | Free / Open Source Option | Premium / Paid Option | Pricing Estimate |
| :--- | :--- | :--- | :--- |
| **Backend & API** | Supabase (Free Tier) | Supabase Pro | $25/mo |
| **Authentication** | Supabase Auth (Free up to 50k MAU) | Supabase Pro Auth | Included in $25/mo + overage |
| **Edge Functions/Queues** | Supabase Edge Functions (Free Tier) | Supabase Pro | Included in $25/mo + overage |

### 3. Database, Search & Storage
Data storage and search will scale as the user base grows. Starting with free tiers is recommended, migrating to paid tiers as CV storage and search volume increase.

| Technology | Free / Open Source Option | Premium / Paid Option | Pricing Estimate |
| :--- | :--- | :--- | :--- |
| **Primary DB** | Supabase PostgreSQL (Free Tier, 500MB) | Supabase Pro | $25/mo for 8GB compute |
| **Search** | Postgres Full-Text Search (Built-in, Free) | Algolia / Meilisearch Cloud | Algolia: Free up to 10k reqs, then $1/1k reqs |
| **File Storage** | Supabase Storage (Free up to 1GB) | Supabase Pro Storage | $0.021/GB storage overage |

### 4. Infrastructure, Hosting & DevOps
Deploying a monorepo setup with Supabase allows for cost-effective hosting strategies in the early MVP phases.

| Technology | Free / Open Source Option | Premium / Paid Option | Pricing Estimate |
| :--- | :--- | :--- | :--- |
| **Frontend Hosting** | Vercel (Hobby Tier) | Vercel Pro | $20/user/mo |
| **Backend Hosting** | Supabase Platform (Free Tier) | Supabase Pro | $25/mo + usage |
| **Monitoring** | Sentry (Developer Tier - Free) | Sentry Team | $26/mo |
| **Analytics** | PostHog (Open source self-host or Free Cloud tier) | PostHog Cloud Premium | Scale-based pricing |

### 5. Payments & Communications
Transactional tools generally operate on a pay-as-you-go model or take a percentage of transactions.

| Technology | Free / Open Source Option | Premium / Paid Option | Pricing Estimate |
| :--- | :--- | :--- | :--- |
| **Payments** | Stripe, Paystack, Flutterwave (No fixed monthly fees) | Per-transaction fees apply | Stripe: ~2.9% + 30¢ / Paystack: ~1.5% + NGN 100 |
| **Emails** | Resend (Free up to 3,000 emails/mo) | Resend Pro | $20/mo for 50,000 emails |

### 6. AI & Machine Learning (Future Phase)
| Technology | Free / Open Source Option | Premium / Paid Option | Pricing Estimate |
| :--- | :--- | :--- | :--- |
| **Embeddings** | Sentence-Transformers (Local/Self-hosted open source) | OpenAI API (`text-embedding-3-small`) | OpenAI: ~$0.02 per 1M tokens |

---

## Project Roadmap

The roadmap follows the Next.js monorepo (`web`, `admin`, `shared`) and Supabase MVP architecture to maximize development velocity and ensure core features are delivered efficiently.

### Phase 1: Foundation (Weeks 1-3)
* **Goal:** Project scaffold, DB schema, and core profiles.
* Set up Next.js monorepo (`web`, `admin`, `shared`) and initialize Supabase project.
* Implement PostgreSQL schema, RLS, and migrations via Supabase.
* Develop Role-Based Access Control (RBAC) and Supabase Auth.
* Create applicant and employer profile creation flows.

### Phase 2: CV Builder (Weeks 4-5)
* **Goal:** Full CV creation, templates, preview, and download.
* Build multi-step React Hook Form for education, experience, and skills.
* Implement `@react-pdf/renderer` for live template previews.
* Configure Cloudflare R2 integration for PDF storage.

### Phase 3: Employer Job Posting Flow (Weeks 6-7)
* **Goal:** Subscriptions, credit purchases, and job creation.
* Integrate Stripe, Paystack, and Flutterwave payment gateways.
* Develop the append-only `CreditLedger` and normalized webhook handlers.
* Create the employer job posting form and dashboard.

### Phase 4: Admin Portal (Weeks 8-9)
* **Goal:** Internal management tools and oversight.
* Develop the admin dashboard (user, job, revenue metrics).
* Implement the job approval/rejection queue.
* Build user and payment management interfaces.

### Phase 5: Job Search, Applications & Notifications (Weeks 10-12)
* **Goal:** Public-facing applicant portal.
* Implement Postgres Full-Text Search for job listings.
* Build the application submission flow and tracking dashboard.
* Setup Resend emails and in-app notifications via Server-Sent Events/Polling.

### Phase 6: Admin Candidate Matching (Week 13)
* **Goal:** Manual matching tool for internal recruiters.
* Create filtered database search for admins to find candidates.
* Implement manual job-matching actions and audit logs (`AdminMatchLog`).

### Phase 7: Hardening, Security & Launch Prep (Weeks 14-15)
* **Goal:** Performance passes, compliance, and QA.
* Set up Redis rate limiting and DB query indexing.
* Perform Core Web Vitals checks and NDPR/GDPR compliance audits.
* Integrate Sentry and Uptime monitoring. Conduct load testing.

### Phase 8: Future Enhancements (Post-Launch)
* **Goal:** Scale and expand features.
* **AI Matching:** Deploy Python FastAPI sidecar and pgvector for semantic candidate-job matching.
* **In-App Messaging:** Allow direct communication between employers and matched applicants.
* **Mobile App:** Develop iOS and Android applications via React Native/Expo.
