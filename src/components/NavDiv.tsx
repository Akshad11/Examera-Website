import logo from "../assets/Fountain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./navDiv.css";

export default function NavDiv() {
  return (
    <div className="Navbar-Div">
      <div className="Nav_Img-div">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="NavUL-list">
        <li>Home</li>
        <li>Courses</li>
        <li>Instuctors</li>
        <li>Schedules</li>
        <li>Contact Us</li>
      </ul>
      <div className="IconBtn-div">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          fontSize="20px"
          style={{ color: "#ffffff" }}
        />
        <p className="nav_log-p">Login</p>
        <button type="submit">Register</button>
      </div>
    </div>
  );
}
