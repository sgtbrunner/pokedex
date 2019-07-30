import React from 'react';
import Card from '../card/card.component';

import {getID} from '../../assets/SupportFunctions';

import './cardlist.style.css'


const CardList = function({pokemons}) {
		return (
			<div className='cardlist mh5'>
				{
					pokemons.map((pokemon, index) => {
						return (
                            <Card name = {pokemon.name}
                                  id = {getID(index)} 
                                  key = {getID(index)}
                            />
						)
					})
				}	          
			</div>
		)
}

export default CardList;