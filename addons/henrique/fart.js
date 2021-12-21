export default function () {

    const fileName = import.meta.url
    const dirName = fileName.substring(0, fileName.lastIndexOf("/"))
    const imagens = ["url(addons/henrique/imagens/standard.png)", "url(addons/henrique/imagens/reverse.png)", "url(addons/henrique/imagens/idk.png)", "url(addons/henrique/imagens/butt.png)"]

    var counter = 0

    function changeImage() {
        var img = document.body.style
        if (counter >= imagens.length) {
            counter = 0
        }

        img.backgroundImage = imagens[counter]
        img.backgroundRepeat = "no-repeat"
        img.backgroundPosition = "top"
        counter++
    }

    document.addEventListener("update-stats", ev => {

        if (event.stats.type == "key") {
            if (event.stats.lastKey == " ") {
                const audio = new Audio(`${dirName}/audio/echofart2.0.mp3`)
                audio.play()
                changeImage()
                return
            } else {
                const audio = new Audio(`${dirName}/audio/quickFart2.0.mp3`)
                audio.play()
                return
            }

        }

    })

}