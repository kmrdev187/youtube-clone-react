import React from "react";
import classNames from "classnames";
import { Icon } from "@iconify/react";

interface Props {
	value?: string;
	onChange?: React.ChangeEventHandler;
	type?: React.HTMLInputTypeAttribute;
	name?: string;
	cn?: string;
	autocomplete?: string;
	placeholder?: string;
	icon?: string;
}

const defaultProps = {
	type: "text",
	autocomplete: "off",
	placeholder: "Placeholder",
};

Textfield.defaultProps = defaultProps;

export default function Textfield(props: Props) {
	return (
		<label
			className={classNames(
				props.cn,
				"flex items-center px-4 py-2 bg-blue-100 border border-blue-300 focus-within:border-blue-400 rounded-xl cursor-text"
			)}
		>
			<input
				className="flex-1 outline-none bg-transparent placeholder:text-blue-300 text-blue-500"
				value={props.value}
				onChange={props.onChange}
				placeholder={props.placeholder}
				type={props.type}
				name={props.name}
				autoComplete={props.autocomplete}
			/>
			{props.icon && (
				<Icon icon={props.icon} className="text-2xl text-blue-400" />
			)}
		</label>
	);
}
