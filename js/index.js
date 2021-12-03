const pokedex = document.querySelector('.pokedex')
const pokedex_container = document.querySelector('.pokedex-container')
const panel = document.querySelector('.panel')
const allDivPokemon = Array.from(document.querySelectorAll('.pokemon'))
const analogicControl = document.querySelector('.pokedex-inside__control-buttons__analogic')
let panelScrollPosition = 0
let positionMoveTop = 0
let positionMoveBottom = 3

const generatePokemonsInHTML = async (pokemons) => {
    const pokemonsHTML = await pokemons.map(pokemon => {
        if (pokemon.id === 1) {
                return `<div id=${pokemon.id} class="pokemon selected">
                            <figure class="arrow-select">
                                <img src="./img/Polygon 1.svg" alt="pokemon" title="Pokemon">
                            </figure>
                            <p class="pokemon-id">${pokemon.id}.</p>
                            <p class="pokemon-name">${pokemon.name}</p>
                        </div>`
            } else {
               return   `<div id=${pokemon.id} class="pokemon">
                            <figure class="arrow-select">
                                <img src="./img/Polygon 1.svg" alt="pokemon" title="Pokemon">
                            </figure>
                            <p class="pokemon-id">${pokemon.id}.</p>
                            <p class="pokemon-name">${pokemon.name}</p>
                        </div>`
            }
    })


    pokemonsHTML.forEach((pokemon) => panel.innerHTML += pokemon)
}

const insertInfoInHTML = async (pokemonID) => {
    const typeContainerP = document.querySelector('.pokedex-inside__screen-container__screen__type-container p')
    const typeContainerSpan = document.querySelector('.pokedex-inside__screen-container__screen__type-container span')
    const typeBackground = document.querySelector('.pokedex-inside__screen-container__screen__type-container')
    const pokemonIMG = document.querySelector('.pokemonIMG')
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    const pokemon = await response.json()

    typeBackground.setAttribute('class', `pokedex-inside__screen-container__screen__type-container ${pokemon.types[0].type.name}`)

    pokemonIMG.setAttribute('src', `./pokemonsImages/${pokemonID}.png`)

    if (pokemon.types.length === 1 ) {
        typeContainerP.innerHTML = 'Type: '
        typeContainerSpan.innerHTML = pokemon.types[0].type.name

    } else {
        typeContainerP.innerHTML = 'Types: '

        const types = pokemon.types.reduce((acc, item, index, arr) => 
            arr.length === (index + 1) ? acc + `${item.type.name} ` : acc + ` ${item.type.name} / `,
         ``)

        typeContainerSpan.innerHTML = types
    } 
}

pokedex_container.addEventListener('click', () => {
    if (window.innerWidth > 1024) {
        if ( pokedex.classList.contains('pokedex-open-desktop')) {

            pokedex.classList.remove('pokedex-open-desktop')
            pokedex.classList.add('pokedex-close-desktop')
    
        } else {
            pokedex.classList.remove('pokedex-close-desktop')
            pokedex.classList.add('pokedex-open-desktop')
        }
    } else {
        if ( pokedex.classList.contains('pokedex-open-tablet')) {

            pokedex.classList.remove('pokedex-open-tablet')
            pokedex.classList.add('pokedex-close-tablet')
    
        } else {
            pokedex.classList.remove('pokedex-close-tablet')
            pokedex.classList.add('pokedex-open-tablet')
        }
    }

    if (window.innerWidth > 1024) {
        if ( pokedex_container.classList.contains('pokedex_container-open-desktop')) {

            pokedex_container.classList.remove('pokedex_container-open-desktop')
            pokedex_container.classList.add('pokedex_container-close-desktop')
    
        } else {
            pokedex_container.classList.remove('pokedex_container-close-desktop')
            pokedex_container.classList.add('pokedex_container-open-desktop')
        }
    } else {
        if ( pokedex_container.classList.contains('pokedex_container-open-tablet')) {

            pokedex_container.classList.remove('pokedex_container-open-tablet')
            pokedex_container.classList.add('pokedex_container-close-tablet')
    
        } else {
            pokedex_container.classList.remove('pokedex_container-close-tablet')
            pokedex_container.classList.add('pokedex_container-open-tablet')
        }
    }
    
})

const selectPokemonByClick = (event) => {
    Array.from(panel.children).forEach(div => div.classList.remove('selected'))

    const pokemonDiv = event.target.classList.contains('pokemon') ? event.target : event.target.parentElement

    pokemonDiv.classList.add('selected')
     console.log(pokemonDiv)
    insertInfoInHTML(pokemonDiv.id)
 }

window.addEventListener('resize', () => {
    if (window.outerWidth < 455) {
        panel.addEventListener('click', event => selectPokemonByClick(event))
    } 
})

if (window.outerWidth < 455) {
    panel.addEventListener('click', event => selectPokemonByClick(event))
}

analogicControl.addEventListener('click', ({target}) => selectPokemon(target.classList.contains('bottom'), target.classList.contains('top')))

const selectPokemon = (bottomBtn, topBtn) => {
    const clickBottomBtn = bottomBtn
    const clickTopBtn = topBtn

    const pokemonDivSelected = document.querySelector('.selected')
    const pokemonDivSelectedNextElement = pokemonDivSelected.nextElementSibling
    const pokemonDivSelectedPrevElement = pokemonDivSelected.previousElementSibling

    if (clickTopBtn && pokemonDivSelectedPrevElement) {

        pokemonDivSelectedPrevElement.classList.add('selected')
        pokemonDivSelected.classList.remove('selected')

        insertInfoInHTML(pokemonDivSelected.id - 1)

        if ( Number(pokemonDivSelected.id ) <= positionMoveBottom - 2) {
            panelScrollPosition-= 26
            positionMoveBottom-= 1

            panel.scrollTo(0, panelScrollPosition)
        }

    }

    if (clickBottomBtn && pokemonDivSelectedNextElement) {
        pokemonDivSelectedNextElement.classList.add('selected')
        pokemonDivSelected.classList.remove('selected')
        insertInfoInHTML(Number(pokemonDivSelected.id) + 1)
        
        if ( Number(pokemonDivSelected.id ) >= positionMoveBottom ) {
            panelScrollPosition+= 26

            positionMoveBottom+= 1
            
            panel.scrollTo(0, panelScrollPosition)
        }
        
    }


}