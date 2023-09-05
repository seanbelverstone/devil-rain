import React, { useState, useEffect } from 'react';
import { VideoCard } from '../components/VideoCard';
import './css/Videos.css';
import { isEmpty } from '../utils';
import { LoadingIcon } from '../components/LoadingIcon';

function Videos() {
	const [latestVideo, setLatestVideo] = useState({});
	const [videos, setVideos] = useState([]);
	const [callError, setCallError] = useState(false);
	const channelId = 'UCEQm0gqdGq7NfPQBVFOYipg';

	const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D';

	useEffect(() => {
		(async () => {
			try {
				const data = await fetch(`${baseUrl}${channelId}`).then(response => response.json());
				const latestVideo = data.items.shift();
				setLatestVideo(latestVideo);
				setVideos(data.items.slice(0, 4));
			} catch (error) {
				setCallError(true);
			}
		})();
	}, [channelId]);

	if (!isEmpty(videos) && !callError) {
		return (
			<div className="page">
				<h1 className="title">Latest Videos</h1>
				<div className="videosSection">
					<VideoCard video={latestVideo} latest />
					<div id="latestVideosSection">
						{videos.map(video => <VideoCard key={video.guid} video={video} />)}
					</div>
					<p className="moreVideosText">Please visit <a href="https://www.youtube.com" target="_blank" rel="noreferrer">Devil Rain on YouTube</a> for more videos</p>
				</div>
			</div>
		);
	} else if (isEmpty(videos) && !callError) {
		return (
			<div className="loadingSection">
				<h1 className="loadingMessage">Loading...</h1>
				<LoadingIcon />
			</div>
		);
	} else {
		return (
			<div className="page" style={{ flexDirection: 'column' }}>
				<h1>No videos to display</h1>
				<p>It looks like there was an issue getting the videos from YouTube. Please contact us via the <a href="/contact">Contact</a> page</p>
				<p className="moreVideosText">Please visit <a href="https://www.youtube.com" target="_blank" rel="noreferrer">Devil Rain on YouTube</a> for more videos</p>
			</div>
		);
	}
}
  
export default Videos;
  