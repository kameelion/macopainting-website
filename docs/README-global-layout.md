## Section Padding Guidelines

To ensure modular layout control and prevent visual inconsistencies:

- Use `<section class="section-padded">` for regular content sections that need spacing.
- Do **not** apply padding to `.hero-section`. It's styled separately to be full-bleed.
- All layout spacing outside of the hero should be applied using utility or scoped classes like `.section-padded`.

This guarantees consistent spacing while preserving our full-width hero design.
