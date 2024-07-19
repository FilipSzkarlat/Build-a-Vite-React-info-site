import envelope from "../assets/envelope.svg";
import linkedin from "../assets/linkedin.svg";

function Buttons() {
  return (
    <div className="buttons">
      <button className="email-button">
        <img src={envelope} alt="" /> Email
      </button>
      <button className="linkedin-button">
        <img src={linkedin} alt="" /> Linkedin
      </button>
    </div>
  );
}

export default Buttons;
