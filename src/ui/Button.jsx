// import { Link } from "react-router-dom";

// function Button({ children, disabled, to, type }) {
//   if (to) return <Link to={to}>{children}</Link>;

//   return <button disabled={disabled}>{children}</button>;
// }

// export default Button;

function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="duration-400  inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold
    uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring
     focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"
    >
      {children}
    </button>
  );
}

export default Button;
