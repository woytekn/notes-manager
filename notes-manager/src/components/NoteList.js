import React from "react";
import { Link } from "react-router-dom";

const NoteList = ({ notes }) => {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4 text-center">Your Notes</h2>
			<ul className="space-y-4">
				{notes.map((note) => (
					<li key={note._id} className="p-4 bg-white rounded-lg shadow-md">
						<Link
							to={`/notes/${note._id}`}
							className="text-blue-500 hover:underline"
						>
							{note.title}
						</Link>
					</li>
				))}
			</ul>
			<div className="text-center mt-6">
				<Link
					to="/add"
					className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
				>
					Add a new note
				</Link>
			</div>
		</div>
	);
};

export default NoteList;
