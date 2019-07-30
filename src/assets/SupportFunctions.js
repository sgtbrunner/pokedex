// ** These functions support the main App and its Components dealing with
// API, its errors and inconsistencies.  

// VARIABLE DECLARATION
	// let pages = [];
	// let characters = [];
	
// FUN FUN FUNCTIONS
// Gets all the characters from different pages and concat them in a single array
export const getPokemons = async function(url) {
	try {
		const pokemons = await fetch(url);
		return await pokemons.json();
	} catch (err) {
	   	console.log('ooooooops', err);		
	}
}

export const getChar = function(index) {
	console.log(index);
	try {
		fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
		.then(response => response.json())
		.then(data => this.setState({clickedcard: data}))
	} catch(err) {
		console.log('oops', err);
	}
}

// Fetches all the character data information from API server and store it in pages as it's defined on SWAPI
// const getData = async function() {
// 	try {
// 		pages = await Promise.all(urls.map(async function(url) {
// 	        const response = await fetch(url);
// 	        return await response.json();
// 	    }));
// 	} catch (err) {
// 	   		console.log('ooooooops', err);	
// 	}
// }

// Function for concating information in an array
// const concatArray = (array) => {
// 	let people = [];
// 	let i;
// 	for( i=0 ; i<array.length ; i++ ) {
// 		people = people.concat(array[i].results);
// 	}
// 	return people;
// }

// ** Needed to fix the order which characters are displayed, repositioning Padmé Amidala and Ratts Tyerell in
// order to match the image database at https://starwars-visualguide.com/assets/img/characters/
// const fixOrder = async function(array) {
// 	characters.splice(33,0,array.pop());
// 	const ratts = characters[72];
// 	characters.splice(72,1);
// 	characters.splice(45,0,ratts);
// 	return await characters;
// }

// // ** This auxiliar function adds obj2 props into obj1 and returns obj1
// const augment = (obj1, obj2) => {
// 	let prop;
// 	for(prop in obj2) {
// 		if (obj2.hasOwnProperty(prop) && !obj1[prop]) {
// 			obj1[prop] = obj2[prop];
// 		}
// 	}
// 	return obj1;
// }

// ** This function adds ID property to every object without ID inside a given array of objects
// const addId = (array) => {
// 	array.map((item, index) => {
// 			const newprop = {id: index}
// 			return item = augment(item, newprop);
// 	})
// }

// const CreateList = async function() {
// 	let list = await getCharacters();
// 	list = await fixOrder(list);
// 	addId(list);
// 	return await list;
// }

// ** SWAPI has an issue handling https://swapi.co/api/people/17/ returnig error 404,
// 	which can be bypassed with the following function
export const getID = index => { return index < 807 ? index + 1 : index + 9194 }; 

export const getImage = id => { return id <10091 ? 
	`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
	:
	`https://cdn0.iconfinder.com/data/icons/avatar-profile/452/pikachu_pokemon_profile_avatar_people-512.png`
}

		// Used for fetching "species" and "homeworld" information from characters
// export const getStats = async function(url) {
// 		// SWAPI hasn't defined "species" nor "homeworld" for some characters, therefore it has to be handled accordingly
// 		if (url.toString()!=='' && url.toString()!==[] && url.toString()!=={}) {
// 			try {		
// 		        const response = await fetch(url);
// 		        return await response.json();
// 			} catch (err) {
// 		   		console.log('ooooooops', err);		
// 			}	
// 		} else {
// 			return await {"name": "unknown"};
// 		}
// 	}

	// Used for fetching "films" information from characters
// export const getFilms = async function(urls) {
// 		let movies = '';
// 		let i=0;
// 		try {
// 			for (i=0; i<urls.length; i++) {
// 				let response = await fetch(urls[i]);
// 				let movie = await response.json();
// 				if (i < urls.length-1) {
// 					movies += movie.title + ', ';
// 				} else {
// 					movies += movie.title;
// 				}
// 			} 
// 		} catch (err) {
// 		   		console.log('ooooooops', err);	
// 			}
// 		  	return movies;
// 	}

// export default CreateList;