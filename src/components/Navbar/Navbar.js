import "./Navbar.scss";
import { Link } from 'react-router-dom';

const Navbar = () => {
    <header>
        <div className="links__container">
            <Link className="links__links" to={"/"}>My Insights</Link>
            <Link className="links__links" to={"/"}>My Community</Link>
        </div>
    </header>
}

export default Navbar;