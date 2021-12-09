// https://baconipsum.com/api/?type=meat-and-filler

void async function modal() {
  const modal = document.querySelector(".modal")
  const cards = modal.querySelector(".cards")
  const startButton = modal.querySelector(".bt-start")
  const addonsRoot = `addons`
  const reqAddonsList = await fetch(`${addonsRoot}/list.json`)
  const addonsList = await reqAddonsList.json()

  let cardsInnerHTML = ``

  await Promise.all(
    addonsList.map(async addonPath => {
      const addonInfoFile = `${addonsRoot}/${addonPath}`
      const addonInfoDir = addonInfoFile.substring(0, addonInfoFile.lastIndexOf("/"))
      const reqAddonInfo = await fetch(addonInfoFile)
      if (reqAddonInfo.status != 200)
        throw `Arquivo de informação de Addon não encontrado ${addonInfoFile}`
      const addonInfo = await reqAddonInfo.json()
      cardsInnerHTML += `
        <div class="card" data-src="${addonInfoDir}/${addonInfo["entry-point"]}">
          <div class="creator">
            ${addonInfo.author}
          </div>
          <div class="description">
            ${addonInfo.description}
          </div>
        </div>
      `
    })
  )

  cards.innerHTML = cardsInnerHTML
  
  cards.addEventListener("click", ev => {
    const card = ev.target.closest(".card")
    if (!card) return
    card.classList.toggle("selected")
  })

  startButton.addEventListener("click", ev => {
    const selectedAddonCards = cards.querySelectorAll(".card.selected")
    if (selectedAddonCards.length <= 0) {
      alert("ESSA MENSAGEM DEVERIA SER MELHOR MAS: vc não pode começar sem selecionar ao menos um ADDON")
      return 
    }
    selectedAddonCards.forEach(async card => {
      const addon = await import(`${location.protocol}/${location.host}/${card.dataset.src}`)
      addon.default()
    })
    modal.classList.toggle("visible")
  })
}();