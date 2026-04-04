# Design System Specification: Warm Clinical Editorial

## 1. Overview & Creative North Star: "The Human Laboratory"
This design system rejects the cold, sterile sterility of traditional medical interfaces in favor of a "Warm Clinical" aesthetic. Our Creative North Star is **The Human Laboratory**: a space that marries the rigorous precision of science with the tactile warmth of a high-end apothecary or a curated editorial journal.

We move beyond the "template" look by utilizing intentional asymmetry, expansive negative space, and a rejection of traditional containment. Instead of boxes and borders, we use **Tonal Layering** and **Typographic Authority** to guide the eye. The experience should feel like reading a bespoke scientific publication—authoritative, breathable, and deeply premium.

---

## 2. Color Theory & Tonal Depth
We have replaced clinical greys with a palette of "Living Neutrals." These tones are designed to reduce eye strain while conveying a sense of heritage and care.

### Primary Palette (Material Mapping)
- **Surface (#fbf9f4):** Our primary canvas. A soft, warm off-white that feels like heavy-stock paper.
- **On-Surface (#1b1c19):** A deep charcoal for primary text. High contrast, yet softer than pure #000.
- **Primary / Scientific Teal (#003434):** Used for primary actions and deep emphasis. It suggests depth and clinical expertise.
- **Tertiary / Muted Gold (#3e2b00):** Reserved for highlights, special alerts, or premium "Gold-Standard" notations.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning. Structural boundaries must be defined solely through background color shifts. 
- Use `surface-container-low` (#f5f3ee) for large secondary sections.
- Use `surface-container-highest` (#e4e2dd) for smaller nested elements.
- **Constraint:** If a container feels "lost," do not add a border. Increase the spacing or shift the background tone.

### Signature Textures & Glassmorphism
To create a "signature" feel, floating elements (modals, dropdowns, navigation bars) should utilize **Glassmorphism**:
- **Background:** `surface` at 80% opacity.
- **Effect:** `backdrop-filter: blur(12px)`.
- **Polish:** A subtle linear gradient from `primary` to `primary_container` on main CTAs to provide "soul" and depth.

---

## 3. Typography: Editorial Authority
The interplay between the academic **Newsreader** and the functional **Manrope** creates a dialogue between tradition and modern technology.

- **Display & Headlines (Newsreader):** Use for storytelling and high-level section titles. Newsreader should always have generous tracking (-1% to -2% for large sizes) to feel tight and professional.
- **Body & UI (Manrope):** Use for data, labels, and instructional text. Manrope’s geometric clarity balances the serif's organic nature.
- **Hierarchy as Navigation:** Scale is our primary tool for hierarchy. A `display-lg` headline (3.5rem) should feel monumental, surrounded by at least `spacing-16` (5.5rem) of white space to command attention.

---

## 4. Elevation & Depth: The Layering Principle
We convey importance through **Tonal Layering** rather than structural lines or heavy shadows.

- **Stacking Surfaces:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f5f3ee) section. This creates a soft "lift" that feels integrated into the environment.
- **Ambient Shadows:** For elevated elements like floating action buttons, use "Ambient Shadows":
    - **Color:** `on-surface` at 6% opacity.
    - **Blur:** 24px - 40px.
    - **Spread:** -4px (to keep the shadow tight and natural).
- **The "Ghost Border" Fallback:** In rare accessibility cases where a border is required, use `outline-variant` (#bfc8c8) at **15% opacity**. It should be felt, not seen.

---

## 5. Components & Primitive Styling

### Buttons: The Weighted Action
- **Primary:** `primary` (#003434) background with `on-primary` (#ffffff) text. Use `rounded-md` (0.375rem). Use a subtle 2px vertical gradient to add a "milled" premium feel.
- **Secondary:** `secondary_container` (#e7e2da) background. No border.
- **Tertiary:** Text only in `primary`, with an underline that appears only on hover.

### Input Fields: The Minimalist Entry
- **Background:** `surface_container_low` (#f5f3ee).
- **Border:** None. Use a 2px bottom-bar in `outline` (#6f7978) that expands and changes to `primary` on focus.
- **Label:** `label-md` (Manrope) positioned above the field, never inside as a placeholder.

### Cards & Lists: Organic Grouping
- **Forbid Dividers:** Do not use horizontal rules (`<hr>`) to separate list items. Use `spacing-4` (1.4rem) of vertical padding and a change in surface color for the hover state.
- **Layout:** Cards should use `surface_container` (#f0eee9) with `rounded-lg` (0.5rem) corners.

### Custom Component: The "Data Sheet"
Given the clinical context, use a "Data Sheet" layout for patient/scientific info: A `surface-container-lowest` card with a `Newsreader` title-lg header and `Manrope` body text, utilizing a two-column asymmetric grid (60/40 split) to avoid the "Standard Dashboard" look.

---

## 6. Do's and Don'ts

### Do:
- **Use "Breathing Room":** If a layout feels cramped, double the spacing value. High-end design requires "wasted" space.
- **Embrace Asymmetry:** Align text to the left but place supporting imagery or data points slightly off-center to create visual interest.
- **Color for Intent:** Use `tertiary` (Gold) only for moments of "Insight" or "Success."

### Don't:
- **No Pure Greys:** Never use #888888 or #F0F0F0. Always use the warm, champagne-tinted tokens provided.
- **No Hard Shadows:** Never use the default "Drop Shadow" preset. It breaks the "Warm Clinical" immersion.
- **No 100% Opaque Borders:** High-contrast lines are too "loud" for this system's quiet authority.