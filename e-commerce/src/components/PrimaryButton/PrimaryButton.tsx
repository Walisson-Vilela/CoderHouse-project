import React, { useState } from "react";
import styles from './primaryButton.module.css';

interface Iprops {
  name: string;
  onClick: () => void;
  disabled: boolean;
}

const PrimaryButton = ({ name, onClick, disabled }: Iprops) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${styles.button} ${disabled ? styles.disabled : isHovered ? styles.hovered : styles.default}`}
    >
      {name}
    </button>
  );
};

export default PrimaryButton;
