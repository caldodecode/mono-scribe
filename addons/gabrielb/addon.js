export default function () {

  function injectCSS() {
    const x = document.createElement("link")
    x.rel = "stylesheet"
    let p = import.meta.url
    p = p.substring(0, p.lastIndexOf("/"))
    x.href = p + "/style.css"
    document.head.appendChild(x)
  }

  injectCSS();

  console.log("Hello, World!")
}