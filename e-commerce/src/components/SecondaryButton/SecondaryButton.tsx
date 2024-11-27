import React from "react";
import styles from "./secondaryButton.module.css";

interface Iprops {
  name: string;
  onClick: () => void;
  disabled: boolean;
}

const SecondaryButton = ({ name, onClick, disabled }: Iprops) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${disabled ? styles.disabled : styles.default}`}
    >
      {name}
    </button>
  );
};

export default SecondaryButton;
