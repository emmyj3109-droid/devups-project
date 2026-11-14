function Card({ children, className = "" }) {
  return (
    <div
      className={`w-full min-w-0 bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;