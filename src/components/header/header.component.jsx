import React from 'react';

import './header.style.css';

const Header = function() {
	return (
		// src={require("url")} is a sintax for importing image files straight into the code. It could also
		// be done by using the import method;
		<a href="#cardlist">
			<div className="cover-container">
				<img className="cover-image pt4" src={require("../../assets/logo.png")} alt="logo"/>
				<p className="pv4">Your Pokedex Guide</p>
			</div>
		</a>
	)
}

export default Header;