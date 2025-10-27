import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";

import { PokemonService } from "@/services/Pokemons";
import { PokemonDetails } from "@/schemas/pokemonDetails";
import { useSelectedPokemonStore } from "@/stores/useSelectedPokemon";
import { useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface CardProps {
  name: string;
}

const getPokemon = async (name: string) => {
  const pokemonService = new PokemonService();

  return await pokemonService.getById(name);
};

const badgeColors = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  bug: "bg-green-500",
  normal: "bg-gray-500",
  poison: "bg-purple-500",
  electric: "bg-yellow-500",
  ground: "bg-yellow-500",
  fairy: "bg-pink-500",
  flying: "bg-indigo-500",
} as const;

type PokemonType = keyof typeof badgeColors;

export const Card = ({ name }: CardProps) => {
  const { setSelectedPokemon } = useSelectedPokemonStore();

  const { data, isLoading, error } = useQuery({
    queryFn: () => getPokemon(name),
    queryKey: ["pokemon", name],
  });

  const handleSelectPokemon = useCallback(
    (pokemon: PokemonDetails) => {
      setSelectedPokemon(pokemon);
    },
    [setSelectedPokemon]
  );

  if (isLoading) {
    return (
      <Skeleton className="min-h-[130px] max-h-[130px] min-w-[384px] max-w-[384px]" />
    );
  }

  if (error) {
    return (
      <div>
        <div>{error.message}</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <span>No data</span>
      </div>
    );
  }

  const frontSprites = Object.entries(data.sprites)
    .filter(([key, value]) => key.startsWith("front_") && value)
    .map(([, value]) => value as string);

  return (
    <motion.div
      className="bg-white flex flex-col gap-6 rounded-md p-2 pb-4 relative cursor-pointer"
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        scale: 1.03,
      }}
      whileFocus={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.9,
      }}
      onClick={() => handleSelectPokemon(data)}
      onKeyDown={(e) => {
        console.log(e.key);
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleSelectPokemon(data);
        }
      }}
    >
      <span className="text-gray-800 text-sm">#{data.id}</span>
      <Image
        src={
          frontSprites[0]
            ? frontSprites[0].replaceAll(
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon",
                "/api/sprites"
              )
            : ""
        }
        alt={data.name}
        width={120}
        height={120}
        className="absolute left-1/2 -translate-x-1/2 -top-16"
      />
      <div className="flex flex-col items-center justify-center gap-3">
        <span className="text-gray-800 text-lg capitalize">{name}</span>

        <div className="flex items-center gap-2">
          {data.types.map((type, index) => (
            <Badge
              key={index}
              className={cn(
                "text-sm capitalize",
                badgeColors[type.type.name as PokemonType]
              )}
            >
              {type.type.name}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
