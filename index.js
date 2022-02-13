const menuItems = document.getElementById("ham-menu-items")
const hamMenu = document.getElementById("ham-menu")
const bodyEl = document.querySelector("body")

hamMenu.addEventListener("click", () => {
    menuItems.classList.toggle("toggle")
    bodyEl.classList.toggle("noscroll")
})

function handleLinks() {
    menuItems.classList.toggle("toggle")
}