import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const NoteEdit = ({ notes, updateNote }) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const noteToEdit = notes.find((note) => note._id === id);

	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	useEffect(() => {
		if (noteToEdit) {
			setNote({
				title: noteToEdit.title,
				content: noteToEdit.content,
			});
		}
	}, [noteToEdit]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNote({ ...note, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateNote(id, note);
		navigate("/");
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<input
				type="text"
				name="title"
				placeholder="Title"
				value={note.title}
				onChange={handleChange}
				className="w-full p-2 border border-gray-300 rounded"
				required
			/>
			<textarea
				name="content"
				placeholder="Content"
				value={note.content}
				onChange={handleChange}
				className="w-full p-2 border border-gray-300 rounded"
				required
			/>
			<button
				type="submit"
				className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-700"
			>
				Update Note
			</button>
		</form>
	);
};

export default NoteEdit;
