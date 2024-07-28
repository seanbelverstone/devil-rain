import React, { useState, useEffect } from 'react';
import imageOne from '../assets/imageOne.jpg';
import bandName from '../assets/bandNameEdit.png';
import bandNameBackground from '../assets/bandNameBackground.png';
import bandLogo from '../assets/bandLogo.jpg';
import './css/Home.css';

function Home() {
	const [screenWidth, setScreenWidth] = useState(0);

	useEffect(() => {
		console.log(screenWidth);
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
	});

	return (
		<div className="homePage">
			<img src={imageOne} id="heroImage" alt=""/>
			<div id="bandNameSection" style={{ display: 'flex', flexDirection: 'row' }}>
				<img src={bandNameBackground} className="bandNameBackground" alt=""/>
				<img src={bandName} id="bandName" alt="" />
				<img src={bandNameBackground} className="bandNameBackground" alt=""/>
			</div>
			<div id="logoSection">
				<img src={bandLogo} className="homePageLogo" />
			</div>
		</div>
	);
}

export default Home;
