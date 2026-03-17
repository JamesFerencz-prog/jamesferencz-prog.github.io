"use strict";

(function () {
  const form = document.getElementById("contactForm");
  const msgEl = document.getElementById("formMsg");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (form && msgEl) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = (form.querySelector("#name")?.value || "").trim();
      const email = (form.querySelector("#email")?.value || "").trim();
      const message = (form.querySelector("#message")?.value || "").trim();

      msgEl.classList.remove("success", "error");
      if (!name || !email || !message) {
        msgEl.textContent = "Please fill in all fields.";
        msgEl.classList.add("error");
        return;
      }

      msgEl.textContent = "Thanks! I'll get back to you soon.";
      msgEl.classList.add("success");
      form.reset();
    });
  }
})();
