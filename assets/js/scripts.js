// Kode til at toggle burger menuen
function burgerToggle() {
    const navLinks = document.querySelector("#nav-links");
    // Hvis navLinks er vist, skjul den da
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    // ellers vis den
    } else {
        navLinks.style.display = "block";
    }
}

// Scroll to top button, based on example from w3schools (https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)
toTopBtn = document.querySelector("#toTopBtn");

// Denne kode gør at knappen dukker op når brugeren har rullet 20px ned ad siden
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

// Ved tryg på knappen vil brugeren blive scrollet tilbage til toppen af dokumentet
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}