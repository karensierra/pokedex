const characterContainer = document.getElementById('characters')
const urlApi = 'https://pokeapi.co/api/v2/pokemon/';

 for (let i = 1; i <= 151; i++) {
    fetch(urlApi + i)
    .then((response) => response.json())
    .then(data => mostrarPokemon (data))
 }

function mostrarPokemon(poke) {
    let abilities = poke.abilities.map(ability => 
        `<p>${ability.ability.name}</p>`);
        abilities = abilities.join('');


    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="Pokemon" width="120"/>
        </div>

        <div class="pokemon-info">
            <div class="nombre-contenedor">
            <p class="pokemon-id">#025</p>
            <h2 class="pokemon-nombre">${poke.name}</h2>
            <h3 class="pokemon-id">${poke.id}</h3>
            <p>Weight: ${poke.weight}</p>
            <p>Height: ${poke.height}</p>
            <p><b>Abilities:</b> ${abilities}</p>
        </div>
    `;
    characters.append(div);
}

/**
 <div class="pokemon">
            <div class="pokemon-imagen">
                <img src="https://yt3.googleusercontent.com/hw9hb_e7_vlGLbgior9CIWXOMx3jRfWRfOOVcambtVD83S-oxmuubq2gaOYvShRdCZykSQbSdg=s900-c-k-c0x00ffffff-no-rj" alt="Pokemon" width="120"/>
            </div>
            
            <div class="pokemon-info">
                <div class="nombre-contenedor">
                    <p class="pokemon-id">#025</p>
                    <h2 class="pokemon-nombre">Pikachu</h2>
                    <p>Abiliti</p>
                    <p>Weight: 5</p>
                    <p>Height: 3</p>
                </div>
            </div>
        </div>
 */


/**function displayChar(characters) {
    characters.forEach(character => {
        const characterDiv = document.createElement ('div')

        characterDiv.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.prites.other["official-artwork"].front_default}" alt="${character.name}" />>
        `;

        characterContainer.appendChild(characterDiv)
        
    });
}

fetch(urlApi)
.then(response => response.json)
.then(data => {
    const characters = data.results
    console.log(characters)
    displayChar(characters)
})**/