import { create } from 'zustand'

interface IStore {
  count: number
  increment: () => void
}

export const useStore = create<IStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
