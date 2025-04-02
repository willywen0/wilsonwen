/*~~~~~~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~~~~~~*/ 
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const navMenu = document.getElementById("nav-menu");



hamburgerIcon.addEventListener("click", () => {
    navMenu.classList.remove("hidden");
    closeIcon.classList.remove("hidden");
    hamburgerIcon.classList.add("hidden");
})

closeIcon.addEventListener("click", () => {
    navMenu.classList.add("hidden");
    closeIcon.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
})


/*~~~~~~~~~~~~~~~~~~~~ FAQ ~~~~~~~~~~~~~~~~~~~~*/ 
let Buttons = document.querySelectorAll(".selectSection button")

for (let button of Buttons) {
    button.addEventListener("click", (e) => {
        const et = e.target;
        const active = document.querySelector(".active");

        if (active) {
            active.classList.remove("active");
        }
        et.classList.add("active");

        let allContent = document.querySelectorAll(".content");

        for (let content of allContent) {
            if (content.getAttribute("data-number") === button.getAttribute("data-number")) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        }
    })
}