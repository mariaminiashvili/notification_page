
const openMessage = document.querySelector("#open");
const hiddenMessage = document.querySelector(".hidden-message");
const redCircle = document.querySelector("#red");
const weberr = document.querySelector("#weberr");
const redOne = document.querySelector("#red-one");
const grey = document.querySelector("#grey");
const redTwo = document.querySelector("#red-two");
const Thompson = document.querySelector("#Thompson");
const redTree = document.querySelector("#red-three");
const Smith = document.querySelector("#Smith");
const redFour = document.querySelector("#red-four");
const Peterson = document.querySelector("#Peterson");
const redFive = document.querySelector("#red-five");
const six = document.querySelectorAll("#kim");
const redSix = document.querySelector("#red-six");



let clicked = false;

openMessage.addEventListener("click", () => {
    if(!clicked){
        clicked = !clicked;
        hiddenMessage.style.display = "flex";
        redCircle.style.display= "none";
        openMessage.style.backgroundColor = "white";
    }else{
        clicked = !clicked;
        hiddenMessage.style.display = "none";
    }
})


hiddenMessage.addEventListener("click", () => {
    hiddenMessage.style.display = "none";
}
)


weberr.addEventListener("click", () => {
    redOne.style.display= "none";
    weberr.style.backgroundColor = "white";
}
)


grey.addEventListener("click", () => {
    redTwo.style.display= "none";
    grey.style.backgroundColor = "white";
}
)

Thompson.addEventListener("click", () => {
    redTree.style.display= "none";
    Thompson.style.backgroundColor = "white";
}
)


Smith.addEventListener("click", () => {
    redFour.style.display= "none";
    Smith.style.backgroundColor = "white";
}
)

Peterson.addEventListener("click", () => {
    redFive.style.display= "none";
    Peterson.style.backgroundColor = "white";
}
)

kim.addEventListener("click", () => {
    redSix.style.display= "none";
    kim.style.backgroundColor = "white";
}
)