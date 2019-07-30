import React from 'react';
import './card.style.css';

import {getImage} from '../../assets/SupportFunctions'

const Card = function({name, id, openModal}) {
	return (
			<div onClick={openModal}>
				<div className='card br3 pa1 ma2 bw2 shadow-5 bg-light-green'
					 id={id}
				>
					<img className ="picture"
						src={getImage(id)} 
						alt="pokemon-portrait"
						id={id}
					/>
					<div className="title"
						id={id}
					>{name.toUpperCase()}
					</div>
				</div>				
			</div>
	)
}

export default Card;