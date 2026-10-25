import './Services.css'
import { Servicesdata } from './Servicesdata'
import { useLanguage } from "../../Context/LanguageContext";
function Services() {
  const { t } = useLanguage();
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="top_section">
          <h5>{t.services.subtitle}</h5>
          <h2>{t.services.title}</h2>
        </div>
        <div className="services_cards">
          {Servicesdata.map((service) => (
            <div className="services_card" key={service.id}>
              <span>{service.logo}</span>
              <h3>
                {[
                  t.services.webDesign,
                  t.services.performance,
                  t.services.cleanCode,
                ][service.id - 1]}
              </h3>

              <p>
                {[
                  t.services.webDesignDesc,
                  t.services.performanceDesc,
                  t.services.cleanCodeDesc,
                ][service.id - 1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
