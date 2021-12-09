const main = document.querySelector("main")

function show() {
    main.style.visibility = "visible"
}

function hide() {
    main.style.visibility = "hidden"
    setTimeout(show, 300)
}

export default function() {
    setInterval(hide, 3000)
}