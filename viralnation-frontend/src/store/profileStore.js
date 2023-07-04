import { create } from "zustand";

const useDataStore = create((set, get) => ({
  profiles: [],
  filteredProfiles: [],
  emails: [],
  mode: "",
  actions: {
    updateProfiles: (profiles) => set(() => ({ profiles: profiles })),
    setMode: (mode) => set(() => ({ mode: mode })),
    updateEmails: (emails) => set(() => ({ emails: emails })),
    updateFilteredProfiles: (profiles) =>
      set(() => ({ filteredProfiles: profiles })),
  },
}));

export { useDataStore };
