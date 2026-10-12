# Kestrel — design system handoff (2026-10-12)

## Scope
Working branch: `chore/kestrel-design-system-audit`. The production `main` branch is unchanged by this audit. Do not modify `app/kontakti/page.tsx` until the user approves a functional booking/contact solution.

## Approved / frozen
- Shared floating pill navigation, Manrope, existing light/dark/system theme controls.
- Home Hero composition and imagery.
- Home services: all rows transparent at rest, rounded hover surfaces (21px); no permanent dividers, prices preserved.
- Home problems: three columns, compact heading “Kas kavē klientu pieteikšanos?”, icon, action, benefit.
- Home process: horizontal timeline with dots on the line, four icons, no step numbers.
- Keep CTA and footer content unless a verified issue warrants change.
- No extra decorative cards, repeated number badges, speculative content or stock imagery.

## CSS maintenance findings
- `app/globals.css` contains many historical rules for the same selectors. Deleting old blocks without visual regression tests is unsafe, as the cascade is sensitive to selector specificity and source order.
- Home tokens are already defined in the `/* Kestrel home — consolidated layout */` block. This branch adds named tokens for the existing service hover radius and surface, and reuses those tokens without intentional visual change.
- Scope new cleanup to a component or page, verify mobile/tablet/desktop and both themes, then remove truly unused declarations only after computed-style comparison.

## Layout reference
- Home: Hero → Services → Problems → Process → CTA → Footer (locked order).
- Service template: Hero (intro/CTA) → Suitable audience → Offers → Included → Process → FAQ (when relevant) → CTA → Footer. Do not introduce it yet; review visual composition first.
- About: assess reduction of repetitive statements; preserve trusted real-world content.
- Contact: existing calendar is DEMO and cannot accept bookings. Functional solution deferred; do not present DEMO as live booking.

## Acceptance checks before merge
1. `npm run build` succeeds.
2. Review widths 390, 768, 1024, 1440px: no horizontal overflow or unexpected heading/nav overlap.
3. Light/dark/system states show legible text; keyboard focus remains visible.
4. Every home service row has transparent resting surface and rounded hover, including featured Web development.
5. Process dots sit on the line and mobile timeline remains usable.
6. Service links, header, footer and CTAs navigate correctly.
7. Compare against previously approved screenshots. Do not merge on code review alone.

## Next changes requiring separate approval
Service-template information architecture, About page section removal, and Contact booking functionality.
