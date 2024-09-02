import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note);
    navigate('/');
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
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-700">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
