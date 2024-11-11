import React, { useState } from "react";

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
      className={` h-9 items-center text-sm font-semibold flex rounded-full p-4 text-center justify-center transition-colors duration-150 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : isHovered
          ? "bg-primaryColor text-white" // Cor mais clara ao passar o mouse
          : "bg-white text-primaryColor border-primaryColor border-2" // Corrigido "bg-withe" para "bg-white"
      }`}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default PrimaryButton;
