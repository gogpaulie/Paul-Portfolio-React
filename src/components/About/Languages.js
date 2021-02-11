import React from 'react';
import styles from './Technologies.module.css';

import html from '../../assets/icons/html5-original.svg';
import css from '../../assets/icons/css3-original.svg';
import js from '../../assets/icons/javascript-original.svg';
import react from '../../assets/icons/react-original.svg';

const Languages = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <img src={html} alt='' className={styles.image} />
      </div>
      <div className={styles.imageContainer}>
        <img src={css} alt='' className={styles.image} />
      </div>
      <div className={styles.imageContainer}>
        <img src={js} alt='' className={styles.image} />
      </div>
      <div className={styles.imageContainer}>
        <img src={react} alt='' className={styles.image} />
      </div>
    </>
  );
};

export default Languages;
