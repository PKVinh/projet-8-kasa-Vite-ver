import { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./Collapse.module.css"

const Collapse = ({ title, children }) => {
  // État pour savoir si le collapse est ouvert
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.collapse}>
      <div className={styles.collapseHeader} onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}><i className="fa-solid fa-chevron-up"></i></span>
      </div>
      <div className={`${styles.collapseContent} ${isOpen ? styles.openContent : ""}`}>
        {children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Collapse;