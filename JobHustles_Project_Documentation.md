# JobHustles Recruiting Platform — Master Project Documentation

This document serves as the single source of truth for the JobHustles Recruiting Platform, combining the Product Requirements Document (PRD), Tech Stack details, Design Specifications, and references to UI/UX assets.

---

## 1. Product Overview (PRD)

JobHustles Recruiting Platform is a web-based recruitment ecosystem designed to connect job seekers (applicants) with employers across multiple industries. The platform consists of two main interfaces:
1. **Site Portal (Frontend Platform)** – used by applicants and employers.
2. **Admin Portal (Backend Management System)** – used by internal administrators.

The system is designed to streamline hiring, simplify job applications, and enable intelligent candidate-job matching beyond traditional application processes.

### 1.1 Objectives
- Enable job seekers to easily find and apply for jobs.
- Allow users to build professional CVs directly on the platform.
- Provide employers with a structured and scalable hiring solution.
- Create an additional revenue stream via subscriptions and job credits.
- Allow administrators to actively match candidates with jobs.
- Support recruitment across multiple industries without restriction.

### 1.2 Target Users
- **Applicants (Job Seekers):** Students and graduates, skilled and unskilled workers, professionals seeking new opportunities.
- **Employers:** Small businesses, medium and large enterprises, recruitment agencies.
- **Admin:** Internal JobHustles team managing operations.

### 1.3 Core Features
#### Site Portal (Applicant & Employer Interface)
- **User Registration & Authentication:** Secure sign-up/login for applicants and employers.
- **Applicant Features:** Profile creation (education, work experience, skills), CV Builder (templates, preview, download, store), Job Search & Application, Notifications (job alerts, application updates).
- **Employer Features:** Company Registration, Subscription System (tiers like Basic, Standard, Premium), Credit-Based Job Posting, Job creation and listings.

#### Admin Portal (Management System)
- **Dashboard:** Overview of users, jobs, applications, and revenue.
- **Job Approval System:** Admin review and approval for job posts.
- **CV Management:** Access to all applicant CVs with edit capabilities if needed.
- **Candidate Matching:** Match candidates to jobs manually and suggest candidates to employers.
- **User & Payment Management:** Suspend/approve accounts, monitor subscriptions, credit purchases, and transaction history.

### 1.4 System Workflow
1. **Job Posting Flow:** Employer registers/subscribes -> purchases credits -> creates job post -> Admin reviews/approves -> Job goes live.
2. **Application Flow:** Applicant registers -> creates profile/CV -> applies for job -> Employer reviews.
3. **Admin Matching Flow:** Employer posts job -> Admin reviews job -> Admin searches database -> Admin matches candidates -> Employer receives suggested candidates.

### 1.5 Revenue Model & Success Metrics
- **Revenue:** Subscription fees, credit-based job posting, premium CV services.
- **Success Metrics:** Number of registered users, job postings, application success rate, employer retention rate, revenue growth.

---

## 2. Tech Stack & Architecture

> **Architecture decision:** The platform uses a monorepo structure separated into distinct apps (`web` for the outer app, `admin` for the admin app, and `shared` for shared resources). For the MVP phase, **Supabase** will be utilized as the backend to maximize development velocity. The platform can expand or transition to custom backend services for remaining features as it scales. The frontend relies on **Next.js**, with a hybrid **Python** integration path reserved for AI/ML features in future phases.

### 2.1 Frontend
- **Next.js 14+ (App Router):** Primary framework (SSR & RSC).
- **TypeScript:** Enforced across the entire codebase.
- **React 18+:** Component layer.
- **Tailwind CSS & shadcn/ui:** Styling and component library.
- **Framer Motion:** Optional animations.
- **React Hook Form & Zod:** Multi-step forms and schema validation.
- **TanStack Query & Zustand:** Server and client state management.
- **Recharts:** Data visualization for Admin dashboard.
- **React-PDF:** In-browser CV preview and generation.

