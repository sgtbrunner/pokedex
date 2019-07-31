// ** These functions support the main App and its Components dealing with PokéAPI.
	
// FUN FUN FUNCTIONS
// Gets all pokemons from PokeAPI in a single array;
export const getPokemons = async function(url) {
	try {
		const pokemons = await fetch(url);
		return await pokemons.json();
	} catch (err) {
	   	console.log('ooooooops', err);		
	}
}

// ** Gets pokemons IDs in relation to position on Pokemon array
export const getID = index => { return index < 807 ? index + 1 : index + 9194 };

// ** Gets profile image for every pokemon, even those who don't have one.
export const getImage = id => { return id <10091 ? 
	`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
	:
	`https://cdn0.iconfinder.com/data/icons/avatar-profile/452/pikachu_pokemon_profile_avatar_people-512.png`
}
