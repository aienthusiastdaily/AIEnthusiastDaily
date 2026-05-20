document.documentElement.classList.add("js-enabled");

const forms = document.querySelectorAll("[data-signup-form]");
const revealNodes = document.querySelectorAll(".reveal");

const hasPlaceholderEndpoint = (url) =>
  !url ||
  url.includes("your_form_id") ||
  url.includes("replace_") ||
  url.includes("example.com");

forms.forEach((form) => {
  const status = form.querySelector("[data-form-status]");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = form.querySelector('button[type="submit"]');
    const submitLabel = submitButton?.dataset.submitLabel || submitButton?.textContent || "Submit";

    if (hasPlaceholderEndpoint(form.action)) {
      if (status) {
        status.textContent =
          "Replace the Formspree endpoint before publishing.";
        status.className = "form-status is-error";
      }
      return;
    }

    form.querySelectorAll("[data-current-url]").forEach((input) => {
      if (input instanceof HTMLInputElement) {
        input.value = window.location.href;
      }
    });

    form.querySelectorAll("[data-submitted-at]").forEach((input) => {
      if (input instanceof HTMLInputElement) {
        input.value = new Date().toISOString();
      }
    });

    const formData = new FormData(form);

    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
    }

    if (status) {
      status.textContent = "";
      status.className = "form-status";
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();

      if (status) {
        status.textContent =
          form.dataset.successMessage || "Thanks. I received your submission.";
        status.className = "form-status is-success";
      }
    } catch (error) {
      if (status) {
        status.textContent =
          "Submission failed. Check the endpoint or try again in a moment.";
        status.className = "form-status is-error";
      }
    } finally {
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
        submitButton.textContent = submitLabel;
      }
    }
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    },
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}
