import { Link, useNavigate } from "react-router-dom"

interface Props {
    videoId: string,
    thumbnailUrl: string,
    title: string,
    channelTitle: string,
    channelId: string
}

export default function VideoBox(props: Props) {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col w-[220px] h-max cursor-pointer">
            <img onClick={() => navigate(`/watch?v=${props.videoId}`)} className="w-full h-auto rounded-lg" src={props.thumbnailUrl} alt="video thumbnail" />
            <Link to={`/channel/${props.channelId}`} className="text-sm font-medium text-blue-400 my-2">{props.channelTitle}</Link>
            <span onClick={() => navigate(`/watch?v=${props.videoId}`)} title={props.title} className="line-clamp-2">{props.title}</span>
        </div>
    )
}