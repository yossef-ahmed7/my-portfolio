import './Skills.css'
import { skillsData } from './DataSkills'
import { useLanguage } from "../../Context/LanguageContext";
function Skills() {
  const { t } = useLanguage();
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="top_section">
          <h5>{t.skills.subtitle}</h5>
          <h2>{t.skills.title}</h2>
        </div>
        <div className="skills_cards">
          {skillsData.map((skill) => (
            <div className="skills_card" key={skill.id}>
              <div className="icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <div className="info">
                <h6>{skill.name}</h6>
                <p>
                  {[
                    t.skills.html,
                    t.skills.css,
                    t.skills.javascript,
                    t.skills.react,
                    t.skills.tailwind,
                    t.skills.nodejs,
                    t.skills.figma,
                    t.skills.express,
                  ][skill.id - 1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills