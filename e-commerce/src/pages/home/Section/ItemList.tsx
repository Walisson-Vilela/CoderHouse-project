import React from "react";
import Card from "../components/Card/Card";

// Tipagem dos produtos
interface IProducts {
  title: string;
  price: number;
  image: string;
}

interface IProps {
  products: IProducts[]; // Lista de produtos recebidos
  loading: boolean; // Para exibir o status de carregamento
  loadMore: () => void; // Função para carregar mais Produtos
}

const ItemList = ({ products, loading, loadMore }: IProps) => {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 auto-rows-min max-w-full p-4">
    {products.map((product) => (
      <Card key={product.title} product={product} />
    ))}
    {loading && <div>Carregando...</div>}
  </div>
  );
};

export default ItemList;
