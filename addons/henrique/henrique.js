export default function () {
    
    document.addEventListener("keydown", ev => {
        
        const kbLeft = ["a", "s", "d", "q", "w", "e", "z", "x", "c"]
        const kbRight = ["k", "l", "ç", "i", "o", "p"]
        const kbCenter = ["r", "f", "v", "b", "g", "t", "y", "h", "n", "m", "j", "u"]

        
        
        if (kbLeft.includes(ev.key)) {
            console.log("aewww", ev.key)
            const audio = new Audio("henrique/audio/bruh.mp3")
            audio.play()
            return
        }
        
        console.log("não tem grupo") 
    })

}