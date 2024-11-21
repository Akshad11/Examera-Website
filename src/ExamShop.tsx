import ExamCard from "./components/ExamCards";
import "./examShop.css";

import Scroll1 from "./assets/scroll1.png";
import Scroll2 from "./assets/scroll2.png";
import Scroll3 from "./assets/scroll3.png";
import Scroll4 from "./assets/scroll4.png";
import Scroll5 from "./assets/scroll5.png";
import Scroll6 from "./assets/scroll6.png";
import Scroll7 from "./assets/scroll7.png";
import Scroll8 from "./assets/scroll8.png";

export default function ExamShop() {
  return (
    <div className="ExamShop-div">
      <h2>Top Featured Exams</h2>
      <div className="E_cards-view">
        <ExamCard
          EImg={Scroll1}
          EName={"Digital Marketting"}
          EStar={"4.5"}
          Ecount={"1.5k"}
          Etime={"6"}
          Eprice={"30.5"}
        />
        <ExamCard
          EImg={Scroll2}
          EName={"Software Engineering"}
          EStar={"4.5"}
          Ecount={"1.5k"}
          Etime={"6"}
          Eprice={"30.5"}
        />
        <ExamCard
          EImg={Scroll3}
          EName={"UX Research"}
          EStar={"4.5"}
          Ecount={"1.5k"}
          Etime={"6"}
          Eprice={"30.5"}
        />
        <ExamCard
          EImg={Scroll4}
          EName={"Photography"}
          EStar={"4.5"}
          Ecount={"1.5k"}
          Etime={"6"}
          Eprice={"30.5"}
        />
        <ExamCard
          EImg={Scroll5}
          EName={"Data analysis"}
          EStar={"4.5"}
          Ecount={"1.5k"}
          Etime={"6"}
          Eprice={"30.5"}
        />
        <ExamCard
          EImg={Scroll6}
          EName={"Ethical Harking"}
          EStar={"4.5"}
          Ecount={"1.5k"}
          Etime={"6"}
          Eprice={"30.5"}
        />
      </div>
    </div>
  );
}
