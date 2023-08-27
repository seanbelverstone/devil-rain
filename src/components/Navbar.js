import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import facebookIcon from '../assets/facebookLogo.png';
import './css/Navbar.css';

function Navbar() {
	const location = useLocation();
	useEffect(() => {
		setHighlight();
	}, [location.pathname]);


	const setHighlight = () => {
		Array.from(document.getElementsByClassName('navicon')).forEach(item => item.classList.remove('active'));
		const iconId = location.pathname === '/' ? 'home' : location.pathname.split('/')[1];
		const icon = document.getElementById(iconId);
		icon && icon.classList.add('active');
	};

	return (
		<>
			<div className="navbar">
				<NavLink className="navlinks" to="/">
					<span className="material-symbols-outlined navicon" id="home" alt="home">home</span>
				</NavLink>
				<NavLink className="navlinks" to="/videos">
					<span className="material-symbols-outlined navicon" id="videos">movie</span>
				</NavLink>
				<NavLink className="navlinks" to="/contact">
					<span className="material-symbols-outlined navicon" id="contact">mail</span>
				</NavLink>
				<NavLink className="navlinks" to="/merch">
					<span className="material-symbols-outlined navicon" id="merch">shopping_cart</span>
				</NavLink>
			</div>
			<a href="https://www.facebook.com/groups/544578629743391" target="_blank" rel="noreferrer">
				<img src={facebookIcon} alt="The Facebook icon" id="facebookIcon"/>
			</a>
		</>
	);
}
  
export default Navbar;
  