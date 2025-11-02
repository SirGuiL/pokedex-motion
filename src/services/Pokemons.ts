import { PokemonsResponseSchema } from "@/schemas/pokedex";
import { PokemonDetailsSchema } from "@/schemas/pokemonDetails";

interface getProps {
  offset: number;
  limit: number;
  query?: string;
}

export class PokemonService {
  async get({ limit, offset, query }: getProps) {
    try {
      const response = await fetch(
        `/api/pokemons?limit=${limit}&offset=${offset}&query=${query}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch pokemons");
      }

      const parsed = PokemonsResponseSchema.parse(await response.json());

      return parsed;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("internal server error");
    }
  }

  async getById(id: string) {
    const response = await fetch(`/api/pokemons/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch pokemon");
    }

    const data = await response.json();

    const parsed = PokemonDetailsSchema.parse(data);

    return parsed;
  }
}
