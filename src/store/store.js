import { create } from "zustand";

const useStore = create((set) => ({
  /* Var */
  bears: 0,
  /* Reducer */
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
