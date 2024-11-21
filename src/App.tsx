import ExamPage from "./ExamPage";
import HomePage from "./HomePage";
import OnlineCat from "./OnlineCat";
import ExamShop from "./ExamShop";
import FreeTrial from "./FreeTrial";
import Reviews from "./Reviews";
import Footer from "./FooterPage";
import "./styles.css";

import Scroll1 from "./assets/scroll1.png";
import Scroll2 from "./assets/scroll2.png";
import Scroll3 from "./assets/scroll3.png";
import Scroll4 from "./assets/scroll4.png";
import Scroll5 from "./assets/scroll5.png";
import Scroll6 from "./assets/scroll6.png";
import Scroll7 from "./assets/scroll7.png";
import Scroll8 from "./assets/scroll8.png";

export default function App() {
  const imgdata = [Scroll1, Scroll2, Scroll3, Scroll4];
  const textData = ["Marketing", "Design", "Programming", "Technology"];
  return (
    <div className="App">
      <HomePage />
      <ExamPage />
      <OnlineCat imgdata={imgdata} text={textData} />
      <ExamShop />
      <FreeTrial />
      <Reviews />
      <Footer />
    </div>
  );
}
