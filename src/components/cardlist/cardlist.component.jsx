import React from 'react';
import Card from '../card/card.component';

import {getID} from '../../assets/SupportFunctions';

import './cardlist.style.css'


const CardList = function({pokemons, openModal}) {
		return (
			<div className='cardlist' id="cardlist">
				{
					pokemons.map((pokemon, index) => {
						return (
                            <Card name = {pokemon.name}
                                  id = {getID(index)} 
								  key = {getID(index)}
								  openModal = {openModal}
                            />
						)
					})
				}	          
			</div>
		)
}

export default CardList;