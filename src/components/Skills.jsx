import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageProvider";

const Skills = () => {
  const { language, translations } = useLanguage();

  return (
    <section className="skills-container">
      <div className="center-text">
        <h2>{translations[language].skills}</h2>
      </div>
      <div>
        <FaHtml5 size={100} style={{ color: "red", margin: "10px" }} />
        <FaCss3Alt size={100} style={{ color: "blue", margin: "10px" }} />
        <FaJs size={100} style={{ color: "yellow", margin: "10px" }} />
        <FaReact size={100} style={{ color: "cyan", margin: "10px" }} />
        <FaGithub size={100} style={{ color: "purple", margin: "10px" }} />
        <FaGitAlt size={100} style={{ color: "red", margin: "10px" }} />
        <FaFigma size={100} className="rainbow" style={{ margin: "10px" }} />
      </div>
    </section>
  );
};

export default Skills;
