const nav = document.querySelector('.nav');
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
    console.log("we are going down");
} else{
    console.log("we are going up");
    nav.classList.remove("nav--hidden")
}
lastScrollY = window.scrollY;
});