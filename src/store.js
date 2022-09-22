import create from 'zustand';

const usePlanetStore = create((set) => ({
  bears: 0,
  incBears: () =>
    set((state) => ({
      bears: state.bears + 1,
    })),
  decBears: () =>
    set((state) => ({
      bears: state.bears - 1,
    })),
}));

export default usePlanetStore;
