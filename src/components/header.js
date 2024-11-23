import React, { useState, useEffect, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TranslationContext } from '../contexts/TranslationContext';


const Header = ({ sobreMiRef, proyectosRef, habilidadesRef, contactoRef, educacionRef, toggleTheme, isDayMode, toggleMenu, setMostrarMenu ,mostrarMenu}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Español");
  const [showMenu, setShowMenu] = useState(false);
  const [iconoHamburguesa, setIconoHamburguesa] = useState("☰");

  const isTabletOrAbove = useMediaQuery({ query: '(max-width: 1020px)' });
  
  const { translations, switchLanguage } = useContext(TranslationContext);
  
  useEffect(() => {
    setIconoHamburguesa(mostrarMenu ? "✖" : "☰");
  },[mostrarMenu])
  

  const handleScroll = (targetRef) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
    
  };
  

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  const handleIcono = () => {
    setIconoHamburguesa(iconoHamburguesa === "☰" ? "✖" : "☰");
    setMostrarMenu(!mostrarMenu);
    console.log("cambio showMenu por handleIcono")
  };

  const handleLanguageChange = () => {
    switchLanguage("es");
    setSelectedLanguage("Español");
    setShowDropdown(false);

  }
  
  const handleLanguageChange2 = () => {
    switchLanguage("en");
    setSelectedLanguage("Inglés");
    setShowDropdown(false);
  } 

  
  
  
  

  return (
    <div style={{...styles.headerContainer , backgroundColor: isDayMode ? "#1c306a" : "#070F18"}}>
      <div style={styles.toggleMenu} onClick={handleIcono}>
        {isTabletOrAbove && <span onClick={toggleMenu} style={styles.hamburgerIcon}>{iconoHamburguesa}</span>}
      </div>

      

      {/* Menú normal en pantallas grandes */}
      {!isTabletOrAbove && (
        <ul style={styles.list}>
          <li style={styles.listItem} onClick={() => handleScroll(sobreMiRef)}>{translations.aboutMe}</li>
          <li style={styles.listItem} onClick={() => handleScroll(proyectosRef)}>{translations.projects}</li>
          <li style={styles.listItem} onClick={() => handleScroll(habilidadesRef)}>{translations.skills}</li>
          <li style={styles.listItem} onClick={() => handleScroll(educacionRef)}>{translations.education}</li>
          <li style={styles.listItem} onClick={() => handleScroll(contactoRef)}>{translations.contact}</li>
        </ul>
      )}

      <div style={{...styles.selectContainer, display: mostrarMenu && "none"}}>
        <button
          style={styles.selectButton}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedLanguage}
          <span style={styles.selectIcon}>▼</span>
        </button>
        {showDropdown &&(
          <ul style={styles.dropdownList}>
            <li style={styles.dropdownListItem} onClick={handleLanguageChange}>Español</li>
            <li style={styles.dropdownListItem} onClick={handleLanguageChange2}>Inglés</li>
          </ul>
        )}
      </div>

      <div style={styles.toggleContainer}>
        <label style={styles.switch}>
          <input 
            type="checkbox" 
            checked={isDayMode} 
            onChange={toggleTheme} 
            style={styles.checkbox} 
          />
          <span style={{ ...styles.slider, backgroundColor: isDayMode ? '#6594DF' : '#252024' }}>
            <span style={isDayMode ? styles.sunIcon : styles.moonIcon}>
              {isDayMode ? '🌞' : '🌙'}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
};

const styles = {
  headerContainer: {
    position: "fixed",
    top: 0,
    zIndex: 1000,
    backgroundColor: "#1c306a",
    width: "100%",
    height: "50px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.4s ease"
  },
  toggleMenu: {
    position: "absolute",
    left: "20px",
    cursor: "pointer",
  },
  hamburgerIcon: {
    fontSize: "30px",
    transition: "transform 0.4s ease"
  },
  menuHamburguesa: {
    position: "absolute",
    top: "50px",
    left: 0,
    backgroundColor: "#1c306a",
    width: "100%",
    padding: "10px 0",
    listStyleType: "none",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  list: {
    listStyleType: "none",
    display: "flex",
    padding: 0,
    justifyContent: "space-between",
    width: "90%",
    fontWeight: 600,
    gap: "7px",
    maxWidth: "600px",
    margin: 0,
  },
  listItem: {
    cursor: "pointer",
  },
  selectContainer: {
    position: "absolute",
    right: "80px",
    marginRight: "20px"
  },
  selectButton: {
    backgroundColor: "#ffffff",
    color: "#1c306a",
    border: "1px solid #ccc",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontWeight: "bold",
    minWidth: "100px",
  },
  selectIcon: {
    fontSize: "12px",
    marginLeft: "auto",
  },
  dropdownList: {
    position: "absolute",
    top: "40px",
    right: "0",
    backgroundColor: "#ffffff",
    color: "#1c306a",
    border: "1px solid #ccc",
    borderRadius: "4px",
    listStyleType: "none",
    padding: "5px 0",
    margin: 0,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    minWidth: "100px",
    zIndex: 1500,
  },
  dropdownListItem: {
    padding: "8px 12px",
    fontSize: "14px",
    cursor: "pointer",
  },
  toggleContainer: {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
  },
  switch: {
    position: "relative",
    display: "inline-block",
    width: "60px",
    height: "34px",
  },
  checkbox: {
    opacity: 0,
    width: 0,
    height: 0,
  },
  slider: {
    position: "absolute",
    cursor: "pointer",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "#275AAB",
    transition: "0.4s",
    borderRadius: "34px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0 5px",
  },
  sunIcon: {
    fontSize: "20px",
    transition: "transform 0.4s",
    transform: "translateX(26px)",
    userSelect: "none"
  },
  moonIcon: {
    fontSize: "20px",
    transition: "transform 0.4s",
    transform: "translateX(0)",
    userSelect: "none"
  },
};

export default Header;
