import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Home.css';
import { LoadingIcon } from '../components/LoadingIcon';

function Gigs() {
	const [loading, setLoading] = useState(true);
	const [gigList, setGigList] = useState([]);
	useEffect(() => {
		clearGigs();
		getGigs();
	}, []);

	// function sortByPosition(a, b) {
	// 	if (a.position < b.positon) {
	// 		return -1;
	// 	} else if (a.position > b.position) {
	// 		return 1;
	// 	}
	// 	return 0;
	// }

	const clearGigs = () => {
		return axios.delete('api/delete');
	};

	const getGigs = () => {
		setLoading(true);
		return axios.get('/api/scrape').then(res => {
			// const sortedData = res.data.length > 0 && res.data.sort(sortByPosition);
			// console.log(sortedData);
			console.log(res);
			setGigList(res.data);
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
				{gigList.map(gig => (
					<div key={gig.position}>
						
					</div>
				))}
			</div>
		);
	}
}

export default Gigs;
