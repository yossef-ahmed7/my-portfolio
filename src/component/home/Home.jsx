import './Home.css'
import { useLanguage } from "../../Context/LanguageContext";
import HomeSocial from './HomeSocial'
import Me from '../../assets/me1.jpeg'
import Cv from '../../assets/cv.pdf'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Home() {
  const { t } = useLanguage();
  return (
    <div className='home' id='home'>
      <div className="container home-container">
        <div className="info">
          <span>{t.home.greeting}</span>
          <h1>{t.home.name}</h1>
          <h3>{t.home.role}</h3>

          <p>
            {t.home.description1}
          </p>

          <p>
            {t.home.description2}
          </p>

          <div className="btns">
            <a href={Cv} className='btn' download>{t.home.downloadCV}</a>
            <a href="#contact" className='btn btn-primary'>{t.home.contact}</a>
          </div>

        </div>
        <div className="dev">
          <div className="image">
            <img src={Me} alt="Youssef Ahmed - Front-End Developer" />
          </div>
          <div className="social">
            <HomeSocial />
          </div>
        </div>
      </div>
      <a href="#about" className='scroll-down' aria-label={t.home.scrollDown}>
        <MdKeyboardDoubleArrowDown />
      </a>
    </div>
  )
}

export default Home
