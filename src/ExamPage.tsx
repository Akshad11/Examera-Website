import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Exampic from "./assets/Exampic.png";
import "./examPage.css";

export default function ExamPage() {
  return (
    <div className="Exam-div">
      <div className="E_img-div">
        <div className="top_img-div">
          <img src={Exampic} alt="Exampic" />
        </div>
        <div className="back_blue-div"></div>
      </div>
      <div className="E_text-div">
        <h3>Welcome to online exam center</h3>
        <div className="text_wrapper">
          <div className="Icontext-div">
            <FontAwesomeIcon
              className="e_check-div"
              icon={faCircleCheck}
              size="2xl"
              style={{ color: "#00328a" }}
            />
            <p>
              Eu, massa lacinia senectus massa vitae vulputate neque.Eu, massa
              lacinia senectus massa vitae vulputate neque.
            </p>
          </div>
          <div className="Icontext-div">
            <FontAwesomeIcon
              className="e_check-div"
              icon={faCircleCheck}
              size="2xl"
              style={{ color: "#00328a" }}
            />
            <p>
              Eu, massa lacinia senectus massa vitae vulputate neque.Eu, massa
              lacinia senectus massa vitae vulputate neque.
            </p>
          </div>
          <div className="Icontext-div">
            <FontAwesomeIcon
              className="e_check-div"
              icon={faCircleCheck}
              size="2xl"
              style={{ color: "#00328a" }}
            />
            <p>
              Eu, massa lacinia senectus massa vitae vulputate neque.Eu, massa
              lacinia senectus massa vitae vulputate neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
