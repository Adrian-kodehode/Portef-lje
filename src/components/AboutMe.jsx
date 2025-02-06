import React from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageProvider";
import "./AboutMe.css";
import images from "../assets/images 1.png"

const AboutMe = () => {
  const { language, translations } = useLanguage();

  return (
    <section className="about-me">
      <div className="about-me-content">
        <div className="about-text">
          <h2>{translations[language].aboutMe}</h2>
          <p>
            {translations[language].text} <span className="html">HTML</span>,{" "}
            <span className="css">CSS</span>,{" "}
            <span className="js">JavaScript</span>,{" "}
            <span className="react">React</span> {translations[language].and}{" "}
            <span className="figma">
              <span className="f">F</span>
              <span className="i">i</span>
              <span className="g">g</span>
              <span className="m">m</span>
              <span className="a">a</span>
            </span>
            .
          </p>
          <p>{translations[language].text2}</p>
        </div>
        <div className="contact-info">
          <h2>{translations[language].contact}</h2>
          <p>
            <FaEnvelope className="icon" size={24} />{" "}
            <a href="mailto:adrian.kodehode@gmail.com">
              adrian.kodehode@gmail.com
            </a>
          </p>
          <p>
            <FaGithub className="icon" size={24} />{" "}
            <a
              href="https://github.com/Adrian-kodehode"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adrian-kodehode
            </a>
          </p>
          <div className="cv-button">
            <a href="./CV.pdf" download>
              {translations[language].downloadCV}
            </a>
          </div>
        </div>
        <div className="profile-pic">
          <img src={images} alt="Profile" />
          <div className="name">Adrian Eriksen</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
