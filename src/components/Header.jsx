import { Link } from "react-router-dom";
import logosva from "../assets/images/logosva.png"
export default function Header() {
  return (
    <div className="header">
      <div className="inner">
        <img src={logosva} alt="Logo"/>

        <div className="link-group">
          <div className="login-link link">
            <Link to="/login">Login</Link>
          </div>
          <div className="register-link link">
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}