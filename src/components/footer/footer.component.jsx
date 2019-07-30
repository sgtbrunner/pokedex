import React from 'react';

const Footer = () => {
    return (
        <footer className="pa2 ph5-m ph6-l tc bg-near-black">
            <div>
                <p className="f5 db tc lightest-blue">All content & design © Pokémon Database, 2008-2019. Pokémon images & names © 1995-2019 Nintendo/Game Freak.</p>
            </div>
		    <small className="pa2 f6 db tc lightest-blue">
		    	<b className="ttu">GUILHERME BRUNNER</b> © 2019, All Rights Reserved
		    </small>
		    <small className="pa2">
		    	<a href="https://sgtbrunner.github.io/"
		       	   rel="noopener noreferrer"
		       	   target="_blank">
		    		<div className="f6 dib ph2 link lightest-blue dim">Visit my <b>PORTFOLIO</b></div>
		   		</a>
		   	</small>
		</footer>
    )
}

export default Footer;