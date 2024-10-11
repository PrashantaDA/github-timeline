// src/utils/helpers.js

// Function to tally repos by the year they were created
export const getRepoSummary = (repos) => {
	const summary = {};
	repos.forEach((repo) => {
		const year = new Date(repo.created_at).getFullYear();
		summary[year] = (summary[year] || 0) + 1;
	});
	return summary;
};
