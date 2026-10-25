import './Nav.css';
import { useState, useEffect } from 'react';
import { useLanguage } from "../../Context/LanguageContext";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import { SiHyperskill } from "react-icons/si";
import { FiSun, FiMoon } from "react-icons/fi";

const Logo = "/logo.png";

const links = [
  { id: "#home", key: "home", icon: <IoHomeOutline /> },
  { id: "#about", key: "about", icon: <LuUserRound /> },
  { id: "#skills", key: "experience", icon: <SiHyperskill /> },
  { id: "#services", key: "services", icon: <BiBook /> },
  { id: "#projects", key: "portfolio", icon: <RiServerLine /> },
  { id: "#contact", key: "contact", icon: <BiMessageDetail /> },
];

function Nav({ theme, toggleTheme }) {
  const [active, setActive] = useState("#");
  const { language, toggleLanguage, t } = useLanguage();
  useEffect(() => {
    const handleScroll = () => {
      const sections = links
        .map((link) => document.querySelector(link.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let currentSection = sections[0];

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (isAtBottom) {
        currentSection = sections[sections.length - 1];
      }

      if (currentSection) {
        setActive(`#${currentSection.id}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav>
      <div className="container nav_container">

        <a href="#home" className="logo">
          <img src={Logo} alt="Logo" />
          <span>Yousef Ahmed</span>
        </a>

        <ul className="nav_links">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.id}
                className={active === link.id ? "active" : ""}
                aria-label={t.nav[link.key]}
              >
                <span className="nav_icon">{link.icon}</span>
                <span className="nav_label">{t.nav[link.key]}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar_actions">
          <button
            className="theme_toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          <button
            className="language_toggle"
            onClick={toggleLanguage}
            aria-label={
              language === "en"
                ? "Switch to Arabic"
                : "Switch to English"
            }
          >
            {language === "en" ? "EN" : "AR"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
