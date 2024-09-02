import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import NoteDetail from './components/NoteDetail';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    const newNote = {
      id: notes.length + 1,
      ...note
    };
    setNotes([...notes, newNote]);
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<NoteList notes={notes} />} />
            <Route path="/add" element={<NoteForm addNote={addNote} />} />
            <Route path="/notes/:id" element={<NoteDetail notes={notes} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
