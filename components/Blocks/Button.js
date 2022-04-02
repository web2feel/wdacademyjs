function Button({ children, classes = "" }) {
  return (
    <button
      className={`rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold duration-300 transform-gpu ${classes}`}>
      {children}
    </button>
  );
}

export default Button;
