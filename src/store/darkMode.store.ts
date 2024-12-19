import { create, StateCreator } from 'zustand';
import { persist } from "zustand/middleware";

interface DarkModeState {
    darkMode: boolean
}

interface Actions {
    setDarkMode: (boolean) => void
}

type StorageData = DarkModeState & Actions;

const storeApi: StateCreator<StorageData> = (set, get) => ({
    darkMode: get()?.darkMode ?? false,
    setDarkMode: (newDarkModeState) => { set(() => ({ darkMode: newDarkModeState })) }
});

export const useDarkModeStore = create<StorageData>()(
    persist(
        storeApi,
        { name: "darkMode" }
    )
);
