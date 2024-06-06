import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="nav">
        <Link to="/" className="site-title">Home</Link>
        <ul>
            <li>
                <Link to="/ebay">Ebay</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;