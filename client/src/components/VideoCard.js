
import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from '../utils';
import './css/VideoCard.css';

export const VideoCard = props => {
	const { latest, video } = props;

	if (latest) {
		const text = video.title.replace(/(&quot;)/g,'"');
		const title = text.replace(/(&amp;)/g,'&');
		return (
			<div id="latestVideoWrapper">
				<iframe
					id="latestVideo"
					width="600"
					height="340"
					src={`https://www.youtube.com/embed/${video.guid.split(':')[2]}`}
					allow="accelerometer; autoplay=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen>
				</iframe>
				<p className="videoTitle">{title}</p>
			</div>
		);
	}
	return (
		<div className="videoItem">
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

VideoCard.propTypes = {
	video: PropTypes.object,
	latest: PropTypes.bool
};

VideoCard.defaultProps = {
	video: {
		link: '',
		guid: ''
	},
	latest: false
};