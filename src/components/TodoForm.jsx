import { useState } from "react";

function TodoForm({ onAddNote }) {
  const [todoNote, setTodoNote] = useState();

  function addNote() {
    if (!todoNote) {
      return;
    }
    onAddNote(todoNote);
    setTodoNote("");
  }

  return (
    <div>
      <input
        type="text"
        className="m-4 border-2 border-gray-300 text-xl"
        value={todoNote}
        onChange={(e) => setTodoNote(e.target.value)}
      />
      <button
        className="m-2 rounded-md bg-lime-700 px-3 py-1 text-xl font-bold uppercase"
        onClick={addNote}
      >
        Add note
      </button>
    </div>
  );
}

export default TodoForm;
