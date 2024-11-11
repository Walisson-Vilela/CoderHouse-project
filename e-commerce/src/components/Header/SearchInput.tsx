import React from "react";

const SearchInput = () => {
  return (
    <div className="mr-4 relative">
      <input
        className="bg-slate-300/30 h-8 p-4 rounded-full text-sm w-72 pr-10 outline-primaryColor"
        placeholder="Encontrar produto"
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500/50 pt-1">
        <i className="material-icons">search</i>
      </span>
    </div>
  );
};

export default SearchInput;
