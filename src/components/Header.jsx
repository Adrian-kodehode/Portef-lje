import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Header.css";
import { useLanguage } from "../context/LanguageProvider";

const Header = () => {
  const [darkmode, setDarkmode] = useState(
    localStorage.getItem("darkmode") === "true"
  );

  const { language, setLanguage, translations } = useLanguage();

  useEffect(() => {
    if (darkmode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkmode", darkmode);
  }, [darkmode]);

  return (
    <header>
      <div className="flag-container">
        <img
          src="/Norway.png"
          alt="Norwegian flag"
          width="30"
          onClick={() => setLanguage("no")}
          style={{ cursor: "pointer", marginRight: "10px" }}
        />
        <img
          src="/United_States.png"
          alt="US flag"
          width="41"
          onClick={() => setLanguage("en")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="icons-and-switch">
        <a href="mailto:adrian.kodehode@gmail.com" className="mail-icon">
          <FaEnvelope size={24} />
        </a>
        <a href="https://github.com/Adrian-kodehode" className="github-icon">
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/adrian-kodehode"
          className="linkedin-icon"
        >
          <FaLinkedin size={24} />
        </a>
        <label className="switch">
          <input
            type="checkbox"
            checked={darkmode}
            onChange={() => setDarkmode(!darkmode)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
