import envelope from "../assets/envelope.svg";

function Buttons() {
  return (
    <div className="buttons">
      <button className="email-button">
        <img src={envelope} alt="" /> Email
      </button>
      <button className="linkedin-button">Linkedin</button>
    </div>
  );
}

export default Buttons;
