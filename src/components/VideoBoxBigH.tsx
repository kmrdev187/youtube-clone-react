import { useNavigate } from "react-router-dom";

interface Props {
	videoId: string;
	thumbnailUrl: string;
	title: string;
	channelTitle: string;
    description: string
}

export default function VideoBoxBigH(props: Props) {
	const naviagte = useNavigate();

	return (
		<div
			onClick={() => {
                naviagte(`/watch?v=${props.videoId}`)
                // reload page
                naviagte(0)
            }}
			className="flex h-max cursor-pointer gap-x-6 w-full"
		>
			<img
				className="min-w-[360px] w-[360px] h-auto rounded-lg"
				src={props.thumbnailUrl}
				alt="video thumbnail"
			/>
			<div className="flex flex-col justify-start">
				<span title={props.title} className="line-clamp-2 font-medium text-xl">
					{props.title}
				</span>
				<span className="font-medium text-blue-400 my-2">
					{props.channelTitle}
				</span>
                <p className="line-clamp-3 text-slate-500">{props.description}</p>
			</div>
		</div>
	);
}
