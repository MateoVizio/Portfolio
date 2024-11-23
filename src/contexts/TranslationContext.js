import React, { createContext, useState } from "react";

export const TranslationContext = createContext();

const translations = {
  en: {
    aboutMe: "About Me",
    aboutMeText:
      "I am a developer with experience in React JS, React Native, ASP.NET, Entity Framework, HTML/CSS, JavaScript, Java, C#, SQL, among others. I specialize in creating technological solutions that combine performance, best practices, and smooth user experiences. Graduated in the Systems Analyst and Programmer career at CTC (CLAEH) institute.",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    education: "Education",
    contactButton: "Contact me",
    fixedDeveloperText: "Developer",
    dynamicFields: ["Web", "Desktop", "Mobile"],
    simonProjectTitle: "Memory game for mobile",
    simonProjectText:
      "A memory game where you need to remember a sequence of colors, with increasing difficulty as you progress through levels. Built with React Native.",
    highschoolTitle: "High School Education",
    highschoolText: "Juan Lacaze High School No.2 (completed in 2021)",
    englishTitle: "English Certification",
    englishText:
      "B2 Certificate. Obtained from the Alianza institution (completed in 2021)",
    programmerTitle: "Software Developer",
    programmerText:
      "Graduated from the Program at CTC - CLAEH institution (completed in 2024)",
    contactText:
      "I am open to new job opportunities. If you're interested in giving me a chance, here is my contact information:",
    contactPhone: "Phone",
    contactEmail: "Email:",
    contactDownload: "Download Resume",
    footer: "© 2024 Mateo Vizio. Almost all rights reserved."

  },
  es: {
    aboutMe: "Sobre mí",
    aboutMeText:
      "Soy desarrollador con experiencia en React JS, React Native, ASP.NET, Entity Framework, HTML/CSS, JavaScript, Java, C#, SQL, entre otras. Me especializo en crear soluciones tecnológicas que combinan rendimiento, buenas prácticas y experiencias de usuario fluidas. Graduado de la carrera de Analista Programador en el instituto CTC (CLAEH).",
    projects: "Proyectos",
    skills: "Tecnologías",
    contact: "Contacto",
    education: "Educación",
    contactButton: "Contáctame",
    fixedDeveloperText: "Desarrollador",
    dynamicFields: ["Web", "de Escritorio", "Móvil"],
    simonProjectTitle: "Juego de memorizar para móvil",
    simonProjectText:
      "Juego de memorizar una secuencia de colores, aumentando su dificultad según avanza el nivel. Realizado con React Native",
    highschoolTitle: "Educación secundaria",
    highschoolText: "Liceo N°2 de Juan Lacaze (finalizado en 2021)",
    englishTitle: "Inglés",
    englishText:
      "Certificado B2. Obtenido en la institución Alianza (finalizado en 2021)",
    programmerTitle: "Analista Programador",
    programmerText:
      "Graduado de la carrera en la institución CTC - CLAEH (finalizado en 2024)",
    contactText:
      "Estoy abierto a nuevas oportunidades laborales. Si estás interesado en darme una oportunidad, te dejo mi información de contacto:",
    contactPhone: "Teléfono",
    contactEmail: "Correo Electrónico:",
    contactDownload: "Descargar Currículum",
    footer: "© 2024 Mateo Vizio. Casi todos los derechos reservados."
  },
};

//proovedor
export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <TranslationContext.Provider
      value={{ translations: translations[language], switchLanguage, language }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
