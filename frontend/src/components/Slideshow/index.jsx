import { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./Slideshow.module.css"

function Slideshow({pictures}) {
  // Initialisation du state
  const [index, setIndex] = useState(0)

  const previousSlide = () => {
    setIndex((prevIndex) => prevIndex === 0 ? pictures.length - 1 : prevIndex - 1)
  }

  const nextSlide = () => {
    setIndex((nextIndex) => nextIndex === pictures.length - 1 ? 0 : nextIndex + 1)
  }

  return (
    <div className={styles.slideshow}>

      {pictures.length > 1 && (
        <i 
          className={`fa-solid fa-chevron-left ${styles.chevron} ${styles.chevronLeft}`} 
          onClick={previousSlide}
          aria-label="chevron-left"
          role="button"> 
        </i>
      )}

      <img src={pictures[index]} 
        alt={`Slide ${index + 1}`}
        className={styles.slideshowImage}/>
      
      {pictures.length > 1 && (
        <span className={styles.indexText}>{index + 1} / {pictures.length}</span>
      )}

      {pictures.length > 1 && (
        <i 
          className={`fa-solid fa-chevron-right ${styles.chevron} ${styles.chevronRight}`} 
          onClick={nextSlide}
          aria-label="chevron-right"
          role="button"> 
        </i>
      )}

    </div>
  );
};

Slideshow.propTypes = {
  pictures: PropTypes.string.isRequired,
};

export default Slideshow;
