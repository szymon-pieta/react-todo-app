function ListItem({ note, onRemoveNote, onCheckboxToggle }) {
  let noteText =
    note.text.length > 25 ? note.text.slice(25, -1) + "..." : note.text;

  return (
    <li className="grid w-96 grid-cols-auto items-center gap-4">
      <input
        type="checkbox"
        className="size-6"
        checked={note.isChecked}
        onChange={onCheckboxToggle}
      />
      <p className={note.isChecked ? "line-through opacity-60" : ""}>
        {noteText}
      </p>
      <button
        className="p-auto size-8 rounded-lg bg-red-800 text-sm font-bold"
        onClick={onRemoveNote}
      >
        X
      </button>
    </li>
  );
}

export default ListItem;
