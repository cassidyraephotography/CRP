const year = document.querySelector("[data-current-year]");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const inquiryForm = document.querySelector("[data-inquiry-form]");

if (inquiryForm) {
  const formStatus = inquiryForm.querySelector("[data-form-status]");
  const packageSelect = inquiryForm.querySelector("#inquiry-package");

  document.querySelectorAll("[data-package-link]").forEach((link) => {
    link.addEventListener("click", () => {
      packageSelect.value = link.dataset.packageLink;
    });
  });

  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent =
      "Your inquiry was not sent. This form still needs to be connected. Please message Cassidy Rae Photography on Instagram for now.";
  });
}

const heroArt = document.querySelector(".hero-art");
const polaroids = heroArt?.querySelector(".polaroids");

if (heroArt && polaroids) {
  const photos = [
    "portraits-011.jpg",
    "portraits-013.jpg",
    "portraits-015.jpg",
    "portraits-018.jpg",
    "portraits-020.jpg",
    "portraits-021.jpg",
    "portraits-026.jpg",
    "portraits-027.jpg",
    "portraits-031.jpg",
    "portraits-032.jpg",
    "portraits-033.jpg",
    "portraits-034.jpg",
    "portraits-010.jpg",
    "portraits-012.jpg",
    "portraits-014.jpg",
    "portraits-016.jpg",
    "portraits-017.jpg",
    "portraits-019.jpg",
    "portraits-022.jpg",
    "portraits-023.jpg",
    "portraits-024.jpg",
    "portraits-025.jpg",
    "portraits-028.jpg",
    "portraits-029.jpg",
    "portraits-030.jpg",
    "portraits-035.jpg",
  ];

  const randomBetween = (minimum, maximum) =>
    minimum + Math.random() * (maximum - minimum);
  let dropDelay = 0;

  photos.forEach((src, index) => {
    const frame = document.createElement("span");
    const image = document.createElement("img");
    const width = randomBetween(13, 17);

    frame.className = "polaroid";
    frame.style.setProperty("--left", `${randomBetween(12, 72)}%`);
    frame.style.setProperty("--top", `${randomBetween(13, 60)}%`);
    frame.style.setProperty("--width", `${width}%`);
    frame.style.setProperty("--rotation", `${randomBetween(-34, 34)}deg`);
    frame.style.setProperty("--start-rotation", `${randomBetween(-18, 18)}deg`);
    frame.style.setProperty("--entry-x", `${randomBetween(8, 92)}%`);
    frame.style.setProperty("--entry-y", `${randomBetween(0.55, 1.05)}`);
    frame.style.setProperty("--stack-order", String(index + 1));
    frame.style.setProperty("--drop-delay", `${dropDelay}ms`);
    frame.style.setProperty("--drop-duration", `${randomBetween(1800, 2600)}ms`);
    dropDelay += randomBetween(220, 650);

    image.src = `/images/gallery/${src}`;
    image.alt = "";
    image.loading = "eager";
    image.decoding = "async";
    frame.append(image);
    polaroids.append(frame);
  });

  const updateOrigins = () => {
    const artBounds = polaroids.getBoundingClientRect();

    polaroids.querySelectorAll(".polaroid").forEach((frame) => {
      const targetX = frame.offsetLeft + frame.offsetWidth / 2;
      const targetY = frame.offsetTop + frame.offsetHeight / 2;
      const entryX = artBounds.width * parseFloat(frame.style.getPropertyValue("--entry-x")) / 100;
      const startX = entryX - targetX;
      const startY = -targetY - frame.offsetHeight * parseFloat(frame.style.getPropertyValue("--entry-y"));

      frame.style.setProperty("--start-x", `${startX}px`);
      frame.style.setProperty("--start-y", `${startY}px`);
    });
  };

  updateOrigins();
  new ResizeObserver(updateOrigins).observe(heroArt);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    heroArt.classList.add("is-static");
  } else if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      heroArt.classList.toggle("is-visible", entry.isIntersecting);
    });

    observer.observe(heroArt);
  } else {
    heroArt.classList.add("is-static");
  }
}
