import React from "react";

import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h3 className={styles.aboutTitle}>We're on a mission to make building UIs more accessible</h3>
      <p className={styles.aboutDesc}>
        Our mission is to empower anyone to build UIs, faster. We're reducing the entry barrier, making design skills
        accessible.
      </p>
    </div>
  );
};

export default About;
