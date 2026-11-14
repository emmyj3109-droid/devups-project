function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm text-[var(--secondary)] opacity-70">
          © {new Date().getFullYear()} Dev-Ups Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;