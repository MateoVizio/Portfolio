import React from 'react';

const Home = ({ sobreMiRef, proyectosRef, habilidadesRef, contactoRef }) => {

  const handleScroll = () => {
    if(contactoRef.current){
      contactoRef.current.scrollIntoView({behavior:"smooth"})
    }
  }

  return (
    <div style={styles.homeContainer}>
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Mateo Vizio</h1>
          <img src='`${process.env.PUBLIC_URL}/cara.png`' style={styles.foto}></img>
          <p style={styles.heroSubtitle}>Desarrollador Web | Desarrollador de Aplicaciones de Escritorio | Desarrollador Móvil</p>
          <a onClick={handleScroll} style={styles.ctaButton}>Contáctame</a>
        </div>
      </section>

      <section id="about" ref={sobreMiRef} style={styles.section}>
        <h2 style={styles.sectionTitle}>Sobre mí</h2>
        Soy desarrollador con experiencia en React JS, React Native, ASP.NET, Entity Framework, HTML/CSS, JavaScript, Java, C#, SQL, entre otras. Me especializo en crear soluciones tecnológicas que combinan rendimiento, buenas prácticas y experiencias de usuario fluidas. Graduado de la carrera de Analista Programador en el instituto CTC (CLAEH).
      </section>

      {/* proyectos */}
      <section id="projects" ref={proyectosRef} style={styles.section}>
        <h2 style={styles.sectionTitle}>Proyectos</h2>
        <div style={styles.projectsGrid}>
          <div style={styles.projectCard}>
            <h3 style={styles.projectTitle}>Proyecto de gestión de gimnasio</h3>
            <p style={styles.text}>Aplicación de escritorio realizada para atender las necesidades de un cliente. Permite manejar los aspectos fundamentales de su negocio</p>
            <a href="https://github.com/tuusuario/proyecto-web" style={styles.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
          </div>
          <div style={styles.projectCard}>
            <h3 style={styles.projectTitle}>Juego de memorizar para móvil</h3>
            <p style={styles.text}>Juego de memorizar una secuencia de colores, aumentando su dificultad según avanza el nivel. Realizado con React Native</p>
            <a href="https://github.com/tuusuario/proyecto-movil" style={styles.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
          </div>
        </div>
      </section>

      {/* habilidades */}
      <section id="skills" ref={habilidadesRef} style={styles.section}>
        <h2 style={styles.sectionTitle}>Tecnologías</h2>
        <ul style={styles.skillsList}>
          {['JavaScript', 'React', 'Node.js', 'React Native', 'CSS', 'HTML', 'SQL', 'C#', 'Java', 'ASP.net', 'Entity Framework'].map((skill, index) => (
            <li key={index} style={styles.skillItem}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* contacto */}
      <section id="contact" ref={contactoRef} style={styles.section}>
        <h2 style={styles.sectionTitle}>Contacto</h2>
        <p style={styles.text}>Estoy abierto a nuevas oportunidades laborales. Si estás interesado en darme una oportunidad, te dejo mi información de contacto:</p>
        <p style={styles.contactInfo}>Teléfono: <a href="tel:+5999300547" style={styles.link}>099300547</a></p>
        <p style={styles.contactInfo}>Correo Electrónico: <a href="mailto:mateovizio93@gmail.com" style={styles.link}>mateovizio93@gmail.com</a></p>
        <a href="`${process.env.PUBLIC_URL}/CvMateoVizio.pdf`" style={styles.downloadButton} download>Descargar Currículum</a>
      </section>

      {/* footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 Mateo Vizio. Todos los derechos reservados.</p>
        <div style={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/tuusuario" style={styles.footerLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/tuusuario" style={styles.footerLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

const styles = {
    homeContainer: {
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      heroSection: {
        backgroundColor: '#010712',
        color: '#fff',
        padding: '80px 20px',
        textAlign: 'center',
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
        cursor: "pointer"
      },
      section: {
        padding: '40px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: "center"
      },
      sectionTitle: {
        fontSize: '2rem',
        marginBottom: '20px',
        textAlign: 'center',
      },
      text: {
        marginBottom: '15px',
      },
      projectsGrid: {
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      },
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
        justifyContent:"center"
      },
      skillItem: {
        background: '#3F5EBA',
        padding: '5px 10px',
        borderRadius: '1px',
        color: "white",
        fontSize: "14px"
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
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px',
      },
      footerText: {
        marginBottom: '10px',
      },
      socialLinks: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
      },
      footerLink: {
        color: '#61dafb',
        textDecoration: 'none',
      },
  contactInfo: {
    fontSize: '1rem',
    marginBottom: '10px',
  },
  downloadButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#3fa0bb',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '10px',
  },
  foto:{
    height: "240px"
  }
};

export default Home;
