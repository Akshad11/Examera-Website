import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./examCards.css";

interface myExamCard {
  EImg: any;
  EName: string;
  EStar: string;
  Etime: string;
  Ecount: string;
  Eprice: string;
}

export default function ExamCard({
  EImg,
  EName,
  EStar,
  Etime,
  Ecount,
  Eprice,
}: myExamCard) {
  return (
    <div className="Exam-card">
      <div className="Eimg-div">
        <img src={EImg} alt="photo" />
      </div>
      <div className="EName-div">
        <p className="HighText">{EName}</p>
        <p className="smallText">
          <FontAwesomeIcon
            icon={faStar}
            font-size="17px"
            style={{ color: "#002461" }}
          />{" "}
          {EStar}
        </p>
      </div>
      <div className="ETime-div">
        <div className="EweeksStud-div">
          <p className="smallText">{Etime} weeks</p>
          <p className="smallText">{Ecount} Students</p>
        </div>
        <p className="priceText">{Eprice}$</p>
      </div>
    </div>
  );
}
