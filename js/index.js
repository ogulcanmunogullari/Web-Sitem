const ROTATE_MENU = document.querySelector(".menuCircle")
const ROTATE_CONTAINER = document.querySelector(".container")
const SLIDE_ASIDE = document.querySelector("aside")
const SLIDE_HEADER = document.querySelector(".slider")
ROTATE_MENU.addEventListener("click", () => {
    
    ROTATE_MENU.classList.toggle("menuCircleRotate")
    ROTATE_CONTAINER.classList.toggle("containerRotate")
    SLIDE_ASIDE.classList.toggle("slide")
    setTimeout(() => {
        SLIDE_HEADER.classList.toggle("slideContainer")
    }, 900)
    setTimeout(() => {
        SLIDE_HEADER.classList.toggle("margin")
    }, 450)
})