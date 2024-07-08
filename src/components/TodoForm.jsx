import { useState } from "react";

function TodoForm({ onAddElement }) {
  const [todoElement, setTodoElement] = useState();

  function addElement() {
    if (!todoElement) {
      return;
    }
    onAddElement(todoElement);
    setTodoElement("");
  }

  return (
    <div>
      <input
        type="text"
        value={todoElement}
        onChange={(e) => setTodoElement(e.target.value)}
      />
      <button onClick={addElement}>Add</button>
    </div>
  );
}

export default TodoForm;
