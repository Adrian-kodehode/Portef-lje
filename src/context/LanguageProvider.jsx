import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    aboutMe: "About Me",
    contact: "Contact",
    skills: "Skills",
    projects: "Projects",
    downloadCV: "Download CV",
    text: "Hi! My name is Adrian, and I'm a front-end developer with skills in ",
    text2:
      "I have experience developing websites using these technologies and ensuring they are fully optimized and tailored to a responsive user experience.",
    seProsjekt: "See Project",
    and: "and",
  },
  no: {
    aboutMe: "Om Meg",
    contact: "Kontakt",
    skills: "Ferdigheter",
    projects: "Prosjekter",
    downloadCV: "Last ned CV",
    text: "Hei! Jeg heter Adrian, og jeg er en front-end utvikler med ferdigheter i ",
    text2:
      "Jeg har erfaring med å utvikle nettsider ved bruk av disse teknologiene og sørger for at de er fullt optimaliserte og tilpasset en responsiv brukeropplevelse.",
    seProsjekt: "Se Prosjekt",
    and: "og",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("no");

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
