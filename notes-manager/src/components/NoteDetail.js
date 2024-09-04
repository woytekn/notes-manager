import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const NoteDetail = ({ notes, deleteNote }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((note) => note._id === id);

  if (!note) {
    return <div>Note not found</div>;
  }

  const handleDelete = () => {
    deleteNote(note._id);
    navigate('/');
  };

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
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-700 ml-4"
        >
          Delete
        </button>
        <Link
          to={`/notes/${note._id}/edit`}
          className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-700 ml-4"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default NoteDetail;
