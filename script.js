const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");
filters.forEach(button => button.addEventListener("click", () => {
  filters.forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const filter = button.dataset.filter;
  projects.forEach(project => project.hidden = filter !== "all" && project.dataset.category !== filter);
}));
const form = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");
form.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();
  formMessage.className = "";
  if (name.length < 2) return showMessage("Please enter your name (at least 2 characters).", "error");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showMessage("Please enter a valid email address.", "error");
  if (message.length < 10) return showMessage("Please write at least 10 characters.", "error");
  showMessage("Your entries look valid. This demo does not send or store the message.", "success");
});
function showMessage(message, type) { formMessage.textContent = message; formMessage.className = type; }
document.querySelector("#year").textContent = new Date().getFullYear();
