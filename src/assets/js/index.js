// import * as classes from '../scss/main.scss'; // For css in js

// Theme toggle
const body = document.querySelector("body");
const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("theme-light")) {
    body.classList.replace("theme-light", "theme-dark");
  } else {
    body.classList.replace("theme-dark", "theme-light");
  }
});
