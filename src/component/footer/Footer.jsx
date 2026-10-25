import './Footer.css';

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useLanguage } from "../../Context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <a href="#home" className="footer_logo">
        Yousef Ahmed
      </a>

      <ul className="permalinks">
        <li><a href="#home">{t.nav.home}</a></li>
        <li><a href="#about">{t.nav.about}</a></li>
        <li><a href="#skills">{t.nav.experience}</a></li>
        <li><a href="#services">{t.nav.services}</a></li>
        <li><a href="#projects">{t.nav.portfolio}</a></li>
        <li><a href="#contact">{t.nav.contact}</a></li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <FaXTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; <a href="#home">Yousef Ahmed</a>{" "}
          {t.footer?.copyright || "All rights reserved"}
        </small>
      </div>
    </footer>
  );
}

export default Footer;