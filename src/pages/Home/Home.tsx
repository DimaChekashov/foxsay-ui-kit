import React from "react";
import {Link} from "react-router-dom";

import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h2 className={styles.homeTitle}>Build fast, responsive sites with foxsay-ui-kit</h2>
      <p className={styles.homeDesc}>Quickly design and customize responsive mobile-first sites with foxsay-ui-kit.</p>
      <Link to="docs" className={styles.homeLink}>
        Get started
      </Link>
    </div>
  );
};

export default Home;
