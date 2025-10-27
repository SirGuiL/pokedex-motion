import z from "zod";

export const PokemonSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

export const PokemonsResponseSchema = z.object({
  results: z.array(PokemonSchema),
  metadata: z.object({
    count: z.number(),
    offset: z.number(),
    limit: z.number(),
  }),
});

export type Pokemon = z.infer<typeof PokemonSchema>;
export type PokemonsResponse = z.infer<typeof PokemonsResponseSchema>;
