// const clickName = document.querySelector(".name");
const openMessage = document.querySelector("#open");
const hiddenMessage = document.querySelector(".hidden-message");
const redCircle = document.querySelector("#red");




openMessage.addEventListener("click", () => {
    hiddenMessage.style.display = "flex";
    redCircle.className.remove ("red");
    openMessage.style.backgroundcolor = "#ffff";
}
)

