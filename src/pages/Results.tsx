//@ts-nocheck

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import VideoBoxBigH from "../components/VideoBoxBigH";
import LayoutDefault from "../layouts/Default";
import { search } from "../services/rapidapi";

export default function ResultsPage() {

    const query = useSearchParams()[0].get("search_query");

    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(query!.toString()).then((res) => {
            setVideos(res.data.items)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <LayoutDefault>
			<div className="flex flex-col items-center gap-y-6 max-w-6xl mx-auto">
                <div className="flex flex-col my-6 text-xl w-full">
                    <div className="gap-x-2 mb-4">
                        <span>Results for: </span>
                        <span>{query}</span>
                    </div>
                    <span className="block w-full h-[1px] bg-slate-400"></span>
                </div>
				{videos.filter(video => video.id.kind === "youtube#video").map((video, index) => {
					return (
						<VideoBoxBigH
							key={index}
							title={video.snippet.title}
							channelTitle={video.snippet.channelTitle}
							thumbnailUrl={video.snippet.thumbnails.medium.url}
                            videoId={video.id.videoId}
                            channelId={video.snippet.channelId}
                            description={video.snippet.description}
						/>
					);
				})}
			</div>
        </LayoutDefault>
    )
}