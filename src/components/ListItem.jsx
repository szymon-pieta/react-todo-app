function ListItem({ note, onRemoveNote, onCheckboxToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={note.isChecked}
        onChange={onCheckboxToggle}
      />
      {note.text}
      <button onClick={onRemoveNote}>X</button>
    </li>
  );
}

export default ListItem;
