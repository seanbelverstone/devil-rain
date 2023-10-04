import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Home.css';

function Gigs() {
	const [gigList, setGigList] = useState([]);
	useEffect(() => {
		getGigs();
	}, []);

	const getGigs = () => {
		return axios.get('/api/scrape').then(res => {
			res.data.length > 0 && setGigList(res.data);
		});
	};
	return (
		<div className="page">
			<h1 className="title">Upcoming Gigs</h1>
			{gigList.length > 0 
				? gigList.map(gig => (
					<div key={gig.position}>{gig.date}</div>
				)) : (<h2>No upcoming gigs</h2>)}
		</div>
	);
}

export default Gigs;
