const pokemonForm = document.querySelector('#pokemonForm')

function handleSubmit(ev) {
	ev.preventDefault()
	const f = ev.target
	const details = document.querySelector('#details')
    const pokemon = {
        name: f.pokemonName.value,
    }

    const list = renderList(pokemon)
    details.prepend(renderList(pokemon))
    //details.appendChild(list)
}

pokemonForm.addEventListener('submit', handleSubmit)

// function renderColor(color){
//     const div = document.createElement('div')
//     div.style.backgroundColor = color
//     div.style.width = '100px'
//     div.style.height = '50px'

//     return div
// }

function renderListItem(label, value){
    const item = document.createElement('li')
    item.innerHTML = `<strong>${value}</strong>`

    return item
}

function renderList(pokemonData) {
    const list = document.createElement('ul')
    Object.keys(pokemonData).map(function(label){
        const item = renderListItem(label, pokemonData[label])
        list.appendChild(item)
        
    }) 

  
    // const parent=document.createElement("div")
    // const span = document.createElement("span")
    // parent.appendChild(item)
    // parent.prepend(span)

    return list
}
