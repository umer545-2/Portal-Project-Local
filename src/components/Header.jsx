import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      {/* Replace the text "LOGO" with an image */}
      <img src="/path-to-your-logo.png" alt="Logo" style={{ height: '50px' }} />

      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </header>
  );
}