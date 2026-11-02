# Drew Valla Design Portfolio

A responsive, dependency-free portfolio built with HTML, CSS, and JavaScript.
Warm ivory, forest green, and muted project colours keep the presentation simple
and welcoming. Figma exports are stored locally; no external asset or font
requests are required.

## Preview

Open `index.html` in a modern browser, or serve this directory using a local
static web server. No installation or build step is needed.

## Design / Build views

The labelled buttons beneath the hero headline select two views of the same portfolio:
Design features the Figma design-system case study; Build features its engineering
counterpart. Three Design slots and one Build slot retain their themed layouts
with simple, non-interactive "In the works" labels. They have no fictional project
names, artwork, briefs, or links.

The introduction, work navigation, about copy, page title, and palette update
together. Share `?view=design` or `?view=build` to open a specific view.
Back/Forward restore the selected view. Choices are URL-based, not stored or
tracked. Both buttons support Tab and Enter/Space, expose their pressed state,
and keep focus when selected. A live region announces changes.

A subtle outer ring breathes continuously on load, with a 1.5-second cycle
after a short initial delay.
Hover, touch, or keyboard focus dismisses the cue for the rest of the page load.
The ring does not move the layout or intercept clicks, and is disabled for
reduced-motion preferences.

Without JavaScript the Design view remains available and the switch is hidden.
The existing reduced-motion preference also applies to the Build view.

A static portfolio-update banner appears below the header on the homepage and
both case-study pages. Its colours follow the Design/Build palette. Remove the
`site-notice` elements from all three pages when the announcement is no longer needed.

## Files

- `index.html`: introduction, project previews, about text, and contact section.
- `styles.css`: responsive layout and original illustrative project artwork.
- `script.js`: portfolio view selection, URL state, and switch attention cue.
- `design-system.html`: dedicated, scrollable Figma design-system showcase.
- `design-system-build.html`: companion engineering case study, featured in Build.
- `design-system.css`: project-page styling and its featured home-page card.
- `design-system.js`: optional image enlargement and section tracking.
- `assets/design-system/`: five permanent PNG exports from the actual Figma file.

## Design-system project

The Design portfolio links to `design-system.html`. The page includes an overview,
system relationships, selected tokens, Light/Dark comparisons, all 28 component
page names grouped by purpose, Button and Textfield studies, and the composed
Project Settings example. Desktop section navigation becomes a collapsible
"On this page" menu on mobile. Image links work without JavaScript; with
JavaScript they open native dialogs supporting Escape and focus restoration.

Source: [Design System v0.6](https://www.figma.com/design/kl19d4xA5nP4cFl0BegHL2/Design-System-v0.6).
Exports were read from frames 1288:771, 1261:25, 1261:264, 1135:392, and 1196:78.
The Figma file was not modified. Values and properties are a curated snapshot,
not an exhaustive audit. The colour comparison uses resolved theme bindings.
Refresh the local exports and page content when the source system changes.
The coded repository was inspected read-only for the companion engineering page.
Neither page claims full implementation parity, usage metrics, or tested
accessibility. The UIkit build and tests were not run for this showcase.

## Engineering case study

The Build portfolio links to `design-system-build.html`. Both case studies have
Design / Build navigation linking directly to their companion page. The
engineering page reuses the section navigation and image dialog from the Design
page, but explains architecture, component contracts, tokens, documentation,
test definitions, and known alignment work. Code snippets and diagrams are
explicitly illustrative, not live UIkit demos.

Storybook actions in the introduction and closing section link to the
[live component explorer](https://drewv-js.github.io/DV-UIkit/).
Repository actions in both sections link to the
[public source repository](https://github.com/drewv-js/DV-UIkit).
Public source access does not imply public npm package access, passing tests,
or verified accessibility results.

Replace the "In the works" slots with real project material as it becomes
available. They intentionally do not behave like completed project cards.

Contact information has intentionally not been invented. Replace the contact
section's holding text and project link with your preferred public email or
professional profile before launch.

## Hosting

### GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`. It publishes this
directory as the site root on pushes to `main`, or via a manual workflow run.
No install or build step is needed.

In the repository's **Settings > Pages**, set **Source** to **GitHub Actions**.
Then push to `main` or run **Deploy portfolio to GitHub Pages** from **Actions**.
The workflow's deployment summary supplies the live URL. For this repository,
the expected address is https://drewv-js.github.io/DV-Design-Engineering-Portfolio/.

Only the inner `DVDesignPortfolio-main` directory is uploaded; the outer Git
repository and workflow are not part of the deployed artifact. Relative assets
and page links support hosting under the repository's URL prefix.

### Other static hosts

Upload this directory's contents to any static host, such as GitHub Pages,
Netlify, or Cloudflare Pages. Select no framework or build command; the publish
directory is the directory containing `index.html`. If deploying the outer
workspace rather than this folder, use `DVDesignPortfolio-main` as the publish
directory.

## Inspiration

Dribbble's [minimalist portfolio collection](https://dribbble.com/search/minimalist-website-portfolio)
was used as general layout inspiration. This site's composition, CSS artwork,
and fictional project directions are original rather than reproductions of a
specific designer's work.
