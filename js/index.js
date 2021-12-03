const pokedex = document.querySelector('.pokedex')
const pokedex_container = document.querySelector('.pokedex-container')
const panel = document.querySelector('.panel')
const allDivPokemon = Array.from(document.querySelectorAll('.pokemon'))
const analogicControl = document.querySelector('.pokedex-inside__control-buttons__analogic')
let panelScrollPosition = 0
let positionMoveTop = 0
let positionMoveBottom = 3

window.addEventListener('resize', () => {
    if (window.outerWidth < 455) {
        panel.addEventListener('click', event => selectPokemonByClick(event))
    } 
})

if (window.outerWidth < 455) {
    panel.addEventListener('click', event => selectPokemonByClick(event))
}

analogicControl.addEventListener('click', ({target}) => selectPokemon(target.classList.contains('bottom'), target.classList.contains('top')))