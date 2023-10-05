
import React from 'react';
import PropTypes from 'prop-types';
import './css/GigCard.css';

export const GigCard = props => {
	const { gig } = props;
	const { img, date, time, location, description } = gig;

	return (
		<div className="gigCard">
			<div className="firstBlock">
				<div className="dateWrapper">
					{date.split(' ').map((d, i) => (
						<div key={`${d}_${i}`} className={`date${i}`}>{d}</div>
					))}
				</div>
				<img src={img} />
				<div>{time}</div>
			</div>
			<div className="secondBlock">
				<div>Where {location}</div>
				<span className="description">{description}</span>
			</div>
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