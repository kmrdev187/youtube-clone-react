import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import ChannelPage from "../pages/Channel";
import HomePage from "../pages/Home";
import ResultsPage from "../pages/Results";
import WatchPage from "../pages/Watch";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<HomePage />}></Route>
            <Route path="watch" element={<WatchPage />}></Route>
            <Route path="results" element={<ResultsPage />}></Route>
            <Route path="channel/:id" element={<ChannelPage />}></Route>
		</>
	)
);
