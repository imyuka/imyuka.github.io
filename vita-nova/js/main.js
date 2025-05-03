const params = new URLSearchParams(window.location.search);
const name = params.get("h");

if (name) {
  document.getElementById("hero-name").textContent = decodeURIComponent(name);
} else {
  document.getElementById("hero-name").textContent = "Stranger";
}
