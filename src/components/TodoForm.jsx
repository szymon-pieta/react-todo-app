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
        value={todoNote}
        onChange={(e) => setTodoNote(e.target.value)}
      />
      <button onClick={addNote}>Add</button>
    </div>
  );
}

export default TodoForm;
