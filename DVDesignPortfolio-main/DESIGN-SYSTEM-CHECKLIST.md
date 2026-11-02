# Design System: Finish-Line Checklist

Tasks for completing the Design and Build portfolio case studies.
Items are unchecked until verified; existing tooling does not imply a passing check.

## Public access and links

- [ ] Review the UIkit repository and Git history for secrets, private content,
      and assets that cannot be redistributed before making it public.
- [ ] Confirm licensing for the project, fonts, icons, and other dependencies.
      The current project license is `UNLICENSED`; choose appropriate public terms.
- [x] Make the repository public:
      [DV UIkit source](https://github.com/drewv-js/DV-UIkit).
- [ ] Decide whether the npm package should remain private. A public repository
      or Storybook does not require public npm distribution.
- [ ] Confirm the Figma file's intended view permissions using a signed-out browser.
- [x] Connect both Repository actions on the Build case study to the approved URL.

## Storybook

- [ ] Run and verify the existing Storybook locally; it is already configured.
- [ ] Review stories, documentation, examples, and bundled assets for public release.
      A hosted showcase exposes compiled component code to visitors.
- [ ] Verify controls, code snippets, component registration, and asset loading.
- [x] Build and deploy Storybook to a public host:
      [Live Storybook](https://drewv-js.github.io/DV-UIkit/).
- [ ] Add repeatable deployment from the UIkit repo so the showcase stays current.
- [ ] Test the deployed site on desktop and mobile, including direct story links.
- [x] Connect the Storybook actions on the Build case study to the deployed URL.
- [x] Update both Storybook actions: introduction and closing section.
      Both Repository actions are now connected as well.

## Figma and code alignment

- [ ] Revisit the UIkit repo's existing sync audit (`docs/FIGMA_SYNC_AUDIT.md`
      in the UIkit repository).
- [ ] Agree on canonical semantic tokens and remove competing status-colour values
      from the source, generator, and component styles.
- [ ] Compare resolved Figma theme values with generated code tokens.
- [ ] Confirm supported themes, including whether Product Red is in scope.
      The current portfolio deliberately showcases only Light and Dark.
- [ ] Document Figma-to-code component mappings, including Modal/Dialog,
      Switch/Toggle, Nav Bar/App Bar, Side Nav/Sidebar, and Dropdown/Select.
- [ ] Resolve missing or intentionally design-only components. The existing audit
      flags Loader, Progress Bar, Pagination, Metadata List, Settings Row, and Table.
      Check their current state rather than treating the audit as definitive.
- [ ] Resolve size/state differences, including Radio, Switch/Toggle, and Textarea.
- [ ] Decide which code-only components need Figma documentation.
- [ ] Compare rendered components against Figma for typography, spacing, colours,
      dimensions, icons, and interaction states.
- [ ] Add verified Code Connect mappings where useful.
- [ ] Refresh the sync audit after reconciliation.

## Verification

- [ ] Run the configured lint, type-check, build, and component-test commands.
- [ ] Run the configured Storybook, compatibility, and consumer-app smoke checks.
- [ ] Test representative components in the HTML, React, and Vue examples.
- [ ] Check keyboard navigation, focus visibility, focus trapping/restoration,
      form behaviour, validation feedback, and loading/disabled states.
- [ ] Perform screen-reader and colour-contrast checks, including both themes.
- [ ] Test responsive layouts, zoom, long content, and supported browsers.
- [ ] Record actual results and remaining limitations. Do not claim accessibility
      conformance, coverage, or performance outcomes without supporting evidence.

## Finish the case studies

- [ ] Review personal descriptions, project scope, version labels, and technical claims.
      Figma v0.6 and package v0.1.0 are separate version labels, not equivalent releases.
- [ ] Add authentic context: why the system was built, constraints, key decisions,
      lessons learned, and any real use. Do not invent research or impact metrics.
- [ ] Refresh the Design page's images and token/component descriptions after alignment.
      Current exports are stored in `assets/design-system/`.
- [ ] Update the Build page's verification notes and known gaps after checks are run.
- [ ] Link to selected real Storybook examples if useful; do not recreate lookalike
      components just for the portfolio.
- [ ] Verify Design/Build cross-links, return links, section navigation, image dialogs,
      and keyboard behaviour on both case-study pages.
- [ ] Check both home-page project entries and the published site's asset paths.
- [ ] Confirm that visitors can understand both case studies without Figma, GitHub,
      or npm access.

## Suggested order

1. Confirm public-release permissions and licensing.
2. Resolve the most important design/code alignment gaps.
3. Run validation and record the results.
4. Publish the repo and Storybook, then connect the links.
5. Refresh screenshots, claims, and case-study copy; check the deployed portfolio.
