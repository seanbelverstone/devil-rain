/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Video } from '../components/Video';
import './css/Videos.css';
import { isEmpty } from '../utils';

function Videos() {
	const [latestVideo, setLatestVideo] = useState({});
	const [videos, setVideos] = useState([]);
	const channelId = 'UCEQm0gqdGq7NfPQBVFOYipg';
	// RSS - https://www.youtube.com/feeds/videos.xml?channel_id=UCEQm0gqdGq7NfPQBVFOYipg

	const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D';

	useEffect(() => {
		(async () => {
			try {
				const data = await fetch(`${baseUrl}${channelId}`).then(response => response.json());
				const latestVideo = data.items.shift();
				console.log('latestVideo', latestVideo);
				console.log(data.items);
				setLatestVideo(latestVideo);
				setVideos(data.items);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [channelId]);

	return (
		<div id="videosPage">
			<h1 className="title">Latest Videos</h1>
			<div id="latestVideosSection">
				{!isEmpty(latestVideo) && <Video key={latestVideo.guid} video={latestVideo} latest />}
				{videos.map(video => <Video key={video.guid} video={video} />)}
			</div>
		</div>
	);
}
  
export default Videos;
  