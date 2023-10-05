
import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../assets/defaultImage.jpg';
import './css/GigCard.css';

export const GigCard = props => {
	const { gig } = props;
	const { img, date, time, location, description } = gig;

	return (
		<div className="gigCard">
			<div className="dateWrapper">
				{date.split(' ').map((d, i) => (
					<div key={`${d}_${i}`} className={`date${i}`}>{d}</div>
				))}
			</div>
			<div className="gigTime">{time}</div>
			<div className="locationWrapper">
				{location.split(',').map((loc, i) => (
					<span key={`${loc}_${i}`} className={`location${i}`}>{loc}{i === 0 ? ', ' : ''}</span>
				))}
			</div>
			<img className="gigImage" src={img === 'https://www.lemonrock.com/gx/1x1ph.png' ? defaultImage : img} />
			<span className="description">{description}</span>
		</div>
	);
};

GigCard.propTypes = {
	gig: PropTypes.object
};

GigCard.defaultProps = {
	gig: {
		position: 0,
		img: '',
		date: '',
		time: '',
		location: '',
		description: ''
	}
};