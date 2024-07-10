import { useState } from "react";
import TodoForm from "./components/TodoForm";
import List from "./components/List";
import ListItem from "./components/ListItem";

function App() {
  const [todoList, setTodoList] = useState([
    { isChecked: false, text: "Make coffee" },
    { isChecked: false, text: "Learn Tailwind CSS" },
    { isChecked: true, text: "Create todo app" },
  ]);

  function addNote(element) {
    setTodoList([...todoList, { isChecked: false, text: element }]);
  }

  function removeNote(index) {
    let list = todoList;
    console.log(index);
    list.splice(index, 1);
    setTodoList([...list]);
  }

  function toggleNoteCheck(index) {
    let list = todoList;
    list[index].isChecked = !list[index].isChecked;
    setTodoList([...list]);
  }

  return (
    <div className="flex h-screen flex-col items-center">
      <h1 className="m-8 text-6xl font-bold">TO-DO APP</h1>
      <TodoForm onAddNote={addNote} />
      <List>
        {todoList.map((el, i) => (
          <ListItem
            key={i}
            note={el}
            onRemoveNote={() => removeNote(i)}
            onCheckboxToggle={() => toggleNoteCheck(i)}
          />
        ))}
      </List>
    </div>
  );
}

export default App;
