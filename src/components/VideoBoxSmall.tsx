import { useNavigate } from "react-router-dom";

interface Props {
	videoId: string;
	thumbnailUrl: string;
	title: string;
	channelTitle: string;
}

export default function VideoBox(props: Props) {
	const naviagte = useNavigate();

	return (
		<div
			onClick={() => {
                naviagte(`/watch?v=${props.videoId}`)
                // reload page
                naviagte(0)
            }}
			className="flex h-max cursor-pointer gap-x-2 max-w-sm w-full"
		>
			<img
				className="w-[150px] h-auto rounded-lg"
				src={props.thumbnailUrl}
				alt="video thumbnail"
			/>
			<div className="flex flex-col justify-center">
				<span title={props.title} className="line-clamp-2">
					{props.title}
				</span>
				<span className="text-sm font-medium text-blue-400 my-2">
					{props.channelTitle}
				</span>
			</div>
		</div>
	);
}
