import "./Infosection.scss";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/icons/entypo_chevron-left.svg";
import fire from "../../assets/images/icons/fire.svg";

const Infosection = () => {
  return (
    <section className="infosection">
      <div className="infosection__horozontalbox">
        <div className="infosection__horozontalbox-textcontainer">
          <h3 className="infosection__horozontalbox-title">Energy Usage</h3>
          <h2 className="infosection__horozontalbox-info">Your Breakdown</h2>
        </div>
        <div className="infosection__horozontalbox-arrowcontainer">
          <img className="infosection__horozontalbox-arrow" src={arrow} />
        </div>
      </div>
      <div className="infosection__vertbox-container">
        <div className="infosection__vertbox">
          <h3 className="infosection__vertbox-title">My Trends</h3>
          <p className="infosection__vertbox-info">3% ⬇️ </p>
          <p className="infosection__vertbox-summary">
            You've reduced your carbon footprint by 3% againts last month. Nice
            one!
          </p>
        </div>
        <div className="infosection__vertbox">
          <h3 className="infosection__vertbox-title">Recommendations</h3>
          <ul className="infosection__vertbox-reclist">
            <li className="infosection__vertbox-reclistitem">
              <img className="infosection__vertbox-reclist--icon" src={fire} />
              <p
                class="infosection__vertbox-reclist-p"
              >
                Charge car overnight
              </p>
            </li>
            <li className="infosection__vertbox-reclistitem">
              <img className="infosection__vertbox-reclist--icon" src={fire} />
              <p
                class="infosection__vertbox-reclist-p"
              >
                Wash Clothes at 30 degrees
              </p>
            </li>
            <li className="infosection__vertbox-reclistitem">
              <img className="infosection__vertbox-reclist--icon" src={fire} />
              <p
                class="infosection__vertbox-reclist-p">Try out Agile Octopus</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Infosection;
