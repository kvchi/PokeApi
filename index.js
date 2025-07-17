//  how to use fetch function in making http requests to geet resources.


// METHOD 1
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//       .then(response => {

//         if (!response.ok) {
//             throw new Error("Could not fetch resource")
//         }
//         return response.json();

//       })
//       .then(data => console.log(data))
//       .catch(error => console.log(error));

// METHOD 2: USING ASYNC AWAIT

async function fetchPokemon(){
    try {

            const pokemonName = document.getElementById("pokemonName").value.toLowerCase();



        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
                throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";


    }
    catch(error){
        console.error(error);
    
    }
}

fetchPokemon();