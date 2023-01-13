import { Icon } from "@iconify/react";
import { KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
	const navigate = useNavigate();
	const [query, setQuery] = useState("");

    function search() {
        if(query !== "") {
            navigate(
                `/results?search_query=${query.replaceAll(" ", "+")}`
            );
            // reload page
            navigate(0);
        }
    }

    function handleKeyDown(e: KeyboardEvent) {
        if(e.key === "Enter") {
            search()
        }
    }

	return (
		<label className="flex items-center border border-blue-500 rounded-xl px-4 py-2 w-full cursor-text">
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
				className="flex-1 outline-none"
				type="search"
				autoComplete="off"
				autoCorrect="false"
				placeholder="Search..."
			/>
			<Icon
				onClick={() => search}
				icon="mdi:magnify"
				className="text-2xl text-blue-500 cursor-pointer"
			/>
		</label>
	);
}
