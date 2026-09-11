# Next.js Project Specification

## 1. Project Objective

Convert the provided existing HTML project into a **modern, production-ready Next.js project** without changing the original visual design.

The existing project may contain:

- HTML files
- JavaScript files
- CSS files
- Images
- Icons
- SVGs
- Fonts
- Other local assets

Before writing any Next.js code, **analyze the complete existing project** and understand how every section, style, animation, interaction, image, icon, spacing, typography, and responsive behavior works.

The final Next.js implementation must visually match the original HTML project as closely as possible.

---

## 2. Technology Requirements

Always use the **latest stable versions** available at the time of development.

Required technologies:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion when animation is required
- Modern CSS where Tailwind alone cannot accurately reproduce the original design

Use the current recommended Next.js architecture and avoid outdated APIs, patterns, or deprecated packages.

---

## 3. First Step — Git Configuration

Before creating or modifying application code:

1. Create/update `.gitignore`.
2. Make sure standard Next.js files and folders are ignored.
3. Include:
   - `node_modules`
   - `.next`
   - build output
   - environment files
   - logs
   - temporary files
   - IDE/editor files
   - OS-generated files

Do this **before starting the actual implementation**.

---

## 4. Existing Project Analysis

Before converting anything, inspect the complete source project.

Analyze:

### HTML

Identify:

- Page structure
- Header/Navbar
- Hero
- Sections
- Cards
- Buttons
- Forms
- Footer
- Repeated components
- Semantic HTML
- IDs/classes
- Existing responsive structure

### CSS

Analyze:

- Font families
- Font sizes
- Font weights
- Colors
- Backgrounds
- Borders
- Border radius
- Shadows
- Widths
- Heights
- Max-widths
- Padding
- Margins
- Gaps
- Grid/Flex layouts
- Breakpoints
- Hover states
- Transitions
- Animations
- Positioning
- Responsive behavior

### JavaScript

Analyze:

- Navigation behavior
- Menus
- Sliders
- Tabs
- Accordions
- Modals
- Scroll behavior
- Counters
- Animations
- Event handlers
- Interactive components

Every meaningful JavaScript behavior must be reproduced using appropriate React/Next.js functionality.

### Images and Assets

Inspect all local assets.

Do not replace existing images unnecessarily.

Use the original:

- Images
- Logos
- SVGs
- Icons
- Fonts
- Background assets

Preserve their original appearance and aspect ratio.

---

## 5. Exact Design Conversion

The primary rule is:

> **Do not redesign the existing website. Recreate it.**

The following must remain visually consistent with the original design:

- Layout
- Section order
- Width
- Height
- Typography
- Font family
- Font size
- Font weight
- Line height
- Letter spacing
- Colors
- Backgrounds
- Images
- Icons
- Borders
- Border radius
- Shadows
- Spacing
- Alignment

- Buttons
- Hover effects
- Animations
- Responsive behavior

Do not make arbitrary design improvements.

If the original HTML has an unusual spacing, sizing, or layout behavior, reproduce it instead of "fixing" it unless it causes an actual functional issue.

---

## 6. Component-Based Architecture

Do not create one huge `page.tsx`.

Break the website into logical reusable components.

Recommended structure:

