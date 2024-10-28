import React from "react";

interface Iprops {
  name: string;
  onClick: () => void;
  disabled: boolean;
}

const Button = ({ name, onClick, disabled }: Iprops) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`h-9 items-center flex border-2 border-t-white rounded-md px-2 shadow-md ${
        disabled
          ? "bg-gray-400 cursor-not-allowed" // Cor e estilo quando desabilitado
          : "bg-gradient-to-t from-blue-800 to-blue-300 border-indigo-400"
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
