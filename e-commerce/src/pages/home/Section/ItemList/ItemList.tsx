import React from "react";
import Card from "../../components/Card/Card";
import styles from "./itemList.module.css";

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

const ItemList: React.FC<IProps> = ({ products, loading }) => {
  return (
    <div className={styles.gridContainer}>
      {products.map((product) => (
        <Card key={product.title} product={product} />
      ))}

      {loading && <div className={styles.loading}>Carregando...</div>}
    </div>
  );
};

export default ItemList;
