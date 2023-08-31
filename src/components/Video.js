
import React from 'react';
import PropTypes from 'prop-types';
import './css/Video.css';
import { isEmpty } from '../utils';

export const Video = props => {
	const { latest } = props;
	if (latest) {
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
			</div>
		);
	}
	return (
		<div className="videosItem">
			<div className="videoImage">
				<a target="_blank" href={props.video.link} rel="noreferrer">
					{!isEmpty(props.video.guid) && <img src={`https://i4.ytimg.com/vi/${props.video.guid.split(':')[2]}/mqdefault.jpg`} />}
				</a>
			</div>
			<div className="videoFooter">
				<p className="videoTitle">{props.video.title}</p>
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