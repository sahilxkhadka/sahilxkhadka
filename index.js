const menuItems = document.getElementById("ham-menu-items")
const hamMenu = document.getElementById("ham-menu")
const bodyEl = document.querySelector("body")

var hamEl = document.getElementById("ham-menu-img")
var toggle = false

hamMenu.addEventListener("click", () => {
    menuItems.classList.toggle("toggle")
    bodyEl.classList.toggle("noscroll")
    if (toggle === true) {
        hamEl.src = "./images/icons-ham.png"
    } else {
        hamEl.src = "./images/cancel.png"
    }
    toggle = !toggle
})

function handleLinks() {
    menuItems.classList.toggle("toggle")
    bodyEl.classList.remove("noscroll")
}