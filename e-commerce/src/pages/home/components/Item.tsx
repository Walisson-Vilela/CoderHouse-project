import React, { useState } from "react";
import PrimaryButton from "../../../components/PrimaryButton";

// Tipagem para os dados do produto
interface IProducts {
  title: string;
  price: number;
  image: string;
}

interface ItemProps {
  product: IProducts; // O produto a ser exibido
}

const Item = ({ product }: ItemProps) => {
  const [loading, setLoading] = useState<boolean>(true); // Inicialmente, a imagem está carregando

  // Quando a imagem terminar de carregar, atualiza o estado de loading
  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="w-80 h-[520px] border bg-white text-primaryColor border-secondaryColor rounded-md flex flex-col p-4 shadow-md justify-between text-center ">
      <h2 className="mt-2 mb-8 text-center font-bold">{product.title}</h2>
      <div className="flex justify-center  w-full h-56 items-center">
        <div className="flex justify-center w-36 h-auto">
          <img
            src={product.image}
            alt={product.title}
            className=" w-60 h-70 rounded-md"
            onLoad={handleImageLoad}
            style={{ display: loading ? "none" : "block" }}
          />
        </div>
      </div>
      <p className="mt-2 text-primaryColor font-semibold">
        Preço: ${product.price}
      </p>
      {product.price > 100 && (
        <p className="mt-2 text-sm mb-2 text-primaryColor font-light">
          Em até 2x de ${(product.price / 2).toFixed(2)} sem juros
        </p>
      )}
      <div className="flex flex-col" >
        <PrimaryButton name="detalhes" />
        <p className="mt-2 text-sm text-primaryColor font-light">
          Total em estoque: {product.rating.count}
        </p>
      </div>
    </div>
  );
};

export default Item;
