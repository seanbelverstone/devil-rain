import React from 'react';
import imageOne from '../assets/bandImages/imageOne.jpg';
import bandName from '../assets/bandImages/bandName.png';
import './css/Home.css';

function Home() {
	return (
		<div className="homePage">
			<img src={imageOne} id="imageOne" alt=""/>
			<div id="nameBackground" />
			<img src={bandName} id="bandName" alt=""/>
		</div>
	);
}

export default Home;
