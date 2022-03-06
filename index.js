const basicInfo = document.getElementById("basicinfo")
const backToTop = document.getElementById("scroll-top")
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


const observer = new IntersectionObserver(entries => {
    const [entry] = entries
    if (entry.isIntersecting) {
        backToTop.classList.add("hide-button")
        // observer.unobserve(basicInfo)
    } else {
        backToTop.classList.remove("hide-button")
    }
}, {
    threshold: 1
})


observer.observe( basicInfo )