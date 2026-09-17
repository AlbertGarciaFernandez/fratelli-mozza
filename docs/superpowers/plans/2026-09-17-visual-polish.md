# Fratelli Mozza Visual Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the existing landing page closer to the supplied Fratelli Mozza brand references through small, safe visual adjustments.

**Architecture:** Keep the current single-page composition and components. Centralize only visual tokens and responsive refinements in the existing stylesheet, and make narrowly scoped class changes in the existing components. Use the supplied logo assets only in primary brand positions if browser inspection confirms they render as expected.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS v4, TypeScript, agent-browser.

---

### Task 1: Establish visual tokens and shared responsive polish

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add shared focus and motion-safe rules**

Add only global visual rules for keyboard focus, reduced motion, and safe box sizing. Keep the existing palette and animation names unchanged.

- [ ] **Step 2: Run the production build**

Run `npm run build`.

Expected: the Next.js build completes without TypeScript or CSS errors.

### Task 2: Tune navigation, hero, sections, and content rhythm

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/BrandStatement.tsx`
- Modify: `src/components/Ingredients.tsx`
- Modify: `src/components/PhotoGallery.tsx`
- Modify: `src/components/Story.tsx`
- Modify: `src/components/Location.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Normalize shared interactive treatments**

Adjust existing classes only so primary actions share consistent border weight, padding, focus visibility, and hover movement. Keep labels and handlers unchanged.

- [ ] **Step 2: Reduce mobile overflow risks**

Tune the existing responsive text sizes, horizontal padding, gaps, and decorative element sizes where long headings or absolute illustrations can crowd a 375px viewport.

- [ ] **Step 3: Align section spacing and image framing**

Use consistent vertical section rhythm, image border treatment, and shadow offsets without changing the section order or content.

- [ ] **Step 4: Inspect original brand assets before replacing identity SVGs**

Check `assets/name.png` and `assets/logo.png` in the browser. If they match the supplied references and improve fidelity, replace only the primary hero/logo presentation; otherwise retain the current SVGs and report why.

### Task 3: Tune menu and reservation modal

**Files:**
- Modify: `src/components/MenuSection.tsx`
- Modify: `src/components/ReservationModal.tsx`

- [ ] **Step 1: Improve menu density at mobile and tablet widths**

Adjust existing classes for category heading scale, item spacing, dotted leaders, price alignment, allergen markers, and footer spacing so menu content remains readable without horizontal clipping.

- [ ] **Step 2: Improve modal sizing and controls**

Adjust existing modal padding, close-button hit area, input spacing, and mobile stacking while preserving form submission and close behavior.

### Task 4: Browser verification across breakpoints

**Files:**
- No new application files.

- [ ] **Step 1: Start the local server**

Run `npm run dev`.

- [ ] **Step 2: Verify the page in agent-browser**

Open the local URL, wait for network idle, capture screenshots, and inspect console/error-overlay state at 375px, 768px, and 1440px. Check navigation, menu, gallery, reservation modal, contact section, and footer.

- [ ] **Step 3: Fix only confirmed visual regressions**

If browser inspection finds clipping, unreadable contrast, broken hover/focus state, or misalignment, apply the smallest class/CSS correction and repeat the affected viewport check.

- [ ] **Step 4: Run final checks**

Run `npm run build` and confirm the browser has meaningful content, no framework error overlay, and no introduced console errors.
