import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Home.css';
import { LoadingIcon } from '../components/LoadingIcon';
import { GigCard } from '../components/GigCard';

function Gigs() {
	const [loading, setLoading] = useState(true);
	const [gigList, setGigList] = useState([]);
	useEffect(() => {
		clearGigs();
		getGigs();
	}, []);

	const clearGigs = () => {
		return axios.delete('api/delete');
	};

	const getGigs = () => {
		setLoading(true);
		return axios.get('/api/scrape').then(res => {
			const sortedData = res.data.length > 0 && res.data.sort(function(a, b) {
				return a.position - b.position;
			});
			setGigList(sortedData);
			setTimeout(() => {
				setLoading(false);
			}, 2000);
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
				{gigList.map(gig => (<GigCard key={gig.position} gig={gig} />
				))}
			</div>
		);
	}
}

export default Gigs;
