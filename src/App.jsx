// src/App.jsx
import { useState, useRef, useCallback } from "react";
import RepoList from "./components/RepoList";
import Stats from "./components/Stats";
import Error from "./components/Error";
import useFetchRepos from "./hooks/useFetchRepos";

function App() {
	const [username, setUsername] = useState("");
	const { repos, error, loading, fetchRepos, hasMore, setPage } = useFetchRepos();
	const observer = useRef();

	const handleGenerateClick = () => {
		if (username) {
			fetchRepos(username);
		}
	};

	const lastRepoElementRef = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPage((prevPage) => prevPage + 1);
				}
			});

			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	return (
		<div className="min-h-screen bg-f9fafb text-gray-900 flex items-center justify-center p-6">
			<div className="bg-white shadow-xl rounded-lg max-w-3xl w-full p-8 transition-all duration-300 ease-in-out hover:shadow-2xl">
				<h1 className="text-5xl font-bold text-center mb-8 text-orange-500">GitHub Timeline</h1>

				<div className="flex justify-center mb-8">
					<input
						type="text"
						className="border border-gray-300 p-3 w-full max-w-md rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-emerald-400"
						placeholder="Enter GitHub username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<button
						className="bg-orange-500 text-white px-6 py-2 ml-3 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-emerald-400 transition-all duration-300 ease-in-out"
						onClick={handleGenerateClick}
					>
						Generate
					</button>
				</div>

				{loading && <p className="text-center text-lg text-orange-500">Loading...</p>}
				{error && <Error message={error} />}
				{repos.length > 0 && (
					<>
						<RepoList
							repos={repos}
							lastRepoElementRef={lastRepoElementRef}
						/>
						<Stats repos={repos} />
					</>
				)}
			</div>
		</div>
	);
}

export default App;
