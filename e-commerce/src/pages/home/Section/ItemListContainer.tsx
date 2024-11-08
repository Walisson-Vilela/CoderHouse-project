import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

// Componente que carrega todos os Pokémons da PokeAPI
const ItemListContainer = () => {
  const [pokemons, setPokemons] = useState<any[]>([]); // Para armazenar todos os Pokémons
  const [loading, setLoading] = useState<boolean>(false);
  const [nextUrl, setNextUrl] = useState<string | null>(null); // URL para a próxima página de Pokémons

  // Função que faz a requisição à API para pegar a lista de Pokémons
  const fetchPokemons = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemons((prevPokemons) => [...prevPokemons, ...data.results]); // Adiciona os Pokémons anteriores com os novos
      setNextUrl(data.next); // Atualiza a URL da próxima página (caso haja mais Pokémons)
    } catch (error) {
      console.error("Erro ao carregar Pokémons:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Inicia a busca pela primeira página de Pokémons
    fetchPokemons("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
  }, []);

  // Carrega mais Pokémons quando o usuário rolar para o final da lista
  const loadMorePokemons = () => {
    if (nextUrl) {
      fetchPokemons(nextUrl);
    }
  };

  return (
    <div>
      <ItemList pokemons={pokemons} loading={loading} loadMore={loadMorePokemons} />
    </div>
  );
};

export default ItemListContainer;
