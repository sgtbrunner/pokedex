import React from 'react';

export const Header = function() {
	return (
		// src={require("url")} é a sintaxe para importar imagens locais dentro do código, sem usar import.
		<a href="#flex-container">
			<div className="cover-container">
				<img id ="cover-image" src={require("../../assets/img/logo.png")} alt="logo"/>
			</div>
		</a>
	)
}

export default Header;