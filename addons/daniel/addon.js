async function z(text, textElements) {
    const stats = {
        errors: 0,
        corrects: 0,
        time: 0
    }
    let pos = 0
    
    setInterval(() => { 
        stats.time++
        const event = new CustomEvent('update-statis', {
            bubbles: true,
            cancelable: true
        });
        event.stats = stats
        document.dispatchEvent(event) 
    }, 1000)

    window.addEventListener("keydown", ev => {
        if (ev.key == "Shift"
            || ev.key == "Control"
            || ev.key == "Escape"
            || ev.key == "AltGraph"
            || ev.key == "ContextMenu"
            || ev.key == "Tab"
            || ev.key == "Backspace"
        ) return
        textElements[pos].classList.remove('cursor')
        if (ev.key === text[pos]) {
            textElements[pos].classList.remove("wrong")
            textElements[pos].classList.add("correct")
            stats.corrects++
        } else {
            textElements[pos].classList.add("wrong")
            stats.errors++
        }
        pos++
        textElements[pos].classList.add('cursor')
    })
}

async function getText() {
    const req = await fetch("https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=0&format=jsom")
    const para = (await req.json())[0]
    return para.replace(/\s{2,}/g, " ")
}

async function loadText(text) {
    const para = document.querySelector("main p")
    const textElements = []
    let word = document.createElement("span")
    word.className = "word"
    for (let i = 0; i < text.length; i++) {
        const letter = document.createElement("span")
        letter.className = "letter"
        letter.innerText = text[i]
        textElements.push(letter)
        word.appendChild(letter)
        if (text[i] === " ") {
            para.appendChild(word)
            word = document.createElement("span")
            word.className = "word"
        }
    }
    textElements[0].classList.add('cursor')
    para.appendChild(word)
    return textElements
}

export default async function () {
    const text = await getText()
    const letters = await loadText(text)
    z(text, letters)
}