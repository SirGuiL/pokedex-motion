import z from "zod";

export const AbilitySchema = z.object({
  ability: z
    .object({
      name: z.string(),
      url: z.string(),
    })
    .nullish(),
  is_hidden: z.boolean().optional(),
  slot: z.number().optional(),
});

export type Ability = z.infer<typeof AbilitySchema>;

export const FormsSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export type Form = z.infer<typeof FormsSchema>;

export const GameIndicesSchema = z.object({
  game_index: z.number(),
  version: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

export type GameIndex = z.infer<typeof GameIndicesSchema>;

export const HeldItemsSchema = z.object({
  item: z.object({
    name: z.string(),
    url: z.string(),
  }),
  version_details: z.array(
    z.object({
      rarity: z.number(),
      version: z.object({
        name: z.string(),
        url: z.string(),
      }),
    })
  ),
});

export type HeldItem = z.infer<typeof HeldItemsSchema>;

export const MovesSchema = z.object({
  move: z.object({
    name: z.string(),
    url: z.string(),
  }),
  version_group_details: z.array(
    z.object({
      level_learned_at: z.number(),
      move_learn_method: z.object({
        name: z.string(),
        url: z.string(),
      }),
      order: z.number().nullable(),
      version_group: z.object({
        name: z.string(),
        url: z.string(),
      }),
    })
  ),
});

export type Move = z.infer<typeof MovesSchema>;

export const PastAbilitiesSchema = z.object({
  abilities: z.array(AbilitySchema),
  generation: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

export type PastAbility = z.infer<typeof PastAbilitiesSchema>;

export const TypeSchema = z.object({
  slot: z.number(),
  type: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

export type Type = z.infer<typeof TypeSchema>;

export const PokemonDetailsSchema = z.object({
  abilities: z.array(AbilitySchema),
  base_experience: z.number().nullish(),
  cries: z
    .object({
      latest: z.string().nullish(),
      legacy: z.string().nullable(),
    })
    .nullish(),
  forms: z.array(FormsSchema),
  game_indices: z.array(GameIndicesSchema),
  height: z.number(),
  held_items: z.array(HeldItemsSchema),
  id: z.number(),
  is_default: z.boolean(),
  location_area_encounters: z.string(),
  moves: z.array(MovesSchema),
  name: z.string(),
  order: z.number(),
  past_abilities: z.array(PastAbilitiesSchema).nullish(),
  species: z.object({
    name: z.string(),
    url: z.string(),
  }),
  sprites: z.object({
    back_default: z.string().nullable(),
    back_female: z.string().nullable(),
    back_shiny: z.string().nullable(),
    back_shiny_female: z.string().nullable(),
    front_default: z.string().nullable(),
    front_female: z.string().nullable(),
    front_shiny: z.string().nullable(),
    front_shiny_female: z.string().nullable(),
  }),
  stats: z.array(
    z.object({
      base_stat: z.number(),
      effort: z.number(),
      stat: z.object({
        name: z.string(),
        url: z.string(),
      }),
    })
  ),
  types: z.array(TypeSchema),
  weight: z.number(),
});

export type PokemonDetails = z.infer<typeof PokemonDetailsSchema>;
