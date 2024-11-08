import React from "react";
import Item from "../components/Item";

// Tipagem para o Pokémon
interface IPokemon {
  name: string;
  url: string;
}

interface IProps {
  pokemons: IPokemon[]; // Lista de Pokémons recebidos
  loading: boolean; // Para exibir o status de carregamento
  loadMore: () => void; // Função para carregar mais Pokémons
}

const ItemList = ({ pokemons, loading, loadMore }: IProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {pokemons.map((pokemon) => (
        <Item key={pokemon.name} pokemon={pokemon} />
      ))}
      {loading && <div>Carregando...</div>}
      {!loading && (
        <button
          onClick={loadMore}
          className="mt-4 p-2 bg-blue-500 text-white rounded-md"
        >
          Carregar mais Pokémons
        </button>
      )}
    </div>
  );
};

export default ItemList;
