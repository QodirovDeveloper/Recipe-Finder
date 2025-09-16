export default function Input({ onChange }) {
  return (
    <div className="flex items-center border-2 border-neutral-900/20 focus:border-neutral-900 focus-within:ring-2  rounded-lg px-2 py-2 w-fit bg-white font-sans ">
      <span className="mr-2">
        <img
          src="./images/icon-search.svg"
          alt="icon-search"
          className="w-5 h-5"
        />
      </span>
      <input
        type="text"
        placeholder="Search by name or ingredient..."
        onChange={(e) => onChange(e.target.value)}
        className="w-48 bg-transparent border-none outline-none text-neutral-900 text-sm placeholder:text-neutral-600 placeholder:opacity-80"
      />
    </div>
  );
}
