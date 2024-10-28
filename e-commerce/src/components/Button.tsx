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
      className="h-9 items-center flex border-2 border-t-white border-indigo-400 rounded-md px-2 bg-gradient-to-t from-blue-800 to-blue-300 shadow-md "
    >
      {name}
    </button>
  );
};

export default Button;
