// import * as classes from '../scss/main.scss'; // For css in js

// Theme toggle
const body = document.querySelector("body");
const mqPCS = window.matchMedia("prefers-color-scheme");

window.onload = () => {
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  
  if(userPrefersDark){
    body.classList.add("theme-dark");
  }
  
  if(userPrefersLight){
    body.classList.add("theme-light");
  }
  
}

const themeToggle = document.querySelector("#themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("theme-light")) {
      body.classList.replace("theme-light", "theme-dark");
    } else {
      body.classList.replace("theme-dark", "theme-light");
    }
  });
}
