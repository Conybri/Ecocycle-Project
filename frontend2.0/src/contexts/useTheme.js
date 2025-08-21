// useTheme.js
import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme debe usarse dentro de <ThemeProvider>");
    return ctx;
}
