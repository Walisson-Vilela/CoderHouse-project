import React from "react";
import ActiveLastBreadcrumb from "../BreadcrumbPages/ActiveLastBreadcrumb";
import styles from './sortProductMenu.module.css';

const SortProductMenu = () => {
  return (
    <div className={styles.container}>
      <ActiveLastBreadcrumb />
      SortProducts
    </div>
  );
};

export default SortProductMenu;
