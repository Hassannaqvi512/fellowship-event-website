const modal = document.getElementById("announcement");
const closeModal = document.getElementById("closeModal");
const modalApply = document.getElementById("modalApply");
const form = document.getElementById("applicationForm");
const formMessage = document.getElementById("formMessage");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

function hideModal() {
  modal.classList.add("hidden");
}
closeModal.addEventListener("click", hideModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) hideModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideModal();
});
modalApply.addEventListener("click", hideModal);

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  formMessage.className = "form-message";
  formMessage.textContent = "Submitting…";

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.message || "Submission failed.");
    formMessage.className = "form-message success";
    formMessage.textContent = `${result.message} Confirmation ID: ${result.applicationId}`;
    form.reset();
  } catch (error) {
    formMessage.className = "form-message error";
    formMessage.textContent = error.message || "سرور سے رابطہ نہیں ہو سکا۔ پہلے Node.js سرور چلائیں۔";
  }
});
