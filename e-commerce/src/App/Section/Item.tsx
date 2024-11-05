import React from "react";
import Button from "../../components/Button";

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
        <img src={item.pictureUrl} alt="Imagem" />
        <p>{item.description}</p>
        <Button name="Veja mais detalhes do produto" />
      </div>
    </div>
  );
};

export default Item;
