export default async function () {

  function injectCSS() {
    const x = document.createElement("link")
    x.rel = "stylesheet"
    let p = import.meta.url
    p = p.substring(0, p.lastIndexOf("/"))
    x.href = p + "/style.css"
    document.head.appendChild(x)
  }

  injectCSS();
}
//capturar os acertos e erros [ok]
//calcular wpm 
//converter de wpm para intensidade do fogo

let answers = {
  correct: 0,
  wrong: 0,
  time:0
}

window.addEventListener('update-stats', ev => {
  answers.correct = ev.stats.corrects
  answers.wrong = ev.stats.errors
  answers.time = ev.stats.time
})


//Fogo bixo

let fireCanvas = document.createElement("div")
fireCanvas.id = "fireCanvas"
document.body.appendChild(fireCanvas)

let fireCanvasButtons = document.createElement("div")
fireCanvasButtons.id = "fireCanvasButtons"
fireCanvasButtons.innerHTML = `<div class="margin">
<button id="decreaseFireButton">-</button>
<button id="minFireButton">Min Fire</button>
<button id="maxFireButton">Max Fire</button>
<button id="increaseFireButton">+</button>
</div>
<div class="margin">
<button id="toggleDebugModeButton">Toggle Debug Mode</button>
</div>`
document.body.appendChild(fireCanvasButtons)

const minFireButton = document.querySelector('#minFireButton')
minFireButton.onclick = destroyFireSource

const maxFireButton = document.querySelector('#maxFireButton')
maxFireButton.onclick = createFireSource

const increaseFireButton = document.querySelector('#increaseFireButton')
increaseFireButton.onclick = increaseFireSource

const decreaseFireButton = document.querySelector('#decreaseFireButton')
decreaseFireButton.onclick = decreaseFireSource

const toggleDebugModeButton = document.querySelector('#toggleDebugModeButton')
toggleDebugModeButton.onclick = toggleDebugMode

const firePixelsArray = []
let fireWidth = 40
let fireHeight = 40
let debug = false
const fireColorsPalette = [{ "r": 7, "g": 7, "b": 7 }, { "r": 31, "g": 7, "b": 7 }, { "r": 47, "g": 15, "b": 7 }, { "r": 71, "g": 15, "b": 7 }, { "r": 87, "g": 23, "b": 7 }, { "r": 103, "g": 31, "b": 7 }, { "r": 119, "g": 31, "b": 7 }, { "r": 143, "g": 39, "b": 7 }, { "r": 159, "g": 47, "b": 7 }, { "r": 175, "g": 63, "b": 7 }, { "r": 191, "g": 71, "b": 7 }, { "r": 199, "g": 71, "b": 7 }, { "r": 223, "g": 79, "b": 7 }, { "r": 223, "g": 87, "b": 7 }, { "r": 223, "g": 87, "b": 7 }, { "r": 215, "g": 95, "b": 7 }, { "r": 215, "g": 95, "b": 7 }, { "r": 215, "g": 103, "b": 15 }, { "r": 207, "g": 111, "b": 15 }, { "r": 207, "g": 119, "b": 15 }, { "r": 207, "g": 127, "b": 15 }, { "r": 207, "g": 135, "b": 23 }, { "r": 199, "g": 135, "b": 23 }, { "r": 199, "g": 143, "b": 23 }, { "r": 199, "g": 151, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 175, "b": 47 }, { "r": 183, "g": 175, "b": 47 }, { "r": 183, "g": 183, "b": 47 }, { "r": 183, "g": 183, "b": 55 }, { "r": 207, "g": 207, "b": 111 }, { "r": 223, "g": 223, "b": 159 }, { "r": 239, "g": 239, "b": 199 }, { "r": 255, "g": 255, "b": 255 }]

function start() {
  createFireDataStructure()
  createFireSource()
  renderFire()

  setInterval(calculateFirePropagation, 50)
}

function createFireDataStructure() {
  const numberOfPixels = fireWidth * fireHeight

  for (let i = 0; i < numberOfPixels; i++) {
    firePixelsArray[i] = 0
  }
}

function calculateFirePropagation() {
  for (let column = 0; column < fireWidth; column++) {
    for (let row = 0; row < fireHeight; row++) {
      const pixelIndex = column + (fireWidth * row)

      updateFireIntensityPerPixel(pixelIndex)
    }
  }

  renderFire()
}

function updateFireIntensityPerPixel(currentPixelIndex) {
  const belowPixelIndex = currentPixelIndex + fireWidth

  if (belowPixelIndex >= fireWidth * fireHeight) {
    return
  }

  const decay = Math.floor(Math.random() * 3)
  const belowPixelFireIntensity = firePixelsArray[belowPixelIndex]
  const newFireIntensity =
    belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0

  firePixelsArray[currentPixelIndex - decay] = newFireIntensity
}

function renderFire() {
  let html = '<table cellpadding=0 cellspacing=0>'

  for (let row = 0; row < fireHeight; row++) {
    html += '<tr>'

    for (let column = 0; column < fireWidth; column++) {
      const pixelIndex = column + (fireWidth * row)
      const fireIntensity = firePixelsArray[pixelIndex]
      const color = fireColorsPalette[fireIntensity]
      const colorString = `${color.r},${color.g},${color.b}`

      if (debug === true) {
        html += '<td>'
        html += `<div class="pixel-index">${pixelIndex}</div>`
        html += `<div style="color: rgb(${colorString})">${fireIntensity}</div>`
        html += '</td>'
      } else {
        html += `<td class="pixel" style="background-color: rgb(${colorString})">`
        html += '</td>'
      }

    }

    html += '</tr>'
  }

  html += '</table>'



  document.querySelector('#fireCanvas').innerHTML = html
}

function createFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight
    const pixelIndex = (overflowPixelIndex - fireWidth) + column

    firePixelsArray[pixelIndex] = 36

  }
}

function destroyFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight
    const pixelIndex = (overflowPixelIndex - fireWidth) + column

    firePixelsArray[pixelIndex] = 0
  }
}

function increaseFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight
    const pixelIndex = (overflowPixelIndex - fireWidth) + column
    const curretFireIntensity = firePixelsArray[pixelIndex]

    if (curretFireIntensity < 36) {
      const increase = Math.floor(Math.random() * 14)
      const newFireIntensity = curretFireIntensity + increase >= 36 ? 36 : curretFireIntensity + increase

      firePixelsArray[pixelIndex] = newFireIntensity
    }
  }
}

function decreaseFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight
    const pixelIndex = (overflowPixelIndex - fireWidth) + column
    const currentFireIntensity = firePixelsArray[pixelIndex]

    if (currentFireIntensity > 0) {
      const decay = Math.floor(Math.random() * 14)
      const newFireInsity = currentFireIntensity - decay >= 0 ? currentFireIntensity - decay : 0

      firePixelsArray[pixelIndex] = newFireInsity
    }
  }
}

function toggleDebugMode() {
  if (debug === false) {
    fireWidth = 25
    fireHeight = 17
    debug = true
  } else {
    fireWidth = 60
    fireHeight = 40
    debug = false
  }

  createFireDataStructure()
  createFireSource()
}

start()