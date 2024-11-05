import React from "react";

// Defina o tipo para o item
interface IProps {
  item: {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
  };
}

const Item = ({ item }: IProps) => {
  return (
    <div>
      <h1>{item.nome}</h1>
      <h2>{item.valor}</h2>
      <p>{item.descricao}</p>
    </div>
  );
};

export default Item;