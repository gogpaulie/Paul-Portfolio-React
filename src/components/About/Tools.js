import React from 'react';
import styles from './Technologies.module.css';

import sass from '../../assets/icons/sass.svg';
import npm from '../../assets/icons/npm.svg';
import node from '../../assets/icons/nodejs-original.svg';
import github from '../../assets/icons/github.svg';

const Tools = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <img src={sass} alt='' class={styles.image} />
      </div>
      <div className={styles.imageContainer}>
        <img src={npm} alt='' class={styles.image} />
      </div>
      <div className={styles.imageContainer}>
        <img src={github} alt='' class={styles.image} />
      </div>
      <div className={styles.imageContainer}>
        <img src={node} alt='' class={styles.image} />
      </div>
    </>
  );
};

export default Tools;