### 2.2 Backend & API Layer (MVP)
- **Supabase:** Backend-as-a-Service for MVP (database, auth, storage).
- **Edge Functions:** Custom backend logic, webhook handling.
- **TypeScript & Zod:** Strict typing and validation.
- **Supabase Auth:** Email/password login and session management with PostgreSQL RLS.
- **Python (FastAPI):** Future sidecar for AI features (OpenAI, pgvector).

### 2.3 Database & Storage
- **Supabase (PostgreSQL 15+):** Primary database.
- **Redis & Postgres Full-Text Search:** Caching and keyword search.
- **Supabase Storage:** Primary file store (CVs, logos).

### 2.4 Payments & Billing
- **Stripe, Paystack, Flutterwave:** Multiple gateways for global and African markets.
- **Webhook-driven architecture:** Gateways emit webhook events for subscription and credit ledger management.

### 2.5 Infrastructure & DevOps
- **Hosting:** Vercel (Frontend apps: `web`, `admin`), Supabase Platform (Backend, DB, Auth), Cloudflare (DNS, WAF).
- **CI/CD:** GitHub Actions, ESLint, Prettier, Husky.
- **Testing:** Vitest, Playwright, Supertest.
- **Monitoring:** Sentry, PostHog (optional).

---

## 3. Design System & Specifications

### 3.1 Color Palette
- **Primary Brand:** `#0A65CC` (active states, primary buttons, icons)
- **Success/Accent:** `#0BA02C` (full-time tags, success indicators)
- **Dark Contrast:** `#18191C` (copy-right background, heavy text)
- **Black:** `#000000`
- **Backgrounds:** `#E5E5E5` (Main), `#F1F2F4` (Section Light), `#FFFFFF` (Category), `#E7F0FA` (Subtle Blue), `#FCEEEE` (Red/Warning), `#E7F6EA` (Green/Success).

### 3.2 Typography
- **Primary Font:** **Inter** (served via **Google Fonts**). All typography uses Google Fonts.
- **Headings:** H1 (40px, w600), H2 (32px, w500), H3 (24px, w500), H4 (20px, w500), H5 (18px, w500).
- **Body:** Base (16px, w400), Small (14px, w400/500), Tiny (12px, w400).

### 3.3 Spacing, Layout & Shadows
- **Spacing Scale:** 4px baseline grid (Micro: 2-10px, Small: 12-18px, Medium: 20-24px, Large: 32-48px).
- **Border Radius:** Small (1-5px), Medium (8px), Pill/Circle (9999px).
- **Shadows:** Subtle (`0px -1px 0px #E4E5E8`), Card (`0px 2px 18px #18191C`), Floating (`0px 12px 40px #002C6D`), Testimonials (`0px 12px 80px #002C6D`).

### 3.4 Core UI Components & Iconography
- **Icons:** **Phosphoricons** as the primary set, **Lucide** as fallback.
- **Navigation:** Top Bar (Language, Phone), Main Nav (Logo, Links), Actions (Notification, Avatar).
- **Search Bar:** Horizontal pill with Location Dropdown and Search Input.
- **Job Cards:** Company Logo, Title, Employment Badge, Meta Info, Bookmark.
- **Buttons:** Primary (Blue bg, White text, 16px/32px padding), Icon/Social buttons.
- **Badges:** Full-Time (Green), Featured (Red).

---

## 4. Figma Assets Reference
The following UI assets and exported visual designs are available in the `figma-assets/` directory:

- `complete_design_screenshot.png`
- `logo.png` & `logo@2x.png`
- `homepage.png` & `homepage@2x.png`
- `job-list.png` & `job-list@2x.png`
- `job-detail.png` & `job-detail@2x.png`
- `candidate--employers.png` & `candidate--employers@2x.png`
- `candidate--employers-2.png` & `candidate--employers@2x-2.png`

*These standard (1x) and Retina (2x) exports should be utilized to reference precise component layouts, spacing, and styling alongside the design tokens detailed above.*
