import { create } from "zustand";

interface PaginationStore {
  pagination: number;
  setPagination: (value: number) => void;
  maxPages: number;
  setMaxPages: (value: number) => void;
}

export const usePaginationStore = create<PaginationStore>((set) => ({
  pagination: 1,
  setPagination: (value) => set({ pagination: value }),
  maxPages: 1,
  setMaxPages: (value) => set({ maxPages: value }),
}));
