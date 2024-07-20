import envelope from "../assets/envelope.svg";
import linkedin from "../assets/linkedin.svg";

function Buttons() {
  return (
    <div className="buttons">
      <a href="mailto:filip.szkarlat@gmail.com" target="_blank">
        <button className="email-button btn">
          <img src={envelope} alt="" /> Email
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/filip-szkarłat-szczepaniak-196895223/"
        target="_blank"
      >
        <button className="linkedin-button btn">
          <img src={linkedin} alt="" /> Linkedin
        </button>
      </a>
    </div>
  );
}

export default Buttons;
