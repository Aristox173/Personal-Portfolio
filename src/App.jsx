import { useState, useEffect } from "react";
import Sidebar from "./views/components/Sidebar";
import Hero from "./views/pages/Hero";
import About from "./views/pages/About";
import Skills from "./views/pages/Skills";
import Certifications from "./views/pages/Certifications";
import Projects from "./views/pages/Projects";
import WorkExperience from "./views/pages/WorkExperience";
import Contact from "./views/pages/Contact";

function App() {
  const [navbarStyles, setNavbarStyles] = useState({
    backgroundColor: "bg-color1",
    shadowColor: "shadow-white",
    iconColor: "text-black",
    hoverColor: "hover:text-white",
  });

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case "hero":
              setNavbarStyles({
                backgroundColor: "bg-color6",
                shadowColor: "shadow-white",
                iconColor: "text-black",
                hoverColor: "hover:text-white",
              });
              break;
            case "about":
              setNavbarStyles({
                backgroundColor: "bg-color1",
                shadowColor: "shadow-black",
                iconColor: "text-white",
                hoverColor: "hover:text-color6",
              });
              break;
            case "skills":
              setNavbarStyles({
                backgroundColor: "bg-color6",
                shadowColor: "shadow-white",
                iconColor: "text-black",
                hoverColor: "hover:text-white",
              });
              break;
            case "certifications":
              setNavbarStyles({
                backgroundColor: "bg-color1",
                shadowColor: "shadow-black",
                iconColor: "text-white",
                hoverColor: "hover:text-color6",
              });
              break;
            case "projects":
              setNavbarStyles({
                backgroundColor: "bg-color6",
                shadowColor: "shadow-white",
                iconColor: "text-black",
                hoverColor: "hover:text-white",
              });
              break;
            case "work":
              setNavbarStyles({
                backgroundColor: "bg-color1",
                shadowColor: "shadow-black",
                iconColor: "text-white",
                hoverColor: "hover:text-color6",
              });
              break;
            case "contact":
              setNavbarStyles({
                backgroundColor: "bg-color6",
                shadowColor: "shadow-white",
                iconColor: "text-black",
                hoverColor: "hover:text-white",
              });
              break;
            default:
              setNavbarStyles({
                backgroundColor: "bg-color1",
                shadowColor: "shadow-black",
                iconColor: "text-black",
                hoverColor: "hover:text-color6",
              });
          }
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main>
      <Sidebar navbarStyles={navbarStyles} />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <WorkExperience />
      <Contact />
    </main>
  );
}

export default App;
