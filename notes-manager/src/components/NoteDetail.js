import React from "react";
import { useParams, Link } from "react-router-dom";

const NoteDetail = ({ notes }) => {
	const { id } = useParams();
	const note = notes.find((note) => note.id === parseInt(id));

	if (!note) {
		return <div>Note not found</div>;
	}

	return (
		<div className="p-4 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-4">{note.title}</h2>
			<p className="text-gray-700">{note.content}</p>
			<div className="text-center mt-6">
				<Link
					to="/"
					className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
				>
					Back to Notes
				</Link>
			</div>
		</div>
	);
};

export default NoteDetail;
