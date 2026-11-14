function Button({ children, onClick, variant = "primary" }) {
  const baseStyle =
    "px-5 py-2.5 rounded-lg font-medium transition duration-200";

  const variants = {
  primary: "bg-[var(--primary)] text-white hover:opacity-90",
  secondary: "bg-[var(--secondary)] text-white hover:opacity-90",
};

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;