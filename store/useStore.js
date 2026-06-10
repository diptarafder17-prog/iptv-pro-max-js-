import create from 'zustand';

export const useStore = create((set) => ({
  current: null,
  setCurrent: (c) => set({ current: c })
}));
