import { create } from "zustand";

type Store = {
  version: string;
  setVersion: (version: string) => void;
};

export const useVersionStore = create<Store>()((set) => ({
  version: "",
  setVersion: (version) => set(() => ({ version: version })),
}));
