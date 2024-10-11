// src/hooks/useFetchRepos.js
import { useState } from "react";
import axios from "axios";

const useFetchRepos = () => {
	const [repos, setRepos] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const fetchRepos = async (username) => {
		setLoading(true);
		try {
			const response = await axios.get(`https://api.github.com/users/${username}/repos`);
			setRepos(response.data);
			console.log(response.data);
			setError("");
		} catch (err) {
			setError("Invalid GitHub username or failed request.", err);
		} finally {
			setLoading(false);
		}
	};

	return { repos, error, loading, fetchRepos };
};

export default useFetchRepos;
