import React from 'react';
import bandLogo from '../assets/bandImages/bandLogo.jpg';
import './css/Home.css';

function Home() {
	return (
		<div className="homePage">
			<img src={bandLogo} id="bandLogo" alt="The logo for the band, Devil Rain. It's a white circle with two red droplets near the center. Below the droplets is the band name, with the text: Rock, blues and soul live music below it."/>
		</div>
	);
}

export default Home;
