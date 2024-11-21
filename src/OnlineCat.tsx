import "./onlineCat.css";

interface myOnlineCat {
  text: string[];
  imgdata: any[];
}

export default function OnlineCat({ text, imgdata }: myOnlineCat) {
  return (
    <div className="OnlineCat-div">
      <div className="Online_text-div">
        <h2>Choose online exams from top cartegories</h2>
        <p>See more</p>
      </div>

      <div className="ScrollView-div">
        {imgdata.map((img, index) => (
          <div
            key={index}
            className="Scrolling"
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <h2>{text[index]}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
