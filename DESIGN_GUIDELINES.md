# Bold Design System & UI Context

This document captures the "Bold, High-Contrast" design language used in the application. Use this context to reproduce the specific "vibe" of the app when creating new pages or components.

## 1. Core Philosophy: "Bold & Direct"
The design aims for maximum impact through high contrast, massive typography, and distinct interaction states. It avoids subtle grays or pastels in favor of definitive Black (`#000000`) and White (`#ffffff`).

**Key Attributes:**
*   **Macro Typography**: Headings are exceptionally large (`text-6xl`, `text-7xl`, `text-[58px]`).
*   **Monochromatic Dominance**: The primary palette is Black and White. Colors (like Blue `#342ee8`) are accents only.
*   **Structural Borders**: Components use clear, thick borders (`border border-black`) to define space.
*   **Interactive Inversion**: Hover states often invert the color scheme (White -> Black, Black -> White) to signal activity.

---

## 2. Design Tokens

### 2.1 Colors
*   **Primary Black**: `#000000` (Used for Headings, Borders, Backgrounds in inverted sections).
*   **Primary White**: `#ffffff` (Used for Backgrounds, Text in inverted sections).
*   **Accent Blue**: `var(--color-primary)` / `#342ee8` (Used sparsely for primary action buttons in Hero).
*   **Text Secondary**: `#434343` (Used for descriptive body text).

### 2.2 Typography
Font family is `Geist Sans` (via `globals.css`).

*   **Mega Display**: `text-6xl` to `text-7xl` (`font-bold`, `tracking-tight`, `leading-[1.1]`). Used for Section Titles.
*   **Hero Heading**: `text-hero` (`58px`).
*   **Component Heading**: `text-3xl font-bold`.
*   **Numeric Anchors**: `text-7xl font-bold` (Used for step numbers 01, 02...).

### 2.3 Spacing & Layout
*   **Section Spacing**: Very generous padding to create "bold" negative space.
    *   `py-24` or `py-32` for main sections.
    *   `gap-20` between section titles and content grids.
*   **Card Padding**: `p-10` (Large internal padding).
*   **Grid Gaps**: `gap-8` (Standard grid gap).

---

## 3. Component Patterns

### 3.1 The "Inverted Hover" Card
Used for interactive lists like "How It Works".
*   **Default State**: White background, Black border, Black text.
*   **Hover State**: Black background, White text.
*   **Implementation**:
    ```tsx
    <div className="group border border-black p-10 hover:bg-black transition-all">
      <h3 className="text-black group-hover:text-white transition-colors">Title</h3>
      <p className="text-text-secondary group-hover:text-white transition-colors">Description</p>
    </div>
    ```

### 3.2 The "Visual Anchor" Section
Used for Call to Actions (footer area).
*   **Style**: Full width Black background (`bg-black`).
*   **Text**: White Headings (`text-white`).
*   **Buttons**: Contrast buttons (White background for primary, White border for secondary).

### 3.3 Buttons
*   **Primary (Brand)**: `bg-primary text-white` (Hero).
*   **Primary (Mono)**: `bg-white text-black` (Dark sections).
*   **Outline**: `border border-black hover:bg-black hover:text-white` (Header).

---

## 4. Reproduction Checklist
When creating a new component:
1.  [ ] **Size Up**: Can the heading be larger? Try `text-5xl` or `text-6xl` first.
2.  [ ] **Contrast Check**: Are distinct borders or background colors separating this section?
3.  [ ] **Interaction**: Does hovering over the card or button provide a satisfying color inversion?
4.  [ ] **Spacing**: Did you add enough padding? (`py-24` is standard).

## 5. Example "Bold" Component Structure

```tsx
<section className="py-24 px-8 bg-white flex flex-col items-center gap-20">
  {/* Massive Heading */}
  <h2 className="text-6xl font-bold text-black text-center tracking-tight">
    Bold Statement.
  </h2>
  
  {/* Grid of Clean, Bordered Cards */}
  <div className="grid grid-cols-3 gap-8 w-full max-w-7xl">
    <div className="group border border-black p-10 hover:bg-black transition-all">
      <h3 className="text-3xl font-bold group-hover:text-white">Feature</h3>
    </div>
  </div>
</section>
```
