import React from "react";
import styles from "./aside.module.css";

const Aside = () => {
  const categories = ["Smartphones", "Áudio", "Smartwatch", "Informática", "Home-Office", "Casa Inteligente", "Carregadores"];

  return (
    <aside className={`p-3 ${styles.content}`}>
      <h2 className="mb-3">Navegue entre Categorias</h2>
      <ul className="list-group">
        {categories.map((category, index) => (
          <li key={index} className="list-group-item list-group-item-action">
            {category.toUpperCase()}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
