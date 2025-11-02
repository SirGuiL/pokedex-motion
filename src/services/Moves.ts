import { AbilitiesResponseSchema } from "@/schemas/moves";

export class AbilityService {
  async get() {
    try {
      const response = await fetch("/api/abilities");

      if (!response.ok) {
        throw new Error("Failed to fetch Moves");
      }

      const parsed = AbilitiesResponseSchema.parse(await response.json());

      return parsed;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("internal server error");
    }
  }
}
