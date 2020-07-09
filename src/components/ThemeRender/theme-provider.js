import React from "react";
import theme from "./theme-definitions"

const defaultContextData = {
    dark: true,
    toggle: () => {}
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const useEffectLightMode = () => {
    const [themeState, setThemeState] = React.useState({
        dark: true,
        hasThemeLoaded: false
    });
    React.useEffect(() => {
        const lsLight = localStorage.getItem("dark") === "false";
        setThemeState({...themeState, dark: lsLight, hasThemeMounted: true});
    }, []);

    return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useEffectLightMode();

    if (!themeState.hasThemeLoaded) {
        return <div />;
    }

    const toggle = () => {
        const dark = !themeState.dark;
        localStorage.setItem("dark", JSON.stringify(dark));
        setThemeState({...themeState, dark});
    };

    const computedTheme = themeState.dark ? theme("dark") : theme("light");

    return (
            <ThemeContext.Provider
                value={{
                    dark: themeState.dark,
                    toggle
                }}
                >
                {children}
            </ThemeContext.Provider>
    );
};

export { ThemeProvider, useTheme }