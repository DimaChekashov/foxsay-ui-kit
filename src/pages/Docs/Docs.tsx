import React from "react";
import {Link} from "react-router-dom";
import {Button, Tag} from "../../docs-components";

import styles from "./Docs.module.scss";

const Docs: React.FC = () => {
  return (
    <div className={styles.docs}>
      <div className={styles.docsSidebar}>
        <h3 className={styles.docsListTitle}>Title</h3>
        <ul className={styles.docsList}>
          <li>
            <Link to="/">Test</Link>
          </li>
          <li>
            <Link to="/">Test</Link>
          </li>
          <li>
            <Link to="/">Test</Link>
          </li>
          <li>
            <Link to="/">Test</Link>
          </li>
          <li>
            <Link to="/">Test</Link>
          </li>
        </ul>
      </div>
      <div className={styles.docsChart}>
        <h3 className={styles.docsTitle}>Test Title</h3>
        <p className={styles.docsDesc}>Test description</p>
        <Button />
        <Tag />
      </div>
    </div>
  );
};

export default Docs;
