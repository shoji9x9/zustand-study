import { create } from "zustand";

export const useCounterStore = create<{
  count: number;
  increment: () => void;
  reset: () => void;
}>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));
