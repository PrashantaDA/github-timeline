// src/components/Error.jsx

const Error = ({ message }) => {
	return (
		<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4 text-center">
			<strong className="font-bold">Error: </strong>
			<span>{message}</span>
		</div>
	);
};

export default Error;
