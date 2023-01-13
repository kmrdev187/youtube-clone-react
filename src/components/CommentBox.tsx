import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

interface Props {
	authorImg: string;
	authorName: string;
	comment: string;
}

export default function CommentBox(props: Props) {
	const commentRef = useRef<HTMLSpanElement>(null);
	const [showMoreButton, setShowMoreButton] = useState(false);
	const [showMore, setShowMore] = useState(false);
    const [brokenImage, setBrokenImage] = useState(false);

	useEffect(() => {
		const refHeight = commentRef.current?.getBoundingClientRect().height;
		if (refHeight && refHeight >= 90) {
			setShowMoreButton(true);
		}
	}, []);

	return (
		<div className="flex items-start">
			<img
				className="min-w-[40px] w-10 h-10 rounded-full mr-4 object-cover border"
				src={brokenImage ? "https://img.icons8.com/ios-glyphs/512/user.png" : props.authorImg}
				alt={`${props.authorName} comment`}
                onError={() => setBrokenImage(true)}
			/>
			<div className="flex flex-col">
				<span className="font-medium">{props.authorName}</span>
				<span
					ref={commentRef}
					className={classNames(showMore ? "" : "line-clamp-4", "text-slate-500")}
					dangerouslySetInnerHTML={{ __html: props.comment }}
				></span>
				{showMoreButton && (
					<span
						onClick={() => setShowMore(!showMore)}
						className="mt-2 font-medium cursor-pointer"
					>
						{showMore ? "Less" : "More"}
					</span>
				)}
			</div>
		</div>
	);
}
