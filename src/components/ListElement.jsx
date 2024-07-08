function ListElement({ text, onRemoveElement }) {
  return (
    <li>
      {text}
      <button onClick={onRemoveElement}>X</button>
    </li>
  );
}

export default ListElement;
