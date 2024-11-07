import React from "react";
import Button from "../Button";

// Defina o tipo para o item
interface IProps {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
  };
}

const Item = ({ item }: IProps) => {
  return (
    <div className="border border-black rounded-sm  text-center flex justify-center flex-col">
      <h1 className="bg-slate-100 p-2 font-semibold">{item.title}</h1>
      <div className="p-4 flex flex-col justify-center text-center items-center">
        <img className="w-full h-auto m-2" src={item.pictureUrl} alt="Imagem" />
        <p className="mt-2 mb-2">{item.description}</p>
        <div className="mt-2">
          <Button name="Veja mais detalhes do produto" />
        </div>
      </div>
    </div>
  );
};

export default Item;
