import React from 'react';

import {getImage} from '../../assets/SupportFunctions';

import './modal.style.css'

const Modal = function({showModal, name, id, height, weight, abilities, types, items, onCloseClick}) {
	if (!showModal) {
		return null;
	}
		return (
		// Main Modal
			<div id="myModal"
				className="modal"
				onClick={onCloseClick}
        	>
				<div className="modal-content">
					<span className="close"
						  onClick={onCloseClick}
					>&times;</span>
					<div className="grid-container">
						<div className="char-name">
							{name.toUpperCase()}
						</div>
						<img src={getImage(id)} 
							 className="portrait"
							 alt={id} />
						<div className="stats">
							<u>Height</u>:&nbsp;  
							{height/10} m
						</div>
						<div className="stats">
							<u>Weight</u>:&nbsp; 
							{weight/10} Kg
						</div>
						<div className="stats">
							<u>Type</u>:&nbsp;  
							{types}
						</div>
						<div className="stats">
							<u>Abilities</u>:&nbsp;  
							{abilities}
						</div>
						<div className="stats">
							<u>Items</u>:&nbsp;  
							{items}
						</div>	
					</div>
				</div>
			</div>
		)			
}

export default Modal;