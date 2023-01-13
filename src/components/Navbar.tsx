import Button from "./Button";
import Search from "./Search";
import {Icon} from '@iconify/react'
import { Link } from "react-router-dom";

interface Props {
    onMenuClick: () => void;
}


function Navbar(props: Props) {
    return (
        <nav className="flex items-center justify-between w-full py-2 px-4">
            <button onClick={() => props.onMenuClick()}>
                <Icon className="text-blue-500 text-3xl" icon="mdi:menu" />
            </button>
            <div className="max-w-[600px] w-full mx-auto">
                <Search />
            </div>
        </nav>
    )
}

export default Navbar;