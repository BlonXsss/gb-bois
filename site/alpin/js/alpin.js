(() => {
  const toggle = document.querySelector(".nav-toggle");
  const mobile = document.getElementById("nav-mobile");
  const heroImgs = [...document.querySelectorAll(".hero-img")];
  const form = document.getElementById("contact-form");
  const robotEl = document.getElementById("robot-number");
  const robotInput = document.getElementById("robot-input");
  const status = document.getElementById("form-status");

  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      mobile.hidden = open;
    });
    mobile.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        mobile.hidden = true;
      });
    });
  }

  if (heroImgs.length > 1) {
    let i = 0;
    setInterval(() => {
      heroImgs[i].classList.remove("is-active");
      i = (i + 1) % heroImgs.length;
      heroImgs[i].classList.add("is-active");
    }, 6500);
  }

  const revealTargets = document.querySelectorAll(
    ".about-grid, .section-head, .product, .feature-panel, .essence, .contact-grid > *"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-in"));
  }

  let robotCode = "";
  const refreshRobot = () => {
    robotCode = String(Math.floor(1000 + Math.random() * 9000));
    if (robotEl) robotEl.textContent = robotCode;
    if (robotInput) robotInput.value = "";
  };
  refreshRobot();

  if (form) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      if (robotInput && robotInput.value.trim() !== robotCode) {
        status.hidden = false;
        status.style.color = "#f0a090";
        status.textContent = "Le code anti-robot est incorrect.";
        refreshRobot();
        return;
      }
      status.hidden = false;
      status.style.color = "#9fd89a";
      status.textContent = "Merci — message reçu (démo, non envoyé).";
      form.reset();
      refreshRobot();
    });
  }
})();
