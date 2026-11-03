const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

document.body.classList.add("motion-ready");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

const closeMenu = () => {
  menuToggle?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("is-open");
  header?.classList.remove("nav-open");
};

menuToggle?.addEventListener("click", () => {
  const shouldOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(shouldOpen));
  navigation?.classList.toggle("is-open", shouldOpen);
  header?.classList.toggle("nav-open", shouldOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealTargets = document.querySelectorAll(
  ".section-intro, .comparison, .product-steps article, .pipeline-figure, .prototype-showcase, .output-figure, .wedge-grid article, .moat-line, .architecture-grid, .why-grid article, .founder"
);

revealTargets.forEach((target) => target.classList.add("reveal"));

if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6%" }
  );

  revealTargets.forEach((target) => observer.observe(target));
}

const sensorCard = document.querySelector(".sensor-card");

if (sensorCard && !reducedMotion.matches) {
  sensorCard.addEventListener("pointermove", (event) => {
    const bounds = sensorCard.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    sensorCard.style.transform = `perspective(1000px) rotateX(${-y * 2.4}deg) rotateY(${x * 2.4}deg)`;
  });

  sensorCard.addEventListener("pointerleave", () => {
    sensorCard.style.transform = "";
  });
}
