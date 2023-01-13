import { Link, useNavigate } from "react-router-dom";

interface Props {
	videoId: string;
	thumbnailUrl: string;
	title: string;
	channelTitle: string;
	description: string;
	channelId: string;
}

export default function VideoBoxBigH(props: Props) {
	const naviagte = useNavigate();

	return (
		<div className="flex h-max gap-x-6 w-full">
			<img
				onClick={() => {
					naviagte(`/watch?v=${props.videoId}`);
					// reload page
					naviagte(0);
				}}
				className="min-w-[360px] w-[360px] h-auto rounded-lg cursor-pointer"
				src={props.thumbnailUrl}
				alt="video thumbnail"
			/>
			<div
				className="flex flex-col justify-start"
			>
				<span
					title={props.title}
					className="line-clamp-2 font-medium text-xl cursor-pointer"
                    onClick={() => {
                        naviagte(`/watch?v=${props.videoId}`);
                        // reload page
                        naviagte(0);
                    }}
				>
					{props.title}
				</span>
				<Link
					to={`/channel/${props.channelId}`}
					className="font-medium text-blue-400 my-2 cursor-pointer"
				>
					{props.channelTitle}
				</Link>
				<p className="line-clamp-3 text-slate-500">
					{props.description}
				</p>
			</div>
		</div>
	);
}
