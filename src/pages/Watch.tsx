//@ts-nocheck
import { Icon } from "@iconify/react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";
import CommentBox from "../components/CommentBox";
import VideoBox from "../components/VideoBoxSmall";
import LayoutDefault from "../layouts/Default";
import {
	getSuggestedVideos,
	getVideo,
	getVideoComments,
} from "../services/rapidapi";

export default function WatchPage() {
    const videoId = useSearchParams()[0].get("v");
    
    const [videoDetailes, setVideoDetailes] = useState([]);
	const [captionVideos, setCaptionVideos] = useState([]);
	const [showDescription, setShowDescription] = useState(false);
	const [comments, setComments] = useState([]);
	const [commentsDisabled, setCommentsDisabled] = useState(false);
	const [playing, setPlaying] = useState(true);
    
	useEffect(() => {
		getVideo(videoId!.toString())
			.then((res) => {
				setVideoDetailes(res.data.items);
			})
			.catch((err) => {
				console.log(err);
			});

		getSuggestedVideos(videoId)
			.then((videos) => {
				setCaptionVideos(videos.data.items);
			})
			.catch((err) => {
				console.log(err);
			});

		getVideoComments(videoId)
			.then((comments) => {
				if (comments.data.error) {
					setCommentsDisabled(true);
				} else {
					setComments(comments.data.items);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<LayoutDefault>
			<div className="flex gap-x-6">
				<div className="flex-1">
					<div className="aspect-video">
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${videoId}`}
							controls
							width="100%"
							height="100%"
							playing
							muted={playing}
							onPlay={() => {
								setPlaying(false);
							}}
						/>
					</div>
					{videoDetailes.map((video, index) => {
						return (
							<div key={index}>
								{/* Video details */}
								<h1 className="text-blue-400 font-medium text-xl my-2">
									{video.snippet.title}
								</h1>
								<span className="font-medium">
									{video.snippet.channelTitle}
								</span>
								<a
									className="flex items-center my-2"
									target="_blank"
									rel="noreferrer noopener"
									href={`https://www.youtube.com/watch?v=${videoId}`}
								>
									<Icon
										icon="mdi:youtube"
										className="text-2xl mr-2 text-red-500"
									/>
									Watch on YouTube
								</a>
								{/* Description */}
								<div
									onClick={() =>
										setShowDescription(!showDescription)
									}
									className="p-2 bg-blue-100 rounded-xl"
								>
									<p
										className={classNames(
											showDescription
												? ""
												: "line-clamp-2"
										)}
									>
										{video.snippet.description}
									</p>
								</div>
								{/* Comments */}
								<h2 className="font-medium text-lg mb-4 mt-8">
									Comments
								</h2>
								{!commentsDisabled && (
									<div className="flex flex-col gap-y-4">
										{comments.map((comment, index) => {
											return (
												<CommentBox
													key={index}
													authorImg={
														comment.snippet
															.topLevelComment
															.snippet
															.authorProfileImageUrl
													}
													authorName={
														comment.snippet
															.topLevelComment
															.snippet
															.authorDisplayName
													}
													comment={
														comment.snippet
															.topLevelComment
															.snippet.textDisplay
													}
												/>
											);
										})}
									</div>
								)}
								{commentsDisabled && (
									<h3 className="text-center font-medium">
										Comments are disabled!
									</h3>
								)}
							</div>
						);
					})}
				</div>
				<div className="flex flex-col gap-y-4">
					{captionVideos.map((video, index) => {
						return (
							<VideoBox
								key={index}
								videoId={video.id.videoId}
								title={video.snippet.title}
								channelTitle={video.snippet.channelTitle}
								thumbnailUrl={
									video.snippet.thumbnails.medium.url
								}
							/>
						);
					})}
				</div>
			</div>
		</LayoutDefault>
	);
}
