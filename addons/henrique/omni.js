export default function () {
    
    var bodyStyle = document.body.style

    bodyStyle.setProperty("--bg-color", "#221b44")
    bodyStyle.setProperty("--main-color", "#009eaf")
    bodyStyle.setProperty("--caret-color", "#009eaf")
    bodyStyle.setProperty("--sub-color", "#b82356") 
    bodyStyle.setProperty("--text-color", "#dbe7e8") 
    bodyStyle.setProperty("--error-color", "#a8d400")
    bodyStyle.setProperty("--error-extra-color", "#668000")
    bodyStyle.setProperty("--colorful-error-color", "#a8d400")
    bodyStyle.setProperty("--colorful-error-extra-color", "#668000")

    let done = false
    const fileName = import.meta.url
    const dirName = fileName.substring(0, fileName.lastIndexOf("/"))    
    let audio = new Audio(`${dirName}/audio/hotMilkLoop.wav`)
    const timmings = [1.3, 4.5, 7.7, 10.9, 14.1, 14.9, 15.7, 16.5, 17.3, 18.1, 18.9, 19.7, 20.5, 21.3, 22.1, 22.9, 23.7, 24.5, 25.3]
    // [1, 4, 7, 11, 14, 14, 15, 16, 17, 18, 19, 20, 20, 21, 22, 23, 24, 25, 26]


    setInterval(function(){
        let audioTimming = audio.currentTime.toFixed(1)
        audioTimming = parseFloat(audioTimming)
        console.log(audioTimming)
        console.log(timmings.includes(audioTimming))

        if (timmings.includes(audioTimming)) {
            console.log("vai acontecer quando der 5 segundos do audio")
            
            bodyStyle.backgroundImage = "url(addons/henrique/imagens/thicc.png)"
            bodyStyle.backgroundRepeat = "no-repeat"
            bodyStyle.backgroundSize = "contain"
            bodyStyle.backgroundPosition = "center"
            setTimeout(function () {
                bodyStyle.backgroundImage = "url(addons/henrique/imagens/omniMan.png)"
            }, 700)
            
        } else {
            if (bodyStyle.backgroundImage == 'url("addons/henrique/imagens/thicc.png")') {
                return
            } else {
                bodyStyle.backgroundImage = "url(addons/henrique/imagens/omniMan.png)"
                bodyStyle.backgroundRepeat = "no-repeat"
                bodyStyle.backgroundSize = "contain"
                bodyStyle.backgroundPosition = "center"
            }
        }
    }, 100)
    
    audio.play()
    audio.volume = 0.40
    audio.loop = true
}