# Fratelli Mozza visual polish

## Goal

Polish the existing single-page website before client presentation while preserving the existing Fratelli Mozza brand, content, architecture, and functionality.

## Scope

- Inspect and tune spacing, padding, margins, typography hierarchy, sizes, alignment, buttons, images, border treatment, shadows, contrast, hover states, and responsive behavior.
- Validate the visual result at mobile (375px), tablet (768px), and desktop (1440px) widths.
- Check the mobile navigation and reservation modal as part of the same visual pass.
- Use the existing original brand assets in the primary identity areas when they improve fidelity to the supplied references.

## Constraints

- No refactor or architecture changes.
- No content, data, route, or behavior changes unless required to prevent a visual regression.
- Prefer small CSS/class adjustments in the existing components.
- Do not replace the established cream, burgundy, texture, and bold editorial visual language.
- Any meaningful identity change, especially replacing recreated SVG branding with the original assets, must be reported before applying it.

## Validation

- Run the existing project checks available in `package.json`.
- Start the local development server and inspect the rendered page with a browser at the three target widths.
- Verify there is no blank page, framework error overlay, or console error introduced by the changes.
- Confirm the primary navigation, reservation trigger/modal, gallery, menu, contact section, and footer remain usable.
