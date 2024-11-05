import React, { useEffect, useState } from "react";
import Item from "./Item";

// Defina um tipo para o item (ICard)
interface ICard {
  id: number;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
}

interface IProps {
  items: ICard[]; // items é uma lista de ICard
}

const ItemList = ({ items }: IProps) => {
  const [itemsData, setItemsData] = useState<ICard[]>([]); // O estado também deve ser uma lista de ICard
  const [loading, setLoading] = useState<boolean>(false);

  // Função para simular o carregamento dos dados
  const handleGetCards = (): Promise<ICard[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items); // Resolve com os itens passados pela prop
      }, 3000); // Espera 3 segundos para simular uma requisição
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Indica que está carregando
      try {
        const result = await handleGetCards();
        setItemsData(result); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false); // Desativa o loading após o carregamento
      }
    };

    fetchData();
  }, []); // A dependência vazia faz com que o efeito seja executado apenas uma vez, na montagem do componente

  if (loading) {
    return <div>Carregando...</div>; // Exibe uma mensagem de loading enquanto os dados não chegam
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {itemsData.map((item) => (
        <Item key={item.id} item={item} /> // Passa um item individual para o Item
      ))}
    </div>
  );
};

export default ItemList;