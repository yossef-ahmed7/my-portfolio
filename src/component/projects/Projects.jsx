import './Projects.css'
import { projectsData } from './projectData'
import { useLanguage } from "../../Context/LanguageContext";

function Projects() {
  const { t } = useLanguage();
  return (
    <section className="projects" id="projects">
      <div className="container projects_container">
        <div className="top_section">
          <h5>{t.projects.subtitle}</h5>
          <h2>{t.projects.title}</h2>
        </div>
        <div className="projects_cards">
          {projectsData.map((project) => (
            <div className="project_card" key={project.id}>
              <div className="project_img">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <div className="btns">
                <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
                  {t.projects.github}
                </a>
                <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  {t.projects.demo}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects