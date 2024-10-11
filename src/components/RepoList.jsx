// src/components/RepoList.jsx

const RepoList = ({ repos, lastRepoElementRef }) => {
	const sortedRepos = repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

	return (
		<div className="mt-6">
			<h2 className="text-3xl font-bold text-orange-500 mb-4">Repository Timeline</h2>
			<div className="timeline">
				{sortedRepos.map((repo, index) => {
					const isLastElement = sortedRepos.length === index + 1;
					return (
						<div
							ref={isLastElement ? lastRepoElementRef : null}
							key={repo.id}
							className="timeline-item mb-6 border-l-4 border-emerald-500 pl-4 relative transition-transform duration-300 ease-in-out hover:scale-105"
						>
							<div className="bg-white p-4 rounded-lg shadow-lg hover:bg-gray-50 transition duration-300 ease-in-out">
								<h3 className="text-xl font-semibold text-orange-600">{repo.name}</h3>
								<p className="text-sm text-gray-500 mb-2">Created: {new Date(repo.created_at).toLocaleDateString()}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RepoList;
