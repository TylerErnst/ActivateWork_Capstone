import { Link, useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

function Navbar({ user, setUser }) {
    const navigate = useNavigate();

    const logOut = async () => {
        try {
            await signOut(auth);
            setUser(null);
            navigate("/login");
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };

    return (
        <nav className="nav">
            <Link to="/" className="site-title">Home</Link>
            <ul>
                <li>
                    <Link to="/search/1">Add Items</Link>
                </li>
                <li>
                    <Link to="/netwealth/1">Net Wealth</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                {!user?.user && <li>
                    <Link to="/signup">SignUp</Link>
                </li>}
                {!user?.user && <li>
                    <Link to="/login">Login</Link>
                </li>}
                {user?.user && <li>
                    <span onClick={logOut}>Logout</span>
                </li>}
            </ul>
        </nav>
    );
}

export default Navbar;
