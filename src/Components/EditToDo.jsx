import React, { useState } from 'react';

const EditToDo = ({ todo, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    onUpdate(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="border p-1 rounded w-full mr-2"
        />
      ) : (
        <span className="text-gray-800">{todo.text}</span>
      )}

      {isEditing ? (
        <button
          onClick={handleSave}
          className="ml-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="ml-2 bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default EditToDo;
