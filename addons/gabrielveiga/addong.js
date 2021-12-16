export default function () {
    const fileName = import.meta.url
    const dirName = fileName.substring(0, fileName.lastIndexOf("/"))

    const link = document.createElement("link")
    link.rel="stylesheet"
    link.type="text/css" 
    link.media="screen" 
    link.href=`${dirName}/addong.css` 
    document.head.appendChild(link)

    // document.body.style.backgroundColor = "pink"
    // document.body.style.setProperty("--error-color", "indigo")
    // document.body.style.setProperty("--text-color", "LightYellow")
    // document.body.style.setProperty("--sub-color", "black")




    const vogal = ["a", "e", "i", "o", "u"]


}