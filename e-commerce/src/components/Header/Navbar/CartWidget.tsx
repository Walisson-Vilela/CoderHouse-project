import React from "react";
import CartWidgetImg from "../../../../public/images/cart.svg"

const CarWidget = () => {
  return (
    <div className="mx-2">
      <img src={CartWidgetImg} className="w-8" alt="Dogs Icon" />
    </div>
  );
};

export default CarWidget;
