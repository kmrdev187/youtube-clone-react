import { useEffect, useState } from "react";
import VideoBox from "../components/VideoBox";
import LayoutDefault from "../layouts/Default";
import { search } from "../services/rapidapi";

function HomePage() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search("")
			.then((res) => {
				setVideos(res.data.items);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<LayoutDefault>
			<div className="flex flex-wrap justify-center gap-x-4 gap-y-6">
				{videos.map((video: any, index) => {
					return (
						<VideoBox
							key={index}
							title={video.snippet.title}
							channelTitle={video.snippet.channelTitle}
							thumbnailUrl={video.snippet.thumbnails.medium.url}
                            videoId={video.id.videoId}
                            channelId={video.snippet.channelId}
						/>
					);
				})}
			</div>
		</LayoutDefault>
	);
}

export default HomePage;
