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
      className={`text-white h-9 items-center flex rounded p-4 shadow-md text-center justify-center ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-primaryColor"
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
