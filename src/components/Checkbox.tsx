import classNames from "classnames"

interface Props {
    checked?: boolean,
    onChange?: React.ChangeEventHandler,
    cn?: string,
    label?: string,
    name?: string
}

export default function Checkbox(props: Props) {
    return (
        <label className={classNames(props.cn, "flex items-center")}>
            <input
                className="relative appearance-none outline-none w-6 h-6 border border-blue-400 rounded-lg checked:after:absolute checked:after:content-[''] checked:after:w-5 checked:after:h-5 checked:after:bg-blue-500 checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:rounded-md"
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
                name={props.name}
            />
            <span className="ml-2">{props.label}</span>
        </label>
    )
}