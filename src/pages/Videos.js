import React, { useState, useEffect } from 'react';
import { VideoCard } from '../components/VideoCard';
import './css/Videos.css';
import { isEmpty } from '../utils';
import { LoadingIcon } from '../components/LoadingIcon';

function Videos() {
	const [latestVideo, setLatestVideo] = useState({});
	const [videos, setVideos] = useState([]);
	const channelId = 'UCEQm0gqdGq7NfPQBVFOYipg';

	const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D';

	useEffect(() => {
		(async () => {
			try {
				const data = await fetch(`${baseUrl}${channelId}`).then(response => response.json());
				const latestVideo = data.items.shift();
				setLatestVideo(latestVideo);
				setVideos(data.items);
			} catch (error) {
				console.log(error);
				// add error handling here, display an alert
			}
		})();
	}, [channelId]);

	return (
		!isEmpty(videos) ? (
			<div className="page">
				<h1 className="title">Latest Videos</h1>
				<div className="videosSection">
					<VideoCard video={latestVideo} latest />
					<div id="latestVideosSection">
						{videos.map(video => <VideoCard key={video.guid} video={video} />)}
					</div>
				</div>
			</div>
		) : (
			<div className="loadingSection">
				<h1 className="loadingMessage">Loading...</h1>
				<LoadingIcon />
			</div>
		)

	);
}
  
export default Videos;
  