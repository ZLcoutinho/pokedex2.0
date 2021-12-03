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