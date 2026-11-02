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
      : "Design view selected. Explore UI/UX concepts and visual design.";
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

const projects = {
  kindred: {
    title: "Kindred",
    description: "A softer approach to everyday wellbeing.",
    type: "Wellbeing product / UI exploration",
    opportunity: "Could a wellbeing tool help people build small routines without the pressure of streaks, scores, or an endless list of things to improve? This is a question to investigate, not a validated user finding.",
    direction: "Explore a calm check-in flow, a small library of rituals, and flexible reminders. The visual starting point pairs botanical shapes with quiet greens and generous space."
  },
  table: {
    title: "Table Journey",
    description: "Less deciding. More enjoying.",
    type: "Recipe discovery / Mobile experience",
    opportunity: "Choosing what to cook can become its own task. This concept asks whether a smaller, more relevant set of meal suggestions could make that decision feel easier.",
    direction: "Explore ingredient-led discovery, clear preparation times, and a simple saved-recipes flow. Warm colours and a friendly editorial style set an approachable visual direction."
  },
  form: {
    title: "Form & Field",
    description: "A considered home for everyday objects.",
    type: "Homewares / Web and commerce",
    opportunity: "How might an independent homewares shop help shoppers understand an object's materials, scale, and everyday use before buying? This brief is fictional and has not been tested.",
    direction: "Explore a focused collection page, informative product details, and an uncomplicated path to checkout. Neutral tones and sculptural product studies put the objects first."
  }
};

const dialog = document.querySelector("#project-dialog");
let lastTrigger;

document.querySelectorAll("[data-project]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const project = projects[link.dataset.project];
    if (!project) {
      console.error("Unknown portfolio project:", link.dataset.project);
      return;
    }
    event.preventDefault();
    lastTrigger = link;
    document.querySelector("#dialog-title").textContent = project.title;
    document.querySelector("#dialog-description").textContent = project.description;
    document.querySelector("#dialog-type").textContent = project.type;
    document.querySelector("#dialog-opportunity").textContent = project.opportunity;
    document.querySelector("#dialog-direction").textContent = project.direction;
    dialog.showModal();
  });
});

document.querySelector(".close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    dialog.close();
  }
});
dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) {
    dialog.close();
  }
});
dialog.addEventListener("close", () => lastTrigger?.focus());
