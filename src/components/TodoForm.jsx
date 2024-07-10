import { useState } from "react";

function TodoForm({ onAddNote }) {
  const [todoNote, setTodoNote] = useState();

  function addNote() {
    if (!todoNote.trim()) {
      return;
    }
    onAddNote(todoNote);
    setTodoNote("");
  }

  return (
    <div>
      <input
        type="text"
        className="m-4 border-2 border-gray-800 bg-gray-100 text-xl transition hover:scale-105"
        value={todoNote}
        onChange={(e) => setTodoNote(e.target.value)}
      />
      <button
        className="m-2 rounded-md bg-lime-500 px-3 py-1 text-xl font-bold uppercase text-gray-100 shadow-md transition hover:bg-lime-600"
        onClick={addNote}
      >
        Add note
      </button>
    </div>
  );
}

export default TodoForm;
