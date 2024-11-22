import React, { useEffect, useState } from "react";
import { Loading } from "../../../components/Loading";
import ItemDetail from "../components/ItemDetail";

// Definindo o tipo para um item
interface IItem {
  id: number;
  title: string;
  description: string;
  price: number;
  priceConditions: string;
  pictureUrl: string;
  internMemory: string;
  dualChip: string;
  ramMemory: string;
  color: string;
  footer: string;
}

const ItemDetailContainer = () => {
  const [itemsData, setItemsData] = useState<IItem[]>([]); // Agora o estado é um array de IItem
  const [loading, setLoading] = useState<boolean>(false);

  // Função para simular o carregamento dos dados
  const getItem = (): Promise<IItem[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items); // Resolve com os itens passados pela prop
      }, 1000); // Espera 2 segundos para simular uma requisição
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Indica que está carregando
      try {
        const result = await getItem();
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
    return (
      <div>
        <Loading />
      </div>
    ); // Exibe uma mensagem de loading enquanto os dados não chegam
  }

  return (
    <div className="flex justify-center w-full h-auto">
      {/* Agora estamos passando um único item */}
      {itemsData.length > 0 && <ItemDetail item={itemsData[0]} />}{" "}
      {/* Passando o primeiro item da lista */}
    </div>
  );
};

export default ItemDetailContainer;
