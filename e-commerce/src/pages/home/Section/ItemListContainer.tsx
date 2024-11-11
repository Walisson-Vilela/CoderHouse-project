import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

// Componente que carrega todos os Produtos da FakeStoreAPI
const ItemListContainer = () => {
  const [products, setProducts] = useState<any[]>([]); // Para armazenar todos os produtos
  const [loading, setLoading] = useState<boolean>(false);
  const [nextUrl, setNextUrl] = useState<string | null>(null); // URL para a próxima página de produtos

  // Função que faz a requisição à API para pegar a lista de produtos
  const fetchProducts = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      // Como a resposta já é um array de produtos, podemos adicionar diretamente os novos produtos
      setProducts((prevProducts) => [...prevProducts, ...data]);

      // Não há `next` no fakestoreapi, então o campo `nextUrl` pode ser omitido ou removido
      setNextUrl(null); // Não há paginação na FakeStoreAPI para esse endpoint específico
    } catch (error) {
      console.error("Erro ao carregar Produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Inicia a busca pela primeira página de produtos
    fetchProducts("https://fakestoreapi.com/products/");
  }, []);

  // Carrega mais produtos quando o usuário rolar para o final da lista
  const loadMoreProducts = () => {
    // A FakeStoreAPI não possui paginação, então podemos omitir a função `loadMoreProducts`
    if (nextUrl) {
      fetchProducts(nextUrl);
    }
  };

  return (
    <div className="flex justify-center">
      <ItemList
        products={products}
        loading={loading}
        loadMore={loadMoreProducts}
      />
    </div>
  );
};

export default ItemListContainer;
