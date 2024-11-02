import React, { useEffect, useState } from "react";

const dados = [
  { "id": 1, "nome": "Walisson", "descricao": "Um texto qualquer", "valor": 10 },
  { "id": 2, "nome": "Walisson", "descricao": "Um texto qualquer", "valor": 10 },
  { "id": 3, "nome": "Walisson", "descricao": "Um texto qualquer", "valor": 10 },
  { "id": 4, "nome": "Walisson", "descricao": "Um texto qualquer", "valor": 10 },
  { "id": 5, "nome": "Walisson", "descricao": "Um texto qualquer", "valor": 10 },
  { "id": 6, "nome": "Walisson", "descricao": "Um texto qualquer", "valor": 10 },
  { "id": 7, "nome": "Walisson", "descricao": "Um texto qualquer", "valor": 10 },
  { "id": 8, "nome": "Walisson", "descricao": "Um texto qualquer", "valor": 10 },
  { "id": 9, "nome": "Walisson", "descricao": "Um texto qualquer", "valor": 10 },
  { "id": 10, "nome": "Walisson", "descricao": "Um texto qualquer", "valor": 10 },
];

interface ICard {
  id_name: string;
  id: number;
  nome: string;
  descricao: string;
  valor: number;
}

interface Iprops {
  image: string;
}

const Card = ({ image }: Iprops) => {
  const [items, setItems] = useState<ICard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetCards = (): Promise<ICard[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dados);
      }, 3000);
    });
  };

  useEffect(() => {
    const onMount = async () => {
      setLoading(true);
      const result = await handleGetCards();

      const listProduct = result.map(product => {
        return{
            ...product,
            id_name: product.id + product.nome
        }
      })

      console.log("listProduct", listProduct)
      console.log("result", result)

      setItems(result);
      setLoading(false);
      console.log("Pronto");
    };

    // handleGetCards()
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log("Erro", error);
    //   });
    onMount();
  }, []);

  return (
    <div>
      {loading && (
        <>
          <img src={image} alt="" />
        </>
      )}
    </div>
  );
};

export default Card;
