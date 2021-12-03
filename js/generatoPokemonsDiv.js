const generatePokemonsDiv = async (pokemons) => {
    const pokemonsHTML = await pokemons.map(({id, name}) => {
        if (id === 1) {
                return `<div id=${id} class="pokemon selected">
                            <figure class="arrow-select">
                                <img src="./img/Polygon 1.svg" alt="pokemon" title="Pokemon">
                            </figure>
                            <p class="pokemon-id">${id}.</p>
                            <p class="pokemon-name">${name}</p>
                        </div>`
            } else {
               return   `<div id=${id} class="pokemon">
                            <figure class="arrow-select">
                                <img src="./img/Polygon 1.svg" alt="pokemon" title="Pokemon">
                            </figure>
                            <p class="pokemon-id">${id}.</p>
                            <p class="pokemon-name">${name}</p>
                        </div>`
            }
    })


    pokemonsHTML.forEach((pokemon) => panel.innerHTML += pokemon)
}