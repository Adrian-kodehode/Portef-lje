import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { LanguageProvider } from "./context/LanguageProvider";

const App = () => {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
      </main>
    </LanguageProvider>
  );
};

export default App;
