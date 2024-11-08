import React, { useEffect, useState } from "react";

// Tipagem para os dados do Pokémon
interface IPokemon {
  name: string;
  url: string;
}

interface IAbility {
  name: string;
  url: string;
}

interface IAbilityDetails {
  name: string;
  effect: string;
}

interface IPokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: IAbility;
  }[];
}

interface ItemProps {
  pokemon: IPokemon;
}

const Item = ({ pokemon }: ItemProps) => {
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(
    null
  );
  const [abilitiesDetails, setAbilitiesDetails] = useState<IAbilityDetails[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);

  // Função para buscar os detalhes do Pokémon usando a URL
  const fetchPokemonDetails = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonDetails(data); // Armazena os dados detalhados do Pokémon
      fetchAbilitiesDetails(data.abilities); // Após pegar o Pokémon, busca as abilities
    } catch (error) {
      console.error("Erro ao buscar detalhes do Pokémon:", error);
    } finally {
      setLoading(false); // Finaliza o loading
    }
  };

  // Função para buscar detalhes das abilities
  const fetchAbilitiesDetails = async (abilities: { ability: IAbility }[]) => {
    try {
      const abilitiesData = await Promise.all(
        abilities.map(async (ability) => {
          const response = await fetch(ability.ability.url);
          const data = await response.json();
          return {
            name: data.name,
            effect:
              data.effect_entries.find(
                (entry: any) => entry.language.name === "en"
              )?.effect ?? " ",
          };
        })
      );
      setAbilitiesDetails(abilitiesData); // Armazena as habilidades detalhadas
    } catch (error) {
      console.error("Erro ao buscar habilidades:", error);
    }
  };

  useEffect(() => {
    fetchPokemonDetails(pokemon.url); // Busca os dados quando o componente for montado
  }, [pokemon.url]);

  if (loading) {
    return <div>Carregando...</div>; // Exibe mensagem de carregamento enquanto busca os detalhes
  }

  return (
    <div className="w-80 min-h-[420px] bg-gradient-to-r from-amber-300 via-yellow-200 to-yellow-300 rounded-md flex flex-col">
      <h1 className=" pl-4 pt-4 font-semibold">
        {pokemonDetails?.name.charAt(0).toUpperCase() +
          pokemonDetails?.name.slice(1).toLowerCase()}
      </h1>
      <div className=" p-4 flex flex-col justify-center text-center ">
        <div className="bg-slate-100 w-full flex justify-center rounded-sm">
          <img
            className=" w-40 h-40 m-2"
            src={pokemonDetails?.sprites.front_default}
            alt={pokemonDetails?.name}
          />
        </div>
        <div className=" flex mt-2 w-full justify-between">
          <div className="mt-2 mb-2 text-xs text-left w-full flex-col">
            {abilitiesDetails.map((ability) => {
              const randomNumber = Math.floor(Math.random() * 100) + 1;
              return (
                <div className="mb-4">
                  <div
                    key={ability.name}
                    className="mt-2 flex w-full justify-between"
                  >
                    <span className="font-bold text-sm">
                      {ability?.name.charAt(0).toUpperCase() +
                        ability?.name.slice(1).toLowerCase()}
                    </span>
                    <span className="font-bold text-sm">{randomNumber}</span>
                  </div>
                  {/* Exibe o effect somente se o comprimento for menor que 150 */}
                  {ability.effect.length < 150 ? <p>{ability.effect}</p> : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
