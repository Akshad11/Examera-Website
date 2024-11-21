import "./freetrail.css";

export default function FreeTrial() {
  return (
    <div className="FreeTrial-div">
      <div className="Free_Text-div">
        <h3>Our exams prepare you for job opportunity</h3>
        <h5>Get free trial to test your ability here</h5>
        <p>
          Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum,
          dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur
          adipielit. Facilisi fermentu
        </p>
      </div>
      <div className="Free_Form-div">
        <div className="F_Form-div">
          <h3>Get Free Trial now</h3>
          <input placeholder="Full name" />
          <input placeholder="Email" />
          <input placeholder="Phone number" />
          <input placeholder="List of courses goes here" />
          <button type="submit">Apply Now</button>
        </div>
      </div>
    </div>
  );
}
