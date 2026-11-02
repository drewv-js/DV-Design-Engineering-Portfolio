# Drew Valla Design Portfolio

A responsive, dependency-free portfolio built with HTML, CSS, and JavaScript.
Warm ivory, forest green, and muted project colours keep the presentation simple
and welcoming. All preview artwork is drawn with CSS; no external assets or fonts
are required.

## Preview

Open `index.html` in a modern browser, or serve this directory using a local
static web server. No installation or build step is needed.

## Content

## Design / Build views

The labelled buttons beneath the hero headline select two views of the same portfolio:
Design contains the original concept previews; Build features the working
portfolio itself with an expandable implementation walkthrough. This is not a
claim that the concept projects have been engineered.

The introduction, work navigation, about copy, page title, and palette update
together. Share `?view=design` or `?view=build` to open a specific view.
Back/Forward restore the selected view. Choices are URL-based, not stored or
tracked. Both buttons support Tab and Enter/Space, expose their pressed state,
and keep focus when selected. A live region announces changes.

A subtle outer ring breathes continuously on load, with a 2.2-second cycle
after a short initial delay.
Hover, touch, or keyboard focus dismisses the cue for the rest of the page load.
The ring does not move the layout or intercept clicks, and is disabled for
reduced-motion preferences.

Without JavaScript the Design view remains available and the switch is hidden.
The existing reduced-motion preference also applies to the Build view.

## Files

- `index.html`: introduction, project previews, about text, and contact section.
- `styles.css`: responsive layout and original illustrative project artwork.
- `script.js`: concept briefs and accessible native project dialogs.
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

Kindred, Table Journey, and Form & Field are explicitly labelled concept
placeholders, not completed projects. Replace their visuals and briefs with real
project material as it becomes available. The personal introduction is draft
copy and should be reviewed before publishing.

Contact information has intentionally not been invented. Replace the contact
section's holding text and project link with your preferred public email or
professional profile before launch.

## Hosting

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
