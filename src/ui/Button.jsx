import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  if (to) return <Link to={to}>{children}</Link>;

  return <button disabled={disabled}>{children}</button>;
}

export default Button;
