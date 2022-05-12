icon = document.querySelector(".icon");
centered = document.querySelector(".centered");
nav = document.querySelector(".navbar");

icon.addEventListener("click", () => {
    centered.classList.toggle('v-class');
    nav.classList.toggle('h-class');

})