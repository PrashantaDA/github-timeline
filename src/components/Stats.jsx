// src/components/Stats.jsx
import { getRepoSummary } from "../utils/helpers";

const Stats = ({ repos }) => {
	const summary = getRepoSummary(repos);

	return (
		<div className="mt-8">
			<h2 className="text-3xl font-bold text-orange-500 mb-4">Repository Summary by Year</h2>
			<div className="bg-gray-100 p-4 rounded-lg shadow-md">
				{Object.entries(summary).map(([year, count]) => (
					<p
						key={year}
						className="text-lg font-semibold text-gray-700"
					>
						{year}: {count} {count > 1 ? "repositories" : "repository"}
					</p>
				))}
			</div>
		</div>
	);
};

export default Stats;
