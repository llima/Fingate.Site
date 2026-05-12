/* Fingate Home — interactions (vanilla) */
(function () {
  "use strict";

  // ── Header sticky shadow on scroll ──
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ── Mobile menu toggle ──
  const toggle = document.querySelector(".menu-toggle");
  const mobile = document.querySelector(".mobile-menu");
  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      const open = toggle.classList.toggle("is-open");
      mobile.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      mobile.setAttribute("aria-hidden", String(!open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobile.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        toggle.classList.remove("is-open");
        mobile.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        mobile.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      });
    });
  }

  // ── Reveal on scroll ──
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("is-visible"));
  }

  // ── Mega menu (Produtos) ──
  const mega = document.querySelector(".nav-mega");
  if (mega) {
    const trigger = mega.querySelector(".nav-mega__trigger");
    let closeTimer = null;
    const open = () => {
      clearTimeout(closeTimer);
      mega.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    };
    const close = () => {
      mega.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    };
    const deferClose = () => {
      closeTimer = setTimeout(close, 180);
    };
    mega.addEventListener("mouseenter", open);
    mega.addEventListener("mouseleave", deferClose);
    trigger.addEventListener("focus", open);
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      mega.classList.contains("is-open") ? close() : open();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
    document.addEventListener("click", (e) => {
      if (!mega.contains(e.target)) close();
    });
  }

  // ── Analytics hook on WhatsApp clicks ──
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener("click", () => {
      const origin = link.dataset.origin || "unknown";
      // hook for analytics; no-op for now
      window.dispatchEvent(new CustomEvent("whatsapp_click", { detail: { origin } }));
    });
  });
})();
