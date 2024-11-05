import React, { useState } from "react";
import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount";

const Section = () => {

  return (
    <div className="p-4">
      <ItemListContainer />
      <ItemCount />
    </div>
  );
};

export default Section;
