import { useLanguage } from "../context/LanguageProvider";

const projects = [
  {
    id: 1,
    img: "/SCHIZO-4x.gif",
    tech: "HTML, CSS, JavaScript, React",
    repo: "https://github.com/Adrian-kodehode",
  },
  {
    id: 2,
    img: "/GAMBA-4x.gif",
    tech: "HTML, CSS, JavaScript ",
    repo: "https://github.com/sander1222/gruppenr1",
  },
  {
    id: 3,
    img: "/PokeMon-4x.png",
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
            <button>{translations[language].seProsjekter}</button>
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
