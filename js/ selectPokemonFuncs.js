const selectPokemon = (downBtn, upBtn) => {

    const pokemonDivSelected = document.querySelector('.selected')
    const pokemonDivSelectedNextElement = pokemonDivSelected.nextElementSibling
    const pokemonDivSelectedPrevElement = pokemonDivSelected.previousElementSibling

    if (upBtn && pokemonDivSelectedPrevElement) {

        pokemonDivSelectedPrevElement.classList.add('selected')
        pokemonDivSelected.classList.remove('selected')

        insertInfoInHTML(pokemonDivSelected.id - 1)

        if ( Number(pokemonDivSelected.id ) <= positionMoveBottom - 2) {
            panelScrollPosition-= 26
            positionMoveBottom-= 1

            panel.scrollTo(0, panelScrollPosition)
        }

    }

    if (downBtn && pokemonDivSelectedNextElement) {
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

const selectPokemonByClick = (event) => {
    Array.from(panel.children).forEach(div => div.classList.remove('selected'))

    const pokemonDiv = event.target.classList.contains('pokemon') ? event.target : event.target.parentElement

    pokemonDiv.classList.add('selected')
    
    insertInfoInHTML(pokemonDiv.id)
}