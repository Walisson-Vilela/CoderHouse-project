import React, { useState } from "react";

interface Iprops {
  name: string;
  onClick: () => void;
  disabled: boolean;
}

const Button = ({ name, onClick, disabled }: Iprops) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`text-white h-9 items-center flex rounded p-4 shadow-md text-center justify-center transition-colors duration-150 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : isHovered
          ? "bg-tertiaryColor" // Cor mais clara ao passar o mouse
          : "bg-primaryColor"
      }`}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Button;