```text
my-landing-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Pricing.tsx
│   │   │   └── CTA.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── Card.tsx
│   │
│   └── data/
│       ├── navigation.ts
│       ├── features.ts
│       └── testimonials.ts
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── logo.svg
│
├── .gitignore
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

The folder organization should follow this component/data-based approach.

---

## 7. Section-by-Section Development

Implement the website section by section.

Recommended order:

1. Global configuration
2. Gitignore
3. Root layout
4. Fonts
5. Global styles
6. Navbar
7. Hero
8. First content section
9. Feature sections
10. Cards
11. Testimonials
12. Pricing
13. CTA
14. Footer
15. Responsive behavior
16. Animations/interactions
17. Final visual verification

Do not attempt to write the entire application as one large implementation.

Each section should be:

- Independent
- Reusable where appropriate
- Easy to maintain
- Properly typed
- Visually accurate

---

## 8. Data-Driven Components

Do not hardcode repeated content directly inside JSX.

Create separate TypeScript data files.

For example:

```text
src/data/
├── navigation.ts
├── hero.ts
├── features.ts
├── testimonials.ts
├── pricing.ts
└── footer.ts
```

Example:

```ts
export const features = [
  {
    title: "Feature title",
    description: "Feature description",
    image: "/images/feature-1.webp",
  },
  {
    title: "Another feature",
    description: "Another description",
    image: "/images/feature-2.webp",
  },
];
```

Then render through reusable components:

```tsx
{features.map((feature) => (
  <FeatureCard key={feature.title} {...feature} />
))}
```

Repeated UI must use `.map()` and reusable components instead of duplicated JSX.

---

## 9. Keep the Code Short and Clean

The implementation should be **compact, professional, and human-readable**.

Avoid:

- Huge components
- Duplicate JSX
- Duplicate CSS
- Unnecessary wrappers
- Unnecessary dependencies
- Repeated hardcoded content
- Over-engineering
- Artificially complicated abstractions
- Unused imports
- Unused components
- Unused variables

Use reusable components only where they actually improve maintainability.

The goal is:

> **Less code + clean architecture + exact design.**

Do not sacrifice visual accuracy just to reduce code size.

---

## 10. Next.js Performance

The application must be optimized for high performance.

Use Next.js features correctly:

- Server Components by default
- Client Components only when interaction requires them
- `next/image` for local images where appropriate
- Optimized image sizes
- Proper image dimensions
- Lazy loading where appropriate
- Dynamic imports only when beneficial
- Minimal JavaScript
- Avoid unnecessary client-side rendering
- Avoid unnecessary dependencies
- Avoid unnecessary re-renders

Do not add `"use client"` to every component.

Only interactive components should become Client Components.

---

## 11. Image Handling

Use the original local assets whenever available.

Images should remain inside:

```text
public/images/
```

Use paths such as:

```tsx
<Image
  src="/images/hero.webp"
  alt="Hero"
  width={1200}
  height={700}
/>
```

Do not use external image URLs when the original local image exists.

Do not rename assets unnecessarily.

If an existing asset already has the required design, reuse it instead of recreating it.

---

## 12. Fonts

Analyze the original project's font configuration.

If font files are available locally, use them appropriately.

If the original project uses a web font, reproduce the same typography as closely as possible.

Typography must preserve:

- Font family
- Font weight
- Font size
- Line height
- Letter spacing
- Text transformation

Font differences should not be introduced unnecessarily.

---

## 13. Tailwind CSS

Use Tailwind CSS for the majority of styling.

Convert existing CSS values into appropriate Tailwind utilities wherever practical.

Example:

```tsx
<section className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-20">
```

However, use custom CSS when required for:

- Complex animations
- Special effects
- Pseudo-elements
- Complex selectors
- Exact visual reproduction
- Third-party/plugin-specific behavior

Do not force everything into Tailwind if doing so reduces accuracy or readability.

---

## 14. Animations

Analyze the original JavaScript/CSS animations before implementation.

If the original website has:

- Fade animations
- Slide animations
- Scale animations
- Scroll animations
- Hover animations
- Stagger animations
- Menu animations

reproduce them as closely as possible.

Use **Framer Motion** where React-based animation is appropriate.

Do not add new animations that do not exist in the original design.

Animation should not negatively affect:

- Performance
- Accessibility
- Mobile responsiveness
- Page loading

---

## 15. Responsive Design

The final website must work correctly on:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop screens

Do not simply shrink the desktop design.

Analyze the original responsive CSS and reproduce its behavior.

Check:

- Navbar
- Menu
- Typography
- Images
- Grid
- Flex layouts
- Section spacing
- Buttons
- Cards
- Footer
- Overflow
- Horizontal scrolling
- Mobile-specific layouts

There must be no:

- Horizontal overflow
- Broken layouts
- Overlapping content
- Cut-off text
- Incorrect image scaling
- Broken navigation

---

## 16. Navbar and Footer

Navbar and Footer must be separate reusable components.

```text
components/
└── layout/
    ├── Navbar.tsx
    └── Footer.tsx
