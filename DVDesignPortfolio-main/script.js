const modeButtons = document.querySelectorAll("[data-mode]");
const viewStatus = document.querySelector(".view-status");
const modeSwitch = document.querySelector(".mode-switch");
function dismissSwitchAttention() {
  modeSwitch.classList.add("attention-dismissed");
}
["pointerenter", "pointerdown", "focusin"].forEach((event) => {
  modeSwitch.addEventListener(event, dismissSwitchAttention, { once: true });
});

function setPortfolioView(mode, announce = false) {
  const isBuild = mode === "build";
  document.body.dataset.mode = mode;
  document.querySelectorAll("[data-view]").forEach((section) => {
    section.hidden = section.dataset.view !== mode;
  });
  modeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.mode === mode));
  });
  document.querySelectorAll('.work-link, nav a[href="#work"], nav a[href="#build-work"]').forEach((link) => {
    link.setAttribute("href", isBuild ? "#build-work" : "#work");
  });
  document.title = `Drew Valla | ${isBuild ? "Build & UX Engineering" : "Design Portfolio"}`;
  if (announce) {
    viewStatus.textContent = isBuild
      ? "Build view selected. Explore front-end engineering and working interfaces."
      : "Design view selected. Explore UI/UX design and design systems.";
  }
}

function viewFromUrl() {
  return new URL(location.href).searchParams.get("view") === "build" ? "build" : "design";
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.dataset.mode;
    if (mode === document.body.dataset.mode) return;
    const url = new URL(location.href);
    url.searchParams.set("view", mode);
    if (url.hash === "#work" || url.hash === "#build-work") {
      url.hash = mode === "build" ? "#build-work" : "#work";
    }
    history.pushState(null, "", url);
    setPortfolioView(mode, true);
  });
});
window.addEventListener("popstate", () => setPortfolioView(viewFromUrl(), true));
setPortfolioView(viewFromUrl());
document.querySelector(".portfolio-picker").hidden = false;
