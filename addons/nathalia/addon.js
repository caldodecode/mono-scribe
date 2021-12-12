let answer = {
    correct: {
        old: 0,
        now: 0
    },
    wrong: {
        old: 0,
        now: 0
    }
}

let path = './addons/nathalia/audios/'
const correctAudio = new Audio(`${path}correct.mp3`)
const wrongAudio = new Audio(`${path}error.mp3`)

window.addEventListener('update-statis', ev => {
    answer.correct.now = ev.stats.corrects
    answer.wrong.now = ev.stats.errors
    
    if (answer.correct.now != answer.correct.old) {
        answer.correct.old = answer.correct.now
        correctAudio.play();
    } 
    
    if (answer.wrong.now != answer.wrong.old) {
        answer.wrong.old = answer.wrong.now
        wrongAudio.play()
    }

})

export default function () {
}