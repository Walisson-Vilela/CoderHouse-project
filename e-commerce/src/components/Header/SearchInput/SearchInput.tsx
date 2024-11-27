import React from "react";
import styles from './searchInput.module.css';

const SearchInput: React.FC = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Encontrar produto"
      />
      <span className={styles.icon}>
        <i className="material-icons">search</i>
      </span>
    </div>
  );
};

export default SearchInput;
