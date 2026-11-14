function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

        {/* Academy Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white font-bold">
            D
          </div>

          <span className="text-base sm:text-xl font-bold text-[var(--secondary)] whitespace-nowrap">
            Dev-Ups Academy
          </span>
        </div>

        {/* Profile and Logout */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold">
            S
          </div>

          <button className="text-sm font-medium text-[var(--secondary)] hover:text-[var(--primary)]">
            Logout
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;