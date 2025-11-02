import z from "zod";

export const AbilitySchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

export const AbilitiesResponseSchema = z.object({
  results: z.array(AbilitySchema),
  metadata: z.object({
    count: z.number(),
  }),
});

export type Ability = z.infer<typeof AbilitySchema>;
export type AbilityResponse = z.infer<typeof AbilitiesResponseSchema>;
