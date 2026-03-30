# The Design System: Editorial Freshness & Tonal Order

## 1. Overview & Creative North Star: "The Digital Larder"
This design system moves away from the sterile, "utilitarian app" look and toward a high-end, editorial experience. The Creative North Star is **"The Digital Larder"**—a concept that treats food management with the same precision and aesthetic care as a luxury lifestyle magazine or a premium fintech interface.

We achieve this through **Organic Asymmetry** and **Tonal Depth**. Instead of rigid, boxed-in grids, we use expansive white space and "floating" elements to create a sense of breathability. By prioritizing typography scale and subtle background shifts over traditional borders, the interface feels less like a database and more like a curated kitchen assistant.

---

## 2. Colors: Tonal Architecture
The palette is rooted in nature and clarity. We utilize a sophisticated "No-Line" rule: **1px solid borders are strictly prohibited for sectioning.**

### Core Palette Roles
- **Primary (`#006e1c`) & Primary Container (`#4caf50`):** Used for "Freshness" cues and life-affirming actions (e.g., adding a healthy item).
- **Secondary (`#0061a4`):** Dedicated to "Organization." Use this for categorization, inventory management, and structural logic.
- **Tertiary (`#b02f00`) & Error (`#ba1a1a`):** Reserved for "Expiration" and "Urgency." These are your high-contrast alerts.

### Surface Hierarchy & Nesting
Depth is created by nesting containers using the `surface` tokens. Treat the UI as layers of fine paper:
1.  **Base Layer:** `surface` (#f8faf9)
2.  **Sectional Breaks:** `surface-container-low` (#f2f4f3)
3.  **Interactive Cards:** `surface-container-lowest` (#ffffff) to provide a "lifted" feel against the base.
4.  **Actionable Overlays:** `surface-bright` (#f8faf9) with a 20% opacity `surface-tint` to create a shimmer.

### The "Glass & Gradient" Rule
To elevate the "Freshness" theme, use **Glassmorphism** for floating elements (like the sticky bottom nav). Apply a `surface-container-lowest` background at 80% opacity with a `backdrop-filter: blur(12px)`.
*Signature Texture:* Use a subtle linear gradient from `primary` to `primary-container` on major call-to-action buttons to give them a "ripe," organic dimension.

---

## 3. Typography: Editorial Authority
We pair **Manrope** (Display/Headlines) with **Inter** (Body/Labels) to balance character with legibility.

- **Display-LG (Manrope, 3.5rem):** Used for "Zero-State" screens or bold inventory summaries. It should feel authoritative.
- **Headline-MD (Manrope, 1.75rem):** Categorical headers (e.g., "Vegetable Drawer").
- **Title-MD (Inter, 1.125rem):** Item names. This is the workhorse of the inventory list.
- **Body-MD (Inter, 0.875rem):** Metadata like "Expiring in 2 days."
- **Label-SM (Inter, 0.6875rem):** Use all-caps with 0.05rem letter spacing for "Status" tags (e.g., FROZEN, PANTRY).

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too "heavy" for a fresh kitchen app. We use **Tonal Layering** and **Ambient Shadows**.

- **The Layering Principle:** Avoid shadows on static cards. Instead, place a `surface-container-lowest` card on a `surface-container-low` background. The shift from #f2f4f3 to #ffffff provides all the separation the eye needs.
- **Ambient Shadows:** For floating Modals or the Sticky Bottom Nav, use an extra-diffused shadow: `0px 12px 32px rgba(25, 28, 28, 0.06)`. The tint is derived from `on-surface`, making it feel like natural light.
- **The "Ghost Border" Fallback:** If a container lacks contrast (e.g., white on white), use the `outline-variant` token at **15% opacity**. Never use 100% opacity for lines.

---

## 5. Components: Fluid Utility
All components must adhere to the **Roundedness Scale** (default: `xl` or 1.5rem for large cards; `md` or 0.75rem for smaller UI elements).

### Cards & Lists
*   **The Rule:** No divider lines.
*   **Implementation:** Separate list items using `spacing-3` (1rem) of vertical white space. If items are dense, alternate background colors between `surface` and `surface-container-low`.
*   **Freshness Cards:** Large cards for "Expiring Soon" should use a `tertiary-container` (#ff6e43) background with a glassmorphic overlay for the text content.

### Interactive Elements
*   **Buttons:** 
    *   *Primary:* Solid `primary` with `on-primary` text. `xl` (1.5rem) corner radius.
    *   *Tertiary (Ghost):* No background. Text in `primary` with a subtle `surface-variant` hover state.
*   **Input Fields:** Use `surface-container-highest` backgrounds rather than outlined boxes. On focus, transition the background to `surface-container-lowest` with a "Ghost Border."
*   **Sticky Bottom Navigation:** Mobile-first design. Use a `surface-container-lowest` bar with 85% opacity, `xl` corner radius on the top edges, and high-quality line icons (2px stroke) in `on-surface-variant`.

### Context-Specific Components
*   **Freshness Meter:** A horizontal bar using a gradient transition from `error` to `primary-container` to visualize shelf life.
*   **Inventory Chips:** Rounded-full (`full`) chips using `secondary-fixed` for categorizing (e.g., "Dairy," "Produce").

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace as a functional tool. If the screen feels "empty," increase typography size rather than adding borders.
*   **DO** use `surface-container` tiers to group related items (e.g., all condiments in one `surface-container-low` area).
*   **DO** prioritize accessibility. Ensure `on-surface` text on `surface` backgrounds maintains a 4.5:1 contrast ratio.

### Don't
*   **DON'T** use 1px solid black or grey borders. This instantly kills the "High-End Fintech" aesthetic.
*   **DON'T** use standard drop shadows (e.g., `offset-y: 2px, blur: 4px`). They look dated. Stick to the large, diffused Ambient Shadows.
*   **DON'T** crowd the edges. Respect the `spacing-6` (2rem) gutter for all main container margins.