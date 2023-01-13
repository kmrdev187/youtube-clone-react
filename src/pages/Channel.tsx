import classNames from "classnames";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoBox from "../components/VideoBox";
import LayoutDefault from "../layouts/Default";
import { getChannelDetails, getChannelVideos } from "../services/rapidapi";

export default function ChannelPage() {
	const params = useParams();
	const [details, setDetails] = useState<any>({});
	const [videos, setVideos] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (params.id) {
			getChannelDetails(params.id.toString())
				.then((res) => {
					setDetails(res.data.items[0]);
					setLoaded(true);
				})
				.catch((err) => {
					console.log(err);
				});

			getChannelVideos(params.id.toString())
				.then((res) => {
					setVideos(res.data.items);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);

	return (
		<LayoutDefault>
			{loaded && (
				<div>
					<div
						style={{
							backgroundImage: `url(${details.brandingSettings.image.bannerExternalUrl})`,
						}}
						className={classNames(
							"w-full h-[calc((100vw-240px)/6.2-1px)] bg-center bg-no-repeat bg-[length:100%_auto]"
						)}
					></div>
					<div className="flex items-center mt-4">
						<img
							className="w-20 h-20 rounded-full"
							src={details.snippet.thumbnails.medium.url}
							alt="channel thumbnail"
						/>
						<div className="flex flex-col ml-4">
							<h1 className="text-2xl">
								{details.snippet.title}
							</h1>
							<span>{details.snippet.customUrl}</span>
						</div>
					</div>
					<h2>Channel' videos</h2>
					<div className="flex flex-wrap justify-center gap-4 mt-4">
						{videos.map((video: any, index) => {
							return (
								<VideoBox
									key={index}
									title={video.snippet.title}
									channelTitle={video.snippet.channelTitle}
									thumbnailUrl={
										video.snippet.thumbnails.medium.url
									}
									videoId={video.id.videoId}
									channelId={video.snippet.channelId}
								/>
							);
						})}
					</div>
				</div>
			)}
		</LayoutDefault>
	);
}
