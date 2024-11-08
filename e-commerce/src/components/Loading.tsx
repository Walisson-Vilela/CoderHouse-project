import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full bg-black bg-opacity-20 flex justify-center top-0 left-0 fixed items-center z-50" >
      <div className="w-16 h-16 border-t-4 border-l-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export { Loading };
