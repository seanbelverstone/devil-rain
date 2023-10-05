
import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../assets/defaultImage.jpg';
import './css/GigCard.css';
import { isEmpty } from '../utils';

export const GigCard = props => {
	const { gig } = props;
	const { img, date, time, location, description, type } = gig;

	return (
		<div className="gigCard">
			<div className="dateWrapper">
				{date.split(' ').map((d, i) => (
					<div key={`${d}_${i}`} className={`date${i}`}>{d}</div>
				))}
			</div>
			<div className="gigTime">{time}</div>
			<div className="locationWrapper">
				{location.split(',').map((loc, i) => {
					const queryParams = `${loc.split(' ').join('+')}+${location.split(', ')[1]}`;
					// query params will be sent like The+Crooklets+Inn+Bude
					if (i === 0 && loc !== 'Private Function') {
						return (
							<a
								key={`${loc}_${i}`}
								className={`location${i} link`}
								href={`https://maps.google.com/maps?q=${queryParams}`}
								target="_blank"
								rel="noreferrer"
							>
								{`${loc}, `}
							</a>
						);
					}
					return (<span key={`${loc}_${i}`} className={`location${i}`}>{loc}</span>);
				})}
			</div>
			<img className="gigImage" src={img === 'https://www.lemonrock.com/gx/1x1ph.png' ? defaultImage : img} />
			<span className="description">{!isEmpty(description) ? description : 'Check back for details!'}</span>
			<span className="type" style={{ color: type === 'Private' ? 'grey' : 'var(--accent)'}}>{type}</span>
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
		description: '',
		type: ''
	}
};