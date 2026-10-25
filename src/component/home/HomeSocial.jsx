import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SlSocialDribbble } from "react-icons/sl";
function HomeSocial() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/yossef-ahmed-dev/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn">
        <FaLinkedin />
      </a>

      <a href="https://github.com/yossef-ahmed7"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub">
        <FaGithub />
      </a>

      <a href="https://dribbble.com/your-name"
        target="_blank"
        rel="noreferrer"
        aria-label="Dribbble">
        <SlSocialDribbble />
      </a>
    </div>
  )
}

export default HomeSocial
