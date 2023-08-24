import "./Footer.scss";
import { Link } from "react-router-dom";
import wallet from "../../assets/images/icons/wallet.png"
import bolt from "../../assets/images/icons/Vector.svg";

const Footer = () => {
  return (
    <footer>
      <div className="icons__container">
        <Link className="icons__link" to={"/"}>
          <img src={wallet} className="icons__image"/>
        </Link>

        <img src={bolt} className="icons__image" />

        <Link className="icons__link" to={"/"}>
          <img src={wallet} className="icons__image"/>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
