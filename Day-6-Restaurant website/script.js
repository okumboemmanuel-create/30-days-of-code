const menuButton = document.querySelector(".buttons button:last-child");
const menuSection = document.querySelector("#menu");

menuButton.addEventListener("click", function () {
    menuSection.scrollIntoView({
        behavior: "smooth"
    });
});
const orderButton = document.querySelector(".buttons button:first-child");
const contactSection = document.querySelector("#contact");

orderButton.addEventListener("click", function () {
    contactSection.scrollIntoView({
        behavior: "smooth"
    });
});
const topButton = document.querySelector("#topBtn");
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
    topButton.style.display = "block";
} else {
    topButton.style.display = "none";
}

});
topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});