import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import NoteDetail from "./components/NoteDetail";
import NoteEdit from "./components/NoteEdit"; 

function App() {
	const [notes, setNotes] = useState([]);

	// Fetch notes from backend API
	useEffect(() => {
		fetch("http://18.156.79.159:5001/api/notes")
			.then((response) => response.json())
			.then((data) => setNotes(data))
			.catch((error) => console.error("Error fetching notes:", error));
	}, []);

	// Function to add a note through the backend API
	const addNote = async (note) => {
		try {
			const response = await fetch("http://18.156.79.159:5001/api/notes", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(note),
			});
			const newNote = await response.json();
			setNotes([...notes, newNote]);
		} catch (error) {
			console.error("Error adding note:", error);
		}
	};

	// Function to delete a note
	const deleteNote = async (id) => {
		try {
			await fetch(`http://http://18.156.79.159:5001/api/notes/${id}`, {
				method: "DELETE",
			});
			setNotes(notes.filter((note) => note._id !== id));
		} catch (error) {
			console.error("Error deleting note:", error);
		}
	};

	// Function to update a note
	const updateNote = async (id, updatedNote) => {
		try {
			const response = await fetch(
				`http://http://18.156.79.159:5001/api/notes/${id}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(updatedNote),
				}
			);
			const updated = await response.json();
			setNotes(notes.map((note) => (note._id === id ? updated : note)));
		} catch (error) {
			console.error("Error updating note:", error);
		}
	};

	return (
		<Router>
			<div className="bg-gray-100 min-h-screen p-4">
				<div className="container mx-auto">
					<Routes>
						<Route
							path="/"
							element={<NoteList notes={notes} deleteNote={deleteNote} />}
						/>
						<Route path="/add" element={<NoteForm addNote={addNote} />} />
						<Route
							path="/notes/:id"
							element={<NoteDetail notes={notes} deleteNote={deleteNote} />}
						/>
						<Route
							path="/notes/:id/edit"
							element={<NoteEdit notes={notes} updateNote={updateNote} />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
