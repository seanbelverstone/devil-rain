import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LoadingIcon } from '../components/LoadingIcon';
import { GigCard } from '../components/GigCard';
import './css/Gigs.css';
import Scrollbars from 'react-custom-scrollbars';

function Gigs() {
	const [loading, setLoading] = useState(true);
	const [gigList, setGigList] = useState([]);
	const [scrollPosition, setScrollPosition] = useState(0);
	
	const clearGigs = () => {
		return axios.delete('api/delete');
	};

	const setGigs = () => {
		return axios.get('api/scrape');
	};

	useEffect(() => {
		clearGigs();
		setGigs();
		setTimeout(() => {
			getGigs();
		}, 3000);
	}, []);

	const getGigs = async () => {
		setLoading(true);
		const res = await axios.get('/api/all');
		const sortedData = res.data.length > 0 ? res.data.sort(function(a, b) {
			return a.position - b.position;
		}) : [];
		console.log(res, sortedData);
		setGigList(sortedData);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};
	if (loading) {
		return (
			<div className="page" >
				<h1 className="title">Upcoming Gigs</h1>
				<LoadingIcon style={{ marginBottom: '2em' }}/>
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
				<Scrollbars
					style={{ width: '100%', height: 500 }}
					renderTrackHorizontal={props => <div {...props} className='track-horizontal'></div>}
					renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
					onScrollFrame={(values) => setScrollPosition(values.left)}
				>
					<div className="gigListWrapper">
						{gigList?.length > 0 && gigList?.map(gig => (<GigCard key={gig.position} gig={gig} />))}
						<div id="whitespace"></div>
					</div>
				</Scrollbars>
				<div id="leftFade" style={{ opacity: scrollPosition }}/>
				<div id="rightFade" style={{ opacity: 1 - scrollPosition }}/>
			</div>
		);
	}
}

export default Gigs;
