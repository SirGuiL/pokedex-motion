import { create } from "zustand";

interface FilterStore {
  order: "asc" | "desc";
  setOrder: (value: "asc" | "desc") => void;

  from: number | null;
  setFrom: (value: number | null) => void;

  to: number | null;
  setTo: (value: number | null) => void;

  type: string;
  setType: (value: string) => void;

  weakness: string;
  setWeakness: (value: string) => void;

  ability: string;
  setAbility: (value: string) => void;

  height: string;
  setHeight: (value: string) => void;

  weight: string;
  setWeight: (value: string) => void;

  clearFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  order: "asc",
  setOrder: (value) => set({ order: value }),

  from: null,
  setFrom: (value) => set({ from: value }),

  to: null,
  setTo: (value) => set({ to: value }),

  type: "",
  setType: (value) => set({ type: value }),

  weakness: "",
  setWeakness: (value) => set({ weakness: value }),

  ability: "",
  setAbility: (value) => set({ ability: value }),

  height: "",
  setHeight: (value) => set({ height: value }),

  weight: "",
  setWeight: (value) => set({ weight: value }),

  clearFilters: () =>
    set({
      order: "asc",
      from: null,
      to: null,
      type: "",
      weakness: "",
      ability: "",
      height: "",
      weight: "",
    }),
}));
