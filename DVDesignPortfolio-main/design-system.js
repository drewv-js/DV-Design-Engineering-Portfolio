const imageDialog = document.querySelector(".image-dialog");
const enlargedImage = imageDialog.querySelector("img");
let imageTrigger;

document.querySelectorAll("[data-enlarge]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    imageTrigger = link;
    const source = link.querySelector("img");
    enlargedImage.src = link.href;
    enlargedImage.alt = source.alt;
    document.querySelector("#image-title").textContent = link.getAttribute("aria-label");
    imageDialog.querySelector(".original-image").href = link.href;
    imageDialog.showModal();
    imageDialog.scrollTop = 0;
  });
});
imageDialog.querySelector(".close-image").addEventListener("click", () => imageDialog.close());
imageDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    imageDialog.close();
  }
});
imageDialog.addEventListener("click", (event) => {
  if (event.target !== imageDialog) return;
  const bounds = imageDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) {
    imageDialog.close();
  }
});
imageDialog.addEventListener("close", () => imageTrigger?.focus());

const sectionLinks = document.querySelectorAll('.contents a[href^="#"]');
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    sectionLinks.forEach((link) => {
      if (link.hash === `#${entry.target.id}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }
}, { rootMargin: "-10% 0px -65% 0px" });
document.querySelectorAll(".case-section").forEach((section) => observer.observe(section));
