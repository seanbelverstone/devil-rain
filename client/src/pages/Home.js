import React from 'react';
import imageOne from '../assets/imageOne.jpg';
import bandName from '../assets/bandNameEdit.png';
import bandNameBackground from '../assets/bandNameBackground.png';
import bandLogo from '../assets/bandLogo.jpg';
import './css/Home.css';

function Home() {
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
