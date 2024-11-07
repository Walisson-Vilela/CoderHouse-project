import React from "react";
import Button from "../Button";

interface Iprops {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    priceConditions: string;
    pictureUrl: string;
    internMemory: string;
    dualChip: string;
    ramMemory: string;
    color: string;
    footer: string;
  };
}

const ItemDetail = ({ item }: Iprops) => {
  return (
    <div className="w-full flex justify-center flex-row mx-40">
      <img className="w-4/12 h-auto m-2" src={item.pictureUrl} alt="Imagem" />
      <div className="w-4/12 flex flex-col text-left align-top">
        <h1 className="p-2 font-semibold">{item.title}</h1>
        <h1 className="p-2 font-semibold">{item.price}</h1>
        <p className="mt-2 mb-2">{item.priceConditions}</p>
        <p className="mt-2 mb-2">Memória Interna: {item.internMemory}</p>
        <p className="mt-2 mb-2">É Dual SIM: {item.dualChip}</p>
        <p className="mt-2 mb-2">Memória Ram: {item.ramMemory}</p>
        <p className="mt-2 mb-2">{item.color}</p>
        <p className="mt-2 mb-2">{item.footer}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
