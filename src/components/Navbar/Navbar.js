import "./Navbar.scss";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/icons/avatar.png";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__avatar-container">
        <img className="header__avatar-image" src={avatar}></img>
      </div>
      <div className="links__container">
        <Link className="links__links" to={"/"}>
          My Insights
        </Link>
        <Link className="links__links" to={"/"}>
          My Community
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
