import React, {useEffect} from 'react';
import { Fade } from 'react-awesome-reveal';
import { ReactTyped } from 'react-typed';
import { useMediaQuery } from 'react-responsive';


const Home = ({ sobreMiRef, proyectosRef, habilidadesRef, contactoRef, educacionRef }) => {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTabletOrAbove = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    console.log('isMobile:', isMobile, 'isTabletOrAbove:', isTabletOrAbove);

  }, [])
  

  const handleScroll = () => {
    if (contactoRef.current) {
      contactoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div style={styles.homeContainer}>
      
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <Fade>
            <h1 style={styles.heroTitle}>Mateo Vizio</h1>
            <img src='./cara.png' style={styles.foto} alt="Foto" />
            <p style={styles.heroSubtitle}>Desarrollador{" "}
              <ReactTyped
                strings={["Web", "de Escritorio", "Móvil"]}
                typeSpeed={80}
                backSpeed={60}
                loop
                showCursor
              />
            </p>
            <a onClick={handleScroll} style={styles.ctaButton} className="hvr-grow">Contáctame</a>
          </Fade>
        </div>
      </section>
      
      <section ref={sobreMiRef}>
      <Fade duration={1500}>
        <section id="about"  style={styles.section}>
          <h2 style={styles.sectionTitle}>Sobre mí</h2>
          Soy desarrollador con experiencia en React JS, React Native, ASP.NET, Entity Framework, HTML/CSS, JavaScript, Java, C#, SQL, entre otras. Me especializo en crear soluciones tecnológicas que combinan rendimiento, buenas prácticas y experiencias de usuario fluidas. Graduado de la carrera de Analista Programador en el instituto CTC (CLAEH).
        </section>
      </Fade>
      </section>
      

      <section ref={proyectosRef}>
      <Fade duration={1500}>
        <section id="projects"  style={styles.section}>
          <h2 style={styles.sectionTitle}>Proyectos</h2>
          <div style={{
              display: 'grid',
              gap: '20px',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', // 1 columna en móviles, 2 en pantallas grandes
            }}>
            <div style={styles.projectCard} className="hvr-float">
              <h3 style={styles.projectTitle}>Proyecto de gestión de gimnasio</h3>
              <img style={styles.imagenProyecto} src="https://www.memo-juegos.com/jeux/new_games/simon/classic_new/image_bg.jpg?v=4"></img>
              <p style={styles.text}>Aplicación de escritorio realizada para atender las necesidades de un cliente. Permite manejar los aspectos fundamentales de su negocio</p>
              <a href="https://github.com/tuusuario/proyecto-web" style={styles.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
            </div>
            <div style={styles.projectCard} className="hvr-float">
              <h3 style={styles.projectTitle}>Juego de memorizar para móvil</h3>
              <img style={styles.imagenProyecto} src="https://www.memo-juegos.com/jeux/new_games/simon/classic_new/image_bg.jpg?v=4"></img>
              <p style={styles.text}>Juego de memorizar una secuencia de colores, aumentando su dificultad según avanza el nivel. Realizado con React Native</p>
              <a href="https://github.com/tuusuario/proyecto-movil" style={styles.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
            </div>
            <div style={styles.projectCard} className="hvr-float">
              <h3 style={styles.projectTitle}>Juego de memorizar para móvil</h3>
              <img style={styles.imagenProyecto} src="https://www.memo-juegos.com/jeux/new_games/simon/classic_new/image_bg.jpg?v=4"></img>
              <p style={styles.text}>Juego de memorizar una secuencia de colores, aumentando su dificultad según avanza el nivel. Realizado con React Native</p>
              <a href="https://github.com/tuusuario/proyecto-movil" style={styles.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
            </div>
            <div style={styles.projectCard} className="hvr-float">
              <h3 style={styles.projectTitle}>Juego de memorizar para móvil</h3>
              <img style={styles.imagenProyecto} src="https://www.memo-juegos.com/jeux/new_games/simon/classic_new/image_bg.jpg?v=4"></img>
              <p style={styles.text}>Juego de memorizar una secuencia de colores, aumentando su dificultad según avanza el nivel. Realizado con React Native</p>
              <a href="https://github.com/tuusuario/proyecto-movil" style={styles.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
            </div>
          </div>
        </section>
      </Fade>
      </section>
      

      <section ref={habilidadesRef}>
      <Fade duration={1500}>
        <section id="skills"  style={styles.section}>
          <h2 style={styles.sectionTitle}>Tecnologías</h2>
          <ul style={styles.skillsList}>
            {['JavaScript', 'React', 'Node.js', 'React Native', 'CSS', 'HTML', 'SQL', 'C#', 'Java', 'ASP.net', 'Entity Framework'].map((skill, index) => (
              <li key={index} style={styles.skillItem} className="hvr-float">{skill}</li>
            ))}
          </ul>
        </section>
      </Fade>
      </section>

      <section ref={educacionRef}>
  <Fade duration={1500}>
    <section id="education" style={styles.sectionEd}>
      <h2 style={styles.sectionTitle}>Educación</h2>
      <div style={styles.educacionItem}>
        <h3 style={{marginBottom: "5px"}}>Educación Secundaria</h3>
        <p style={{marginTop: "5px"}}>Finalizado en 2021, Liceo N°2 de Juan Lacaze</p>
      </div>
      <div style={styles.educacionItem}>
        <h3 style={{marginBottom: "5px"}}>Inglés</h3>
        <p style={{marginTop: "5px"}}>Nivel B2. Obtenido en la institución Alianza en 2021</p>
      </div>
      <div style={styles.educacionItem}>
        <h3 style={{marginBottom: "5px"}}>Analista Programador</h3>
        <p style={{marginTop: "5px"}}>Graduado de la carrera en 2024, en la institución CTC (CLAEH)</p>
      </div>
    </section>
  </Fade>
</section>

      

      <section ref={contactoRef}>
      <Fade duration={1500}>
        <section id="contact"  style={styles.section}>
          <h2 style={styles.sectionTitle}>Contacto</h2>
          <p style={styles.text}>Estoy abierto a nuevas oportunidades laborales. Si estás interesado en darme una oportunidad, te dejo mi información de contacto:</p>
          <p style={styles.contactInfo}>Teléfono: <a href="tel:+5999300547" style={styles.link}>099300547</a></p>
          <p style={styles.contactInfo}>Correo Electrónico: <a href="mailto:mateovizio93@gmail.com" style={styles.link}>mateovizio93@gmail.com</a></p>
          <a href="./CvMateoVizio.pdf" style={styles.downloadButton} download className="hvr-grow">Descargar Currículum</a>
        </section>
      </Fade>
      </section>
      

      <footer style={styles.footer}>
        <Fade duration={1500}>
          <p style={styles.footerText}>© 2024 Mateo Vizio. Todos los derechos reservados.</p>
          <div style={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/tuusuario" style={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/tuusuario" style={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </Fade>
      </footer>
    </div>
  );
};

const styles = {
  homeContainer: {
    fontFamily: 'Roboto, sans-serif',
    lineHeight: '1.6',
    fontSize:"18px",
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  heroSection: {
    background: 'linear-gradient(180deg, #010712 0%, #1B243E 100%)', // #1B243E, #010712
    color: '#fff',
    padding: '80px 20px',
    textAlign: 'center',
    position: 'relative',  // Aseguramos que el z-index funcione
    zIndex: 1,
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '2.5rem',
    margin: '0 0 20px',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#3fa0bb',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    zIndex: 2,
    userSelect: "none"
  },
  section: {
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: "center",
  },
  sectionEd: {
    padding: '40px 20px',
    maxWidth: '650px',
    margin: '0 auto',
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  text: {
    marginBottom: '15px',
  },
  // projectsGrid: {
  //   display: 'grid',
  //   gap: '20px',
  //   gridTemplateColumns: 'repeat(2, minmax(250px, 1fr))',
  // },
  projectCard: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  projectTitle: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  link: {
    color: '#3fa0bb',
    textDecoration: 'none',
  },
  skillsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    listStyle: 'none',
    padding: 0,
    justifyContent: "center",
  },
  skillItem: {
    background: '#1c306a',
    padding: '5px 10px',
    borderRadius: '1px',
    color: "white",
    fontSize: "14px",
    userSelect: "none",
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#61dafb',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#010712',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  },
  footerText: {
    marginBottom: '10px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  downloadButton: {
    display: 'inline-block',
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#3fa0bb',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  foto:{
    height: "250px"
  },
  imagenProyecto:{
    height: "150px",
    borderRadius: "50%"
  },
  educacionItem: {
    marginBottom: '20px',
    textAlign: 'left',
    padding: '10px',
    paddingLeft: "40px",
    paddingRight: "40px",
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#1c306a',
    color: "white",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  },
  
};

export default Home;
