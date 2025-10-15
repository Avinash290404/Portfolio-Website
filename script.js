// === Loader ===
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    // Lock scroll while loader is active
    document.body.classList.add("loader-lock");

    // Minimum display time (2s) so it doesn't flash
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.8s ease";

      setTimeout(() => {
        loader.style.display = "none";
        document.body.classList.remove("loader-lock"); // unlock scroll
      }, 800); // matches transition
    }, 2000);
  }
});

// === About section scroll animation ===
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card-item");
  const triggerPoint = window.innerHeight * 0.85;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerPoint) {
      card.classList.add("visible");
    }
  });
});

// === Contact form ===
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Message sent! Thank you for reaching out.");
});

// === Footer back to top ===
document.getElementById("back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// === Section scroll reveal ===
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach((sec) => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight * 0.85) {
      sec.classList.add("visible");
    }
  });
});
