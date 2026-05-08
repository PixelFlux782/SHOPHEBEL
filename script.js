const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const form = document.querySelector(".contact-card");
const successMessage = document.querySelector(".form-success");
const counters = document.querySelectorAll("[data-count]");
const revealElements = document.querySelectorAll(".reveal");
const yearNode = document.querySelector("#year");
const intentTriggers = document.querySelectorAll("[data-intent]");
const messageField = document.querySelector("#message");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (navToggle && navMenu) {
  const closeMenu = () => {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("is-open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.classList.contains("is-open")) {
      return;
    }

    const clickInside = navMenu.contains(event.target) || navToggle.contains(event.target);
    if (!clickInside) {
      closeMenu();
    }
  });
}

if (form && successMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.textContent = "Vielen Dank. Ihre Anfrage ist eingegangen. Sie erhalten zeitnah eine persönliche Rückmeldung mit konkretem nächsten Schritt.";
    form.reset();
  });
}

if (intentTriggers.length > 0 && messageField) {
  const intentMap = {
    call: "Ich möchte ein unverbindliches Erstgespräch zur strategischen Ausrichtung meiner Website/meines Shops.",
    audit: "Ich möchte meine bestehende Website bzw. meinen Onlineshop prüfen lassen und suche konkrete Optimierungsschritte.",
    exchange: "Ich möchte mich unverbindlich austauschen, ob eine Zusammenarbeit sinnvoll ist.",
    offer: "Ich möchte eine erste Einschätzung zu Aufwand und möglichem Vorgehen für mein Projekt.",
    case: "Ich suche eine Lösung ähnlich zu einem gezeigten Referenzprojekt und möchte prüfen, was bei mir möglich ist."
  };

  intentTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const intent = trigger.getAttribute("data-intent");
      const preset = intentMap[intent];
      if (preset) {
        messageField.value = preset;
      }
    });
  });
}

if ("IntersectionObserver" in window) {
  counters.forEach((counter) => {
    counter.textContent = "0";
  });

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const counter = entry.target;
      const target = Number(counter.getAttribute("data-count")) || 0;
      const duration = 1300;
      const start = performance.now();

      const updateCounter = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        counter.textContent = String(Math.round(progress * target));
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
      observer.unobserve(counter);
    });
  }, { threshold: 0.45 });

  counters.forEach((counter) => counterObserver.observe(counter));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
