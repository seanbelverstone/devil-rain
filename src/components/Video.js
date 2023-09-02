
import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from '../utils';
import './css/Video.css';

export const Video = props => {
	const { latest, video } = props;

	const enterHover = (e) => {
		e.target.style = 'animation: videoEnter 0.3s forwards ease-in-out;';
	};

	const exitHover = (e) => {
		e.target.style = 'animation: videoLeave 0.3s forwards ease-in-out;';
	};

	if (latest) {
		const text = video.title.replace(/(&quot;)/g,'"');
		const title = text.replace(/(&amp;)/g,'&');
		return (
			<div id="latestVideoWrapper">
				<iframe
					id="latestVideo"
					width="600"
					height="340"
					src="https://www.youtube.com/embed?listType=user_uploads&list=WeHateMovies"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen>
				</iframe>
				<p className="videoTitle">{title}</p>
			</div>
		);
	}
	return (
		<div className="videoItem" onMouseEnter={enterHover} onMouseLeave={exitHover}>
			<div className="videoImage">
				<a target="_blank" href={video.link} rel="noreferrer">
					{!isEmpty(video.guid) && <img src={`https://i4.ytimg.com/vi/${video.guid.split(':')[2]}/mqdefault.jpg`} />}
				</a>
			</div>
			<div className="videoFooter">
				<p className="videoTitle">{video.title}</p>
			</div>
		</div>
	);
};

Video.propTypes = {
	video: PropTypes.object,
	latest: PropTypes.bool
};

Video.defaultProps = {
	video: {
		link: '',
		guid: ''
	},
	latest: false
};