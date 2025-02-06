import { useLanguage } from "../context/LanguageProvider";
import GAMBA from "../assets/GAMBA-4x.gif";
import SCHIZO from "../assets/SCHIZO-4x.gif";
import PokeMon from "../assets/PokeMon-4x.png";

const projects = [
  {
    id: 1,
    img: SCHIZO,
    tech: "HTML, CSS, JavaScript, React",
    repo: "https://adrian-kodehode.github.io/Portef-lje/",
  },
  {
    id: 2,
    img: GAMBA,
    tech: "HTML, CSS, JavaScript ",
    repo: "https://github.com/sander1222/gruppenr1",
  },
  {
    id: 3,
    img: PokeMon,
    tech: "HTML, CSS, JavaScript ",
    repo: "https://github.com/sander1222/api-oppgave",
  },
];

const Projects = () => {
  const { language, translations } = useLanguage();

  return (
    <section className="projects-container">
      <div className="center-text">
        <h2>{translations[language].projects}</h2>
      </div>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img
            src={project.img}
            alt="Project"
            onError={() => console.error(`Image not found: ${project.img}`)}
          />
          <p>{project.tech}</p>
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <button>{translations[language].seProsjekt}</button>
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
