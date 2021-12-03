const getPokemons = (initialIndex, finalIndex) => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = []

    for (let i = initialIndex; i <= finalIndex; i++) {
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }

    Promise.all(pokemonPromises)
        .then(pokemons => {
            generatePokemonsInHTML(pokemons)
            insertInfoInHTML(pokemons)
        })
}


getPokemons(1, 100)
setTimeout(() => { getPokemons(101, 150) }, (1000 * 10))