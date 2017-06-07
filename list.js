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
}

pokemonForm.addEventListener('submit', handleSubmit)


function renderListItem(label, value){
    const item = document.createElement('li')
    item.innerHTML = `<strong>${value}</strong>`

    return item
}

function renderList(pokemonData) {
    const list = document.createElement('ul')
    // const lst = [Bulbasaur,Ivysaur,Venusaur,
    // Charmander,Charmeleon,Charizard,Squirtle,Wartortle,
    // Blastoise,Caterpie,Metapod,Pikachu,Mew]
    Object.keys(pokemonData).map(function(label){
        const item = renderListItem(label, pokemonData[label])
        list.appendChild(item)
    }) 

    return list
}

const list = document.querySelector('li')
 function del(item){
 	item.preventDefault()
 	const f = item.target
    const deleteButton = document.createElement('button')
    
     list.remove()
 }

list.addEventListener('click', del)
