import { useState } from "react";
import TodoForm from "./components/TodoForm";
import List from "./components/List";
import ListElement from "./components/ListElement";

function App() {
  const [todoList, setTodoList] = useState(["el", "em", "ent"]);

  function addElementToDo(element) {
    setTodoList([...todoList, element]);
  }

  function removeElementFromToDo(index) {
    let list = todoList;
    console.log(index);
    list.splice(index, 1);
    setTodoList([...list]);
  }

  return (
    <>
      <h1>TO-DO APP</h1>
      <TodoForm onAddElement={addElementToDo} />
      <List>
        {todoList.map((el, i) => (
          <ListElement
            key={i}
            text={el}
            onRemoveElement={() => removeElementFromToDo(i)}
          />
        ))}
      </List>
    </>
  );
}

export default App;
