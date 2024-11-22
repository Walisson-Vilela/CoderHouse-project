import React from "react";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import styles from "./section.module.css";

const Section: React.FC = () => {
  return (
    <div className={styles.sectionContainer}>
      <ItemListContainer />
    </div>
  );
};

export default Section;
