import React, { useEffect, useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { ReactTyped } from "react-typed";
import { useMediaQuery } from "react-responsive";
import { TranslationContext } from "../contexts/TranslationContext";

const Home = ({
  sobreMiRef,
  proyectosRef,
  habilidadesRef,
  contactoRef,
  educacionRef,
  isDayMode,
  setMostrarMenu,
  mostrarMenu,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletOrAbove = useMediaQuery({ query: "(min-width: 768px)" });

  const { translations, switchLanguage, language } = useContext(TranslationContext);

  useEffect(() => {
    if (mostrarMenu) {
      document.body.style.overflow = "hidden"; // Bloquea el desplazamiento
    } else {
      document.body.style.overflow = "auto"; // Restaura el desplazamiento
    }
  }, [mostrarMenu]);

  const handleScrollToSection = (ref) => {
    setMostrarMenu(false);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (contactoRef.current) {
      contactoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={styles.homeContainer}>
      <section
        style={{
          ...styles.heroSection,
          background: isDayMode
            ? "linear-gradient(180deg, #010712 0%, #1B243E 100%)"
            : "linear-gradient(180deg, #152538 80%, #070F18 100%)",
          color: isDayMode ? "white" : "#E0E6ED",
          paddingBottom: isDayMode ? "80px" : "150px",
        }}
      >
        <div style={styles.heroContent}>
          <Fade>
            <h1 style={styles.heroTitle}>Mateo Vizio</h1>
            <img
              src="https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg"
              style={styles.foto}
              alt="Foto"
            />
            <p style={styles.heroSubtitle}>
      {language === "en" ? (
        <>
          <ReactTyped
            strings={translations.dynamicFields}
            typeSpeed={80}
            backSpeed={60}
            loop
            showCursor
          />
          {" "}{translations.fixedDeveloperText}
        </>
      ) : (
        <>
          {translations.fixedDeveloperText}{" "}
          <ReactTyped
            strings={translations.dynamicFields}
            typeSpeed={80}
            backSpeed={60}
            loop
            showCursor
          />
        </>
      )}
    </p>
            <a
              onClick={handleScroll}
              style={{
                ...styles.ctaButton,
                backgroundColor: isDayMode ? "#3fa0bb" : "black",
              }}
              className="hvr-grow"
            >
              {translations.contactButton}
            </a>
          </Fade>
        </div>
      </section>

      <section
        style={{
          ...styles.sectionContainer,
          backgroundColor: isDayMode ? "white" : "#070F18",
          color: isDayMode ? "black" : "#E0E6ED",
        }}
        ref={sobreMiRef}
      >
        <Fade duration={1500}>
          <section id="about" style={styles.section}>
            <h2 style={styles.sectionTitle}>{translations.aboutMe}</h2>
            {translations.aboutMeText}
          </section>
        </Fade>
      </section>

      <section
        style={{
          ...styles.sectionContainer,
          backgroundColor: isDayMode ? "white" : "#070F18",
          color: isDayMode ? "black" : "#E0E6ED",
        }}
        ref={proyectosRef}
      >
        <Fade duration={1500}>
          <section id="projects" style={styles.section}>
            <h2 style={styles.sectionTitle}>{translations.projects}</h2>
            <div
              style={{
                display: "grid",
                gap: "20px",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              }}
            >
              <div
                style={{
                  ...styles.projectCard,
                  backgroundColor: isDayMode ? "white" : "#152538",
                }}
                className="hvr-float"
              >
                <h3 style={styles.projectTitle}>
                  {translations.simonProjectTitle}
                </h3>
                <img
                  style={styles.imagenProyecto}
                  src="https://www.memo-juegos.com/jeux/new_games/simon/classic_new/image_bg.jpg?v=4"
                ></img>
                <p style={styles.text}>
                  {translations.simonProjectText}
                </p>
              </div>
              <div
                style={{
                  ...styles.projectCard,
                  backgroundColor: isDayMode ? "white" : "#152538",
                }}
                className="hvr-float"
              >
                <h3 style={styles.projectTitle}>
                {translations.simonProjectTitle}
                </h3>
                <img
                  style={styles.imagenProyecto}
                  src="https://www.memo-juegos.com/jeux/new_games/simon/classic_new/image_bg.jpg?v=4"
                ></img>
                <p style={styles.text}>
                {translations.simonProjectText}
                </p>
              </div>
              <div
                style={{
                  ...styles.projectCard,
                  backgroundColor: isDayMode ? "white" : "#152538",
                }}
                className="hvr-float"
              >
                <h3 style={styles.projectTitle}>
                {translations.simonProjectTitle}
                </h3>
                <img
                  style={styles.imagenProyecto}
                  src="https://www.memo-juegos.com/jeux/new_games/simon/classic_new/image_bg.jpg?v=4"
                ></img>
                <p style={styles.text}>
                {translations.simonProjectText}
                </p>
              </div>
              <div
                style={{
                  ...styles.projectCard,
                  backgroundColor: isDayMode ? "white" : "#152538",
                }}
                className="hvr-float"
              >
                <h3 style={styles.projectTitle}>
                {translations.simonProjectTitle}
                </h3>
                <img
                  style={styles.imagenProyecto}
                  src="https://www.memo-juegos.com/jeux/new_games/simon/classic_new/image_bg.jpg?v=4"
                ></img>
                <p style={styles.text}>
                {translations.simonProjectText}
                </p>
              </div>
            </div>
          </section>
        </Fade>
      </section>

      <section
        style={{
          ...styles.sectionContainer,
          backgroundColor: isDayMode ? "white" : "#070f18",
          color: isDayMode ? "black" : "#E0E6ED",
        }}
        ref={habilidadesRef}
      >
        <Fade duration={1500}>
          <section id="skills" style={styles.section}>
            <h2 style={styles.sectionTitle}>{translations.skills}</h2>
            <ul style={styles.skillsList}>
              {[
                "JavaScript",
                "React",
                "Node.js",
                "React Native",
                "CSS",
                "HTML",
                "SQL",
                "C#",
                "Java",
                "ASP.net",
                "Entity Framework",
              ].map((skill, index) => (
                <li key={index} style={styles.skillItem} className="hvr-float">
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </Fade>
      </section>

      <section
        style={{
          ...styles.sectionContainer,
          backgroundColor: isDayMode ? "white" : "#070f18",
          color: isDayMode ? "black" : "#E0E6ED",
        }}
        ref={educacionRef}
      >
        <Fade duration={1500}>
          <section id="education" style={styles.sectionEd}>
            <h2 style={styles.sectionTitle}>{translations.education}</h2>
            <div
              style={{
                ...styles.educacionItem,
                backgroundColor: isDayMode ? "#1c306a" : "#152538",
              }}
              className="hvr-float"
            >
              <h3 style={{ marginBottom: "5px" }}>{translations.highschoolTitle}</h3>
              <p style={{ marginTop: "5px" }}>
              {translations.highschoolText}
              </p>
            </div>
            <div
              style={{
                ...styles.educacionItem,
                backgroundColor: isDayMode ? "#1c306a" : "#152538",
              }}
              className="hvr-float"
            >
              <h3 style={{ marginBottom: "5px" }}>{translations.englishTitle}</h3>
              <p style={{ marginTop: "5px" }}>
              {translations.englishText}
              </p>
            </div>
            <div
              style={{
                ...styles.educacionItem,
                backgroundColor: isDayMode ? "#1c306a" : "#152538",
              }}
              className="hvr-float"
            >
              <h3 style={{ marginBottom: "5px" }}>{translations.programmerTitle}</h3>
              <p style={{ marginTop: "5px" }}>
              {translations.programmerText}
              </p>
            </div>
          </section>
        </Fade>
      </section>

      <section
        ref={contactoRef}
        style={{
          ...styles.sectionContainer,
          backgroundColor: isDayMode ? "white" : "#070f18",
          color: isDayMode ? "black" : "#E0E6ED",
          paddingBottom: "70px",
        }}
      >
        <Fade duration={1500}>
          <section id="contact" style={styles.section}>
            <h2 style={styles.sectionTitle}>{translations.contact}</h2>
            <p style={styles.text}>
              {translations.contactText}
            </p>
            <p style={styles.contactInfo}>
            {translations.contactPhone}{" "}
              <a
                className="hvr-underline-from-left"
                href="tel:+59899300547"
                style={{
                  ...styles.link,
                  color: isDayMode ? "#3fa0bb" : "#5e87b6",
                }}
              >
                099300547
              </a>
            </p>
            <p style={styles.contactInfo}>
            {translations.contactEmail}{" "}
              <a
                className="hvr-underline-from-left"
                href="mailto:mateovizio93@gmail.com"
                style={{
                  ...styles.link,
                  color: isDayMode ? "#3fa0bb" : "#5e87b6",
                }}
              >
                mateovizio93@gmail.com
              </a>
            </p>
            <a
              href="./CvMateoVizio.pdf"
              style={{
                ...styles.downloadButton,
                backgroundColor: isDayMode ? "#3fa0bb" : "#284970",
              }}
              download
              className="hvr-grow"
            >
              {translations.contactDownload}
            </a>
          </section>
        </Fade>
      </section>
      {mostrarMenu && (
        <div style={styles.menuHamburguesaDesplegado}>
          <label
            style={styles.menuMobileElement}
            onClick={() => handleScrollToSection(sobreMiRef)}
          >
            {translations.aboutMe}
          </label>
          <label
            style={styles.menuMobileElement}
            onClick={() => handleScrollToSection(proyectosRef)}
          >
            {translations.projects}
          </label>
          <label
            style={styles.menuMobileElement}
            onClick={() => handleScrollToSection(habilidadesRef)}
          >
            {translations.skills}
          </label>
          <label
            style={styles.menuMobileElement}
            onClick={() => handleScrollToSection(educacionRef)}
          >
            {translations.education}
          </label>
          <label
            style={styles.menuMobileElement}
            onClick={() => handleScrollToSection(contactoRef)}
          >
            {translations.contact}
          </label>
        </div>
      )}

      <footer style={styles.footer}>
        <Fade duration={1500}>
          <p style={styles.footerText}>
            {translations.footer}
          </p>
          <div style={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/tuusuario"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tuusuario"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </Fade>
      </footer>
    </div>
  );
};

const styles = {
  homeContainer: {
    fontFamily: "Roboto, sans-serif",
    lineHeight: "1.6",
    fontSize: "18px",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  heroSection: {
    color: "#fff",
    padding: "80px 20px",
    textAlign: "center",
    position: "relative",
    transition: "background-color 0.4s ease",
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "2.5rem",
    margin: "0 0 20px",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  ctaButton: {
    display: "inline-block",
    padding: "10px 20px",
    color: "#fff",
    backgroundColor: "#3fa0bb",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
    zIndex: 2,
    userSelect: "none",
    transition: "transform 0.4s ease",
  },
  section: {
    padding: "40px 20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  sectionContainer: {
    transition: "background-color 0.5s ease",
  },
  sectionDark: {
    padding: "40px 20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#080818",
  },
  sectionEd: {
    padding: "40px 20px",
    maxWidth: "650px",
    margin: "0 auto",
    textAlign: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "20px",
    textAlign: "center",
  },
  text: {
    marginBottom: "15px",
  },
  // projectsGrid: {
  //   display: 'grid',
  //   gap: '20px',
  //   gridTemplateColumns: 'repeat(2, minmax(250px, 1fr))',
  // },
  projectCard: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    // transition: "background-color 0.5s ease"
  },
  projectTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  link: {
    color: "#3fa0bb",
    textDecoration: "none",
  },
  skillsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    listStyle: "none",
    padding: 0,
    justifyContent: "center",
  },
  skillItem: {
    background: "#1c306a",
    padding: "5px 10px",
    borderRadius: "1px",
    color: "white",
    fontSize: "14px",
    userSelect: "none",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#61dafb",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footer: {
    backgroundColor: "#010712",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
  },
  footerText: {
    marginBottom: "10px",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  downloadButton: {
    display: "inline-block",
    padding: "10px 20px",
    color: "#fff",
    backgroundColor: "#3fa0bb",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  foto: {
    height: "350px",
    borderRadius: "50%",
  },
  imagenProyecto: {
    height: "150px",
    borderRadius: "20%",
    border: "white solid 2px",
  },
  educacionItem: {
    marginBottom: "20px",
    textAlign: "left",
    padding: "10px 40px 10px 40px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#1c306a",
    color: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    cursor: "pointer",
    minWidth: "80%",
    maxWidth: "80%",
  },
  menuHamburguesaDesplegado: {
    position: "fixed",
    top: "50px",
    right: "0px",
    width: "100vw",
    height: "calc(100vh - 50px)",
    borderRadius: "5px",
    zIndex: 1100,
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "70px",
  },
  menuMobileElement: {
    color: "white",
    fontSize: "25px",
    fontWeight: 700,
    opacity: 1,
  },
};

export default Home;
