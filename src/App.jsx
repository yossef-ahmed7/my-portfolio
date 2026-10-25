import Nav from './component/nav/Nav'
import Home from './component/home/Home'
import About from './component/about/About'
import Skills from './component/skills/Skills'
import Services from './component/services/Services'
import Projects from './component/projects/Projects'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Loader from './component/Loader/Loader'
import { useEffect, useState } from "react";
import { LanguageProvider } from "./Context/LanguageContext";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );

  useEffect(() => {
    document.body.classList.toggle(
      "light-theme",
      theme === "light"
    );

    document.documentElement.classList.toggle(
      "light-theme",
      theme === "light"
    );

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };
  return (
    <LanguageProvider>
      <Loader />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </LanguageProvider>
  )
}

export default App
