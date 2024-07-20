import GitHubIcon from "../assets/GitHubIcon.svg";
import FacebookIcon from "../assets/FacebookIcon.svg";

function Footer() {
  return (
    <footer>
      <a href="https://github.com/FilipSzkarlat" target="_blank">
        <img src={GitHubIcon} alt="" />
      </a>
      <a href="#">
        <img src={FacebookIcon} alt="" />
      </a>
    </footer>
  );
}

export default Footer;
