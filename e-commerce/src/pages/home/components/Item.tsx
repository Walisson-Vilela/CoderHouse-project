import React, { useState } from "react";

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
    <div className="min-h-[420px] border border-cyan-950 rounded-md flex flex-col p-4">
      <img
        src={product.image}
        alt={product.title}
        className="object-cover w-full h-auto rounded-md"
        onLoad={handleImageLoad} // Chama a função quando a imagem é carregada
        style={{ display: loading ? "none" : "block" }} // Oculta a imagem até que ela seja carregada
      />
      <h2 className="mt-2 font-bold">{product.title}</h2>
      <p className="mt-2 text-gray-700">Preço: ${product.price}</p>
    </div>
  );
};

export default Item;
