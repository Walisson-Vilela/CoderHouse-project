import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Products from "../../../../../data/smartphones.json";
import styles from "./itemListContainer.module.css";

// Definir a tipagem para um produto
interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Componente que carrega todos os Produtos da FakeStoreAPI
const ItemListContainer: React.FC = () => {
  // Tipar os estados
  const [products, setProducts] = useState<Product[]>([]); // Tipando o estado products como um array de produtos
  const [loading, setLoading] = useState<boolean>(false); // Tipando loading como booleano
  const [nextUrl, setNextUrl] = useState<string | null>(null); // nextUrl pode ser string ou null (não usado nesse caso)

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // Simulando uma chamada de API com o arquivo mock
      const data: Product[] = Products; // Tipando o mock de produtos como array de Product

      // Como a resposta já é um array de produtos, podemos adicionar diretamente os novos produtos
      setProducts((prevProducts) => [...prevProducts, ...data]);

      // Não há paginação no mock, então o campo `nextUrl` pode ser omitido
      setNextUrl(null);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Inicia a busca pelos produtos mockados
    fetchProducts();
  }, []);

  const loadMoreProducts = () => {
    // Como não há paginação no mock, podemos omitir a função `loadMoreProducts`
    if (nextUrl) {
      fetchProducts();
    }
  };

  return (
    <div className={styles.container}>
   
      <ItemList
        products={products}
        loading={loading}
        loadMore={loadMoreProducts}
      />
    </div>
  );
};

export default ItemListContainer;
