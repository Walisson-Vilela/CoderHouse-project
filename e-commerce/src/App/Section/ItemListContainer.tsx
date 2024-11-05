import React from "react";
import ItemList from "./ItemList";

const items = [
  { id: 1, nome: "Walisson", descricao: "Um texto qualquer", valor: 10 },
  { id: 2, nome: "João", descricao: "Outro texto qualquer", valor: 20 },
];

const ItemListContainer = () => {
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;