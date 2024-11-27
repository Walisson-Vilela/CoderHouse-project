import React from "react";
import styles from "./asideMenu.module.css";

const AsideMenu = () => {
  const categories = ["Smartphones", "Áudio", "Smartwatch", "Informática", "Home-Office", "Casa Inteligente", "Carregadores"];

  return (
    <nav className={`p-3 ${styles.content}`}>
      <h2 className={styles.title}>Navegue entre Categorias</h2>
      <ul className="list-group">
        {categories.map((category, index) => (
          <li key={index} className={styles.listMenu}>
            {category.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AsideMenu;
