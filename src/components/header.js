import React from 'react';
import { useRef } from 'react';

const Header = ({ sobreMiRef, proyectosRef, habilidadesRef, contactoRef }) => {

  const handleScroll = (targetRef) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={styles.headerContainer}>
      <ul style={styles.list}>
        <li style={styles.listItem} onClick={() => handleScroll(sobreMiRef)}>Sobre mí</li>
        <li style={styles.listItem} onClick={() => handleScroll(proyectosRef)}>Proyectos</li>
        <li style={styles.listItem} onClick={() => handleScroll(habilidadesRef)}>Tecnologías</li>
        <li style={styles.listItem} onClick={() => handleScroll(contactoRef)}>Contacto</li>
      </ul>
    </div>
  );
};

const styles = {
  headerContainer: {
    position: "fixed",
    top: 0,
    zIndex: 1000,
    backgroundColor: "#3F5EBA",
    width: "100%",
    height: "50px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  list: {
    listStyleType: "none",
    display: "flex",
    padding: 0,
    justifyContent: "space-between",
    width: "90%",
    fontWeight: 600,
    gap: "7px",
    maxWidth: "600px"
  },
  listItem: {
    cursor: "pointer"
  },
};

export default Header;
