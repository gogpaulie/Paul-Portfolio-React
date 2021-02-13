import React from 'react';
import styles from './Technologies.module.css';

import sass from '../../assets/icons/sass.svg';
import npm from '../../assets/icons/npm.svg';
import node from '../../assets/icons/nodejs-original.svg';
import mongo from '../../assets/icons/mongodb-original.svg';

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
        <img src={mongo} alt='' class={styles.image} />
      </div>
      <div className={styles.imageContainer}>
        <img src={node} alt='' class={styles.image} />
      </div>
    </>
  );
};

export default Tools;
