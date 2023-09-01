
import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from '../utils';
import './css/Video.css';

export const Video = props => {
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
					src="https://www.youtube.com/embed?listType=user_uploads&list=WeHateMovies"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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