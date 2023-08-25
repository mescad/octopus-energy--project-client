import './Infosection.scss';
import { Link } from "react-router-dom";
import arrow from "../../assets/images/icons/entypo_chevron-left.svg";


const Infosection = () => {
  return (
    <section className="infosection">
        <div className="infosection__horozontalbox">
        <div className="infosection__horozontalbox-textcontainer">
            <h3 className="infosection__horozontalbox-title">Energy Usage</h3>
            <h2 className="infosection__horozontalbox-info">Your Breakdown</h2>
        </div>
        <div className="infosection__horozontalbox-arrowcontainer">
            <img classname="infosection__horozontalbox-arrow" src={arrow} />
        </div>
        </div>
        <div className="infosection__vertbox-container">
            <div className="infosection__vertbox">
                <h3 className="infosection__vertbox-title">Community Rank</h3>
                <p className="infosection__vertbox-info">16th</p>
                <p className="infosection__vertbox-summary">most energy effecient household in your area</p>
            </div>
            <div className="infosection_vertbox"></div>
        </div>
    </section>

  );
};

export default Infosection;
