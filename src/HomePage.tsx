import NavDiv from "./components/NavDiv";
import "./homePage.css";
import HomeBack from "./assets/HomeBack.png";

export default function HomePage() {
  return (
    <div
      className="HomePage-div"
      style={{ backgroundImage: `url(${HomeBack})` }}
    >
      <NavDiv />
      <h1>Online Platform for Capability Testing</h1>
      <p className="home_text-p">
        For all of your testing requirements for evaluation, recruiting,
        selection, and certifications, use the online exam system.
      </p>
      <button type="submit" className="home_btn">
        Get Started
      </button>
    </div>
  );
}
