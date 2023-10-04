import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Home.css';
import { LoadingIcon } from '../components/LoadingIcon';

function Gigs() {
	const [loading, setLoading] = useState(true);
	const [gigList, setGigList] = useState([]);
	useEffect(() => {
		getGigs();
	}, []);

	const getGigs = () => {
		setLoading(true);
		return axios.get('/api/scrape').then(res => {
			setGigList(res.data);
			setTimeout(() => {
				setLoading(false);
			}, 3000);
		});
	};
	if (loading) {
		return (
			<div className="page">
				<h1 className="title">Upcoming Gigs</h1>
				<LoadingIcon />
			</div>
		);
	}
	if (!loading && gigList.length === 0) {
		return (
			<div className="page">
				<h1 className="title">Upcoming Gigs</h1>
				<h2>No upcoming gigs</h2>
			</div>
		);
	} else {
		return (
			<div className="page">
				<h1 className="title">Upcoming Gigs</h1>
				{gigList.map(gig => (
					<div key={gig.position}>{gig.date}</div>
				))}
			</div>
		);
	}
}

export default Gigs;
