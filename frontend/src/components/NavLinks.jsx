function NavLinks() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-6 sm:gap-8 overflow-x-auto whitespace-nowrap">

  <button className="py-3 sm:py-4 text-[var(--primary)] font-semibold border-b-2 border-[var(--primary)] whitespace-nowrap">
    Materials
  </button>

        <button className="py-3 sm:py-4 text-[var(--secondary)] font-medium hover:text-[var(--primary)] whitespace-nowrap">
          Class Link
        </button>

        <button className="py-3 sm:py-4 text-[var(--secondary)] font-medium hover:text-[var(--primary)] whitespace-nowrap">
          Assignments
        </button>

        <button className="py-3 sm:py-4 text-[var(--secondary)] font-medium hover:text-[var(--primary)] whitespace-nowrap">
          Quiz
        </button>

      </div>
    </nav>
  );
}

export default NavLinks;