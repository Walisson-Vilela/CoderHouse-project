import React from "react";
import ItemList from "./ItemList";

const items = [
  {
    id: 1,
    title: "Música",
    description: "CD RBD",
    price: 10.0,
    pictureUrl: "/public/images/rbd.jpg",
  },
  {
    id: 2,
    title: "Livro",
    description: "O Senhor dos Anéis - As duas torres",
    price: 20.0,
    pictureUrl: "/public/images/senhor.png",
  },
];

const ItemListContainer = () => {
  return (
    <div >
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
