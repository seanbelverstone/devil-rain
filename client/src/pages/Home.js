import React from 'react';
import axios from 'axios';
import imageOne from '../assets/imageOne.jpg';
import bandName from '../assets/bandName.png';
import './css/Home.css';

function Home() {

	const getArticles = () => {
		return axios.get('/all');
	};
	console.log(getArticles());
	return (
		<div className="homePage">
			<img src={imageOne} id="heroImage" alt=""/>
			<div id="nameBackground" />
			<img src={bandName} id="bandName" alt=""/>
		</div>
	);
}

export default Home;
