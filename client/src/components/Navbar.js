import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import facebookIcon from '../assets/facebookLogo.png';
import bandLogo from '../assets/bandLogo.jpg';
import bandName from '../assets/bandName.png';
import './css/Navbar.css';
import { useWindowSize } from '../utils';

function Navbar() {
	const [mobileView, setMobileView] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();
	const windowSize = useWindowSize();
	const ref = useRef();

	useEffect(() => {
		setHighlight();
	}, [location.pathname]);

	useEffect(() => {
		setMobileView(windowSize.width < 702);
	}, [windowSize.width]);

	useEffect(() => {
		const checkIfClickedOutside = e => {
			if (menuOpen && ref.current && !ref.current.contains(e.target)) {
				setMenuOpen(false);
			}
		};
		document.addEventListener('mousedown', checkIfClickedOutside);

		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, [menuOpen]);

	const setHighlight = () => {
		Array.from(document.getElementsByClassName('navicon')).forEach(item => item.classList.remove('active'));
		const iconId = location.pathname === '/' ? 'home' : location.pathname.split('/')[1];
		const icon = document.getElementById(iconId);
		icon && icon.classList.add('active');
	};

	

	return (
		<div className="navbar" style={{ ...(mobileView ? { gap: 0 } : {})}}>

			{!mobileView ? (
				<>
					<div id="navNameContainer">
						<img src={bandLogo} id="bandLogo" alt=""/>
						<div id="navNameBackground">
							<img src={bandName} id="navName" alt=""/>
						</div>
					</div>
					<div id="navlinkContainer">
						<NavLink className="navlinks" to="/">
							<span className="material-symbols-outlined navicon" id="home">home</span>
						</NavLink>
						<NavLink className="navlinks" to="/about">
							<span className="material-symbols-outlined navicon" id="about">info</span>
						</NavLink>
						<NavLink className="navlinks" to="/gigs">
							<span className="material-symbols-outlined navicon" id="home">music_note</span>
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
						<img src={facebookIcon} alt="The Facebook icon" id="facebookIcon" />
					</a>
				</>
			) : (
				<>
					{menuOpen ? (
						// Hamburger turns to X when menu is open
						<div
							className={`hamburgerMenu${menuOpen ? ' slideOut' : ' slideIn'}`}
							ref={ref}
						>
							<div
								className={`container${menuOpen ? ' change' : ''}`}
								onClick={() => setMenuOpen(!menuOpen)}
								style={{
									...(menuOpen ? {
										// transform: 'translateX(32vw)',
										zIndex: 15
									} : {}) }}
							>
								<div className="bar1"></div>
								<div className="bar2"></div>
								<div className="bar3"></div>
							</div>
							<div id="hamburgerNavLinkContainer">
								<NavLink className="navlinks" to="/">
									<span className="material-symbols-outlined navicon" id="home">home</span>
									<h3>Home</h3>
								</NavLink>
								<NavLink className="navlinks" to="/about">
									<span className="material-symbols-outlined navicon" id="about">info</span>
									<h3>About Us</h3>
								</NavLink>
								<NavLink className="navlinks" to="/gigs">
									<span className="material-symbols-outlined navicon" id="gigs">music_note</span>
									<h3>Gigs</h3>
								</NavLink>
								<NavLink className="navlinks" to="/videos">
									<span className="material-symbols-outlined navicon" id="videos">movie</span>
									<h3>Videos</h3>
								</NavLink>
								<NavLink className="navlinks" to="/contact">
									<span className="material-symbols-outlined navicon" id="contact">mail</span>
									<h3>Contact</h3>
								</NavLink>
								<NavLink className="navlinks" to="/merch">
									<span className="material-symbols-outlined navicon" id="merch">shopping_cart</span>
									<h3>Merch</h3>
								</NavLink>
							</div>
						</div>
					) : (
						// Closed menu, hamburger is lines
						<div
							className={`container${menuOpen ? ' change' : ''}`}
							onClick={() => setMenuOpen(!menuOpen)}
							style={{
								...(menuOpen ? {
									transform: 'translateX(40vw)',
									zIndex: 15
								} : {}) }}
						>
							<div className="bar1"></div>
							<div className="bar2"></div>
							<div className="bar3"></div>
						</div>
					)}
					<div id="navNameContainer" style={{ justifyContent: 'flex-end' }}>
						<img src={bandLogo} id="bandLogo" alt="" />
						<div id="navNameBackground">
							<img src={bandName} id="navName" alt="" />
						</div>
					</div>
				</>
			)}
		</div>
	);
}
  
export default Navbar;
  