```

The Navbar must reproduce the original:

- Logo
- Navigation
- CTA
- Mobile menu
- Active states
- Hover states
- Spacing
- Responsive behavior
- Sticky/fixed behavior if applicable

The Footer must reproduce the original structure and content accurately.

---

## 17. TypeScript

Use TypeScript throughout the project.

Avoid:

```ts
any
```

unless absolutely unavoidable.

Create proper interfaces/types for reusable component data.

Example:

```ts
interface Feature {
  title: string;
  description: string;
  image: string;
}
```

Keep types simple and readable.

---

## 18. Accessibility

Maintain or improve semantic HTML without changing the visual design.

Use:

- Proper heading hierarchy
- `alt` text
- Accessible buttons
- Keyboard navigation
- Proper links
- ARIA attributes when required
- Focus states where appropriate

Accessibility improvements must not alter the intended visual design.

---

## 19. Error-Free Requirement

The project must be completed without known errors.

Before completion, verify:

```bash
npm install
npm run dev
npm run build
```

Also check:

```bash
npm run lint
```

Fix all:

- TypeScript errors
- ESLint errors
- Build errors
- Import errors
- Missing asset errors
- Hydration errors
- Console errors
- Broken routes
- Invalid HTML/React usage

Do not finish the project while known build or runtime errors remain.

---

## 20. Final Verification

After implementation, compare the Next.js version against the original HTML version section by section.

Verify:

### Visual

- Exact layout
- Exact spacing
- Exact colors
- Exact typography
- Exact images
- Exact icons
- Exact buttons
- Exact borders
- Exact shadows
- Exact animations

### Responsive

- Mobile
- Tablet
- Desktop
- Large screens

### Functional

- Navbar
- Mobile menu
- Links
- Buttons
- Sliders
- Tabs
- Forms
- Animations
- Interactive elements

### Technical

- Build succeeds
- TypeScript succeeds
- Lint succeeds
- No console errors
- No missing assets
- No unnecessary dependencies
- No unused code

---

## 21. Important Rules

### Rule 1
**Do not redesign the website.**

### Rule 2
**Do not replace original images unless necessary.**

### Rule 3
**Analyze HTML + CSS + JS + assets before implementation.**

### Rule 4
**Use the latest stable Next.js ecosystem versions.**

### Rule 5
**Use TypeScript.**

### Rule 6
**Use Tailwind CSS.**

### Rule 7
**Use Framer Motion only where animation is required.**

### Rule 8
**Use reusable components.**

### Rule 9
**Use separate data files for repeated/static content.**

### Rule 10
**Keep implementation concise and maintainable.**

### Rule 11
**Use Server Components wherever possible.**

### Rule 12
**Use Client Components only where required.**

### Rule 13
**Reuse local images and assets.**

### Rule 14
**Preserve the original responsive behavior.**

### Rule 15
**Fix every known error before completion.**

### Rule 16
**Run a production build before considering the project complete.**

---

## 22. Final Architecture Goal

The final project should follow this philosophy:

```text
Analyze
   ↓
Understand Original Design
   ↓
Create Git Configuration
   ↓
Set Up Latest Next.js
   ↓
Create Clean Architecture
   ↓
Create Data Files
   ↓
Build Reusable Components
   ↓
Implement Section by Section
   ↓
Match Original Design
   ↓
Add Responsive Behavior
   ↓
Reproduce Animations
   ↓
Optimize Performance
   ↓
Run Lint
   ↓
Run Build
   ↓
Fix Errors
   ↓
Final Visual Verification
```

### Final Objective

The completed Next.js project must be:

**Visually accurate + responsive + component-based + data-driven + lightweight + performant + maintainable + TypeScript-safe + production-ready.**

Most importantly, the output must look and behave like the provided original HTML project rather than like a newly redesigned website.