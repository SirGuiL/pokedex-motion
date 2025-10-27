import { PokemonDetails } from "@/schemas/pokemonDetails";
import { create } from "zustand";

interface SelectedPokemonStore {
  selectedPokemon: PokemonDetails | null;
  setSelectedPokemon: (value: PokemonDetails | null) => void;
}

export const useSelectedPokemonStore = create<SelectedPokemonStore>((set) => ({
  selectedPokemon: null,
  setSelectedPokemon: (value) => set({ selectedPokemon: value }),
}));
