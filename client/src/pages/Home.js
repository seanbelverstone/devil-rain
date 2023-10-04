import React from 'react';
import imageOne from '../assets/imageOne.jpg';
import bandName from '../assets/bandName.png';
import './css/Home.css';

function Home() {
	return (
		<div className="homePage">
			<img src={imageOne} id="heroImage" alt=""/>
			<div id="nameBackground" />
			<img src={bandName} id="bandName" alt=""/>
		</div>
	);
}

export default Home;
