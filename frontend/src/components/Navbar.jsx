

function Navbar() {
  return (
    <nav className="nav">
        <a href="/" className="site-title">Home</a>
        <ul>
            <li>
                <a href="/ebay">Ebay</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;