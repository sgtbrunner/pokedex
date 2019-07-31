import React from 'react';

import './header.style.css';

const Header = function() {
	return (
		// src={require("url")} is a sintax for importing image files straight into the code. It could also
		// be done by using the import method;
		<a href="#pokedex">
			<div className="cover-container pt4">
				<img className="cover-image mt3" src={require("../../assets/logo.png")} alt="logo"/>
				<p className="">Pokedex: Your Pokemon Guide</p>
			</div>
		</a>
	)
}

export default Header;