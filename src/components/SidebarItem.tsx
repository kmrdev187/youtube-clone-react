import { Icon } from "@iconify/react";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface Props {
	expanded: boolean;
	icon: string;
	title: string;
	to: string;
}

export default function SidebarItem(props: Props) {
	return (
		<Link
			className={classNames(
				"flex items-center p-2 rounded-lg text-blue-500",
				!props.expanded && "justify-center"
			)}
			to={props.to}
		>
			<Icon icon={props.icon} className="text-2xl" />
			{props.expanded && <span className="ml-2">{props.title}</span>}
		</Link>
	);
}
