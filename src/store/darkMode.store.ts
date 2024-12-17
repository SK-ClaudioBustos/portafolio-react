import { create } from 'zustand';
import { persist } from "zustand/middleware";
interface DarkModeStore {
    darkMode: boolean
    setDarkMode: (boolean) => void
}

export const useDarkModeStore = create<DarkModeStore>()(
    persist(
        (set, get) => ({
            darkMode: false,
            setDarkMode: (newDarkModeState) => { set(() => ({ darkMode: newDarkModeState })) }
        }),
        { name: "darkMode" }
    )
);
