import React, { useEffect, useState } from "react";

// Tipagem para os dados do Pokémon
interface IPokemon {
  name: string;
  url: string;
}

interface IPokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
}

interface ItemProps {
  pokemon: IPokemon;
}

const Item = ({ pokemon }: ItemProps) => {
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Função para buscar os detalhes do Pokémon usando a URL
  const fetchPokemonDetails = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonDetails(data); // Armazena os dados detalhados do Pokémon
    } catch (error) {
      console.error("Erro ao buscar detalhes do Pokémon:", error);
    } finally {
      setLoading(false); // Finaliza o loading
    }
  };

  useEffect(() => {
    fetchPokemonDetails(pokemon.url); // Busca os dados quando o componente for montado
  }, [pokemon.url]);

  if (loading) {
    return <div>Carregando...</div>; // Exibe mensagem de carregamento enquanto busca os detalhes
  }

  return (
    <div className="w-full max-w-80 h-96 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 rounded-md text-center flex justify-center flex-col">
      <h1 className="p-2 font-semibold">{pokemonDetails?.name}</h1>
      <div className="p-4 flex flex-col justify-center text-center items-center">
        <img
          className="w-40 h-40 m-2"
          src={pokemonDetails?.sprites.front_default}
          alt={pokemonDetails?.name}
        />
        <p className="mt-2 mb-2">
          Habilidades:{" "}
          {pokemonDetails?.abilities.map((ability) => ability.ability.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default Item;
