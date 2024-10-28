import React from "react";
import Button from "../../components/Button";

const PurchaseSummary = () => {
  return (
    <section className="col-span-2 min-h-4 border-4 border-white rounded-md flex flex-col justify-between items-left p-5 bg-gradient-to-t from-blue-950/60 to-blue-300/40 shadow-md">
      <div className="flex flex-row">
        <div>Quantidade: </div>
        <Button name="-" /> 
        <div>0</div>
        <Button name="+" />
      </div>
      <span>Inventário: 0</span>
    </section>
  );
};

export default PurchaseSummary;
