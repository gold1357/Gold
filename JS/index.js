window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add
        ("display");

    }, 3000);
};

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle("change");
});


document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
    }, 9000);
});
