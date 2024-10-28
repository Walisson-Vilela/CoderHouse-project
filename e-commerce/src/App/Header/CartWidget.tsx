import React from "react";
import CartWidgetImg from "../../images/cart.svg";

const CarWidget = () => {
  return (
    <div className="mx-2">
      <img src={CartWidgetImg} className="w-10" alt="Dogs Icon" />
    </div>
  );
};

export default CarWidget;
