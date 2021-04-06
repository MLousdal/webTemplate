function burgerToggle() {
    const navLinks = document.querySelector("#nav-links");

    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";

    } else {
        navLinks.style.display = "block";
    }
}
