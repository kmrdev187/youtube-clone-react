import React from "react";
import classNames from "classnames";

interface Props {
	children: React.ReactNode;
	type?: "button" | "submit" | "reset";
	cn?: string;
	fullWidth?: boolean;
	style?: "primary" | "secondary";
}

const defaultProps = {
	type: "button",
	fullWidth: false,
	style: "primary",
};

Button.defaultProps = defaultProps;

export default function Button(props: Props) {
	return (
		<button
			className={classNames(
				props.cn,
				props.fullWidth ? "w-full" : "w-max",
				"px-4 py-2 rounded-xl whitespace-nowrap flex items-center",
				props.style === "primary" &&
					"bg-gradient-to-tr from-blue-400 to-blue-500 text-white",
                props.style === "secondary" && "border border-blue-500 bg-blue-100 text-blue-500"
			)}
			type={props.type}
		>
			{props.children}
		</button>
	);
}
