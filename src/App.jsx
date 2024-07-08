import { useState } from "react";
import TodoForm from "./components/TodoForm";
import List from "./components/List";
import ListItem from "./components/ListItem";

function App() {
  const [todoList, setTodoList] = useState([
    { isChecked: false, text: "eee" },
    { isChecked: false, text: "aaaa" },
    { isChecked: true, text: "bbbb" },
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
    <>
      <h1>TO-DO APP</h1>
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
    </>
  );
}

export default App;
