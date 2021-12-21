
export default function () {

    const fileName = import.meta.url
    const dirName = fileName.substring(0, fileName.lastIndexOf("/"))
    const imagens = ["url(addons/henrique/imagens/rock.jpg)", "url(addons/henrique/imagens/rockEyebrown.jpg)"]

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
                const audio = new Audio(`${dirName}/audio/boom.mp3`)
                audio.play()
                changeImage()
                return
            }

            if (event.stats.lastIsCorrect) {
                const audio = new Audio(`${dirName}/audio/bonk.mp3`)
                audio.play()
                return

            } else {
                const audio = new Audio(`${dirName}/audio/bruh.mp3`)
                audio.play()
                return
            }
        }

    })

}