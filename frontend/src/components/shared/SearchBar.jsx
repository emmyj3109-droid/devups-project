
function SearchBar({
  value,
  onChange,
  placeholder = 'Search...',
}) {
  return (
    <div className="relative w-full">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        🔍
      </span>

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/10"
      />
    </div>
  );
}

export default SearchBar;
