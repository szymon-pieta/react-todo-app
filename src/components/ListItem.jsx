function ListItem({ note, onRemoveNote, onCheckboxToggle }) {
  let noteText =
    note.text.length > 24 ? note.text.slice(0, 21) + "..." : note.text;

  return (
    <li className="grid w-96 grid-cols-auto items-center gap-4">
      <input
        type="checkbox"
        className="size-6 bg-gray-100"
        checked={note.isChecked}
        onChange={onCheckboxToggle}
      />
      <p className={note.isChecked ? "line-through opacity-60" : ""}>
        {noteText}
      </p>
      <button
        className="p-auto size-8 rounded-lg bg-red-700 text-sm font-bold text-gray-100 shadow-md hover:translate-y-px hover:bg-red-800"
        onClick={onRemoveNote}
      >
        X
      </button>
    </li>
  );
}

export default ListItem;
