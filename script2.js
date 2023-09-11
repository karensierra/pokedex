const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
const characters = document.getElementById('characters')
const url = 'https://pokeapi.co/api/v2/pokemon/';


function showError(msg){
    characters.innerHTML = `<p>${msg}</p>`;
}

async function buscarPokemon () {
    
    const pokemonText = searchInput.value.toLowerCase()

    try {
        const response = await fetch(url + pokemonText)
        

        if (!response.ok) {
            showError('No se encontró ningún pokemon llamado' + pokemonText);
            return;
        } 
        
        const data = await response.json();

        characters.innerHTML =
         `
         <div class="pokemon">
         <div class="pokemon-imagen">
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="Pokemon" width="120"/>
         </div>

         <div class="pokemon-info">
            <div class="nombre-contenedor">
            <p class="pokemon-id">#025</p>
            <h2 class="pokemon-nombre">${data.name}</h2>
            <h3 class="pokemon-id">${data.id}</h3>
            <p>Weight: ${data.weight}</p>
            <p>Height: ${data.height}</p>
         </div>
         </div>
         `;
        
    } catch (error) {
        console.error(error);
        showError('Ha ocurrido un error en la búsqueda')
    }
}

document.getElementById('search-button').addEventListener('click', buscarPokemon)




