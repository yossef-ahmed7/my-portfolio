import './About.css'
import { useLanguage } from "../../Context/LanguageContext";
import Me from '../../assets/me1.jpeg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  const { t } = useLanguage();
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>{t.about.subtitle}</h5>
        <h2>{t.about.title}</h2>
      </div>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className='about_icon' />
              <h5>{t.about.experience}</h5>
              <small>{t.about.experienceDetails}</small>
            </div>
            <div className="about_card">
              <FiUsers className='about_icon' />
              <h5>{t.about.clients}</h5>
              <small>{t.about.clientsDetails}</small>
            </div>
            <div className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>{t.about.projects}</h5>
              <small>{t.about.projectsDetails}</small>
            </div>
          </div>

          <p>
            {t.about.description}
          </p>

          <a href="#contact" className='btn btn-primary'>{t.about.contact}</a>
        </div>
      </div>
    </section>
  )
}

export default About
