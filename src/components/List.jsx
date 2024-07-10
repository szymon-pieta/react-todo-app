function List({ children }) {
  // rounded-lg bg-neutral-900 p-8
  return <ul className="m-8 flex flex-col gap-4 text-xl">{children}</ul>;
}

export default List;
