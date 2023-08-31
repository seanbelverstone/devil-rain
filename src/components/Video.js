
import React from 'react';
import PropTypes from 'prop-types';
import './css/Video.css';
import { isEmpty } from '../utils';

export const Video = props => (
	<div className={`${props.latest ? 'latestVideoItem' : 'videosItem'}`}>
		<div className={`${props.latest ? 'latestVideoImage' : 'videoImage'}`}>
			<a target="_blank" href={props.video.link} rel="noreferrer">
				{!isEmpty(props.video.guid) && <img src={`https://i4.ytimg.com/vi/${props.video.guid.split(':')[2]}/mqdefault.jpg`} />}
			</a>
		</div>
		<div className={`${props.latest ? 'latestVideoFooter' : 'videoFooter'}`}>
			<p className={`${props.latest ? 'latestVideoTitle' : 'videoTitle'}`}>{props.video.title}</p>
		</div>
	</div>
);

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