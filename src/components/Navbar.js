import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
	useEffect(() => {
		setHighlight();
	}, [window.location.pathname]);


	const setHighlight = () => {
		console.log(window.location.pathname);
	};

	return (
		<div className="navbar">
			<NavLink className="navlinks" to="/">
				<span className="material-symbols-outlined navicon" id="homeIcon">home</span>
			</NavLink>
			<NavLink className="navlinks" to="/videos">
				<span className="material-symbols-outlined navicon" id="videoIcon">movie</span>
			</NavLink>
			<NavLink className="navlinks" to="/contact">
				<span className="material-symbols-outlined navicon" id="contactIcon">mail</span>
			</NavLink>
			<NavLink className="navlinks" to="/merch">
				<span className="material-symbols-outlined navicon" id="merchIcon">shopping_cart</span>
			</NavLink>
		</div>
	);
}
  
export default Navbar;
  