import classNames from "classnames";
import SidebarItem from "./SidebarItem";

interface Props {
	expanded: boolean;
}

const defaultProps = {
	expanded: false,
};

Sidebar.defaultProps = defaultProps;

export default function Sidebar(props: Props) {

	return (
		<aside
			className={classNames(
				props.expanded ? "max-w-[200px]" : "max-w-[60px]",
				"flex flex-col h-full w-full px-2 gap-y-2"
			)}
		>
			<SidebarItem
				expanded={props.expanded}
				icon="mdi:home"
				title="Home"
                to="/"
			/>
			<SidebarItem
				expanded={props.expanded}
				icon="mdi:code-braces"
				title="React"
                to="/results?search_query=react"
			/>
			<SidebarItem
				expanded={props.expanded}
				icon="mdi:code-braces"
				title="RapidAPI YouTube"
                to="/results?search_query=rapidapi+youtube"
			/>
		</aside>
	);
}
