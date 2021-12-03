pokedex_container.addEventListener('click', () => {
    if (window.innerWidth > 1024) {

        removeAndAddClass(pokedex.classList.contains('pokedex-open-desktop'), 'pokedex-open-desktop',
        'pokedex-close-desktop', pokedex)

        removeAndAddClass(pokedex_container.classList.contains('pokedex_container-open-desktop'), 
        'pokedex_container-open-desktop', 'pokedex_container-open-desktop', pokedex_container)

    } else {
        
        removeAndAddClass(pokedex.classList.contains('pokedex-open-tablet'), 'pokedex-open-tablet', 
        'pokedex-close-tablet', pokedex)

        removeAndAddClass(pokedex_container.classList.contains('pokedex_container-open-tablet'), 
        'pokedex_container-open-tablet', 'pokedex_container-close-tablet', pokedex_container)

    }
})

const removeAndAddClass = (conditional, classAdd, classRemove, div) => {

    if (conditional) {

        div.classList.remove(classAdd)
        div.classList.add(classRemove)

    } else {

        div.classList.remove(classRemove)
        div.classList.add(classAdd)

    }
}