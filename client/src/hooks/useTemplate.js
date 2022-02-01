import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useTheme = () => {
    const theme = useSelector(state => state.themeReducer);
    const [actualTheme, setTheme] = useState(theme);

    useEffect(() => {
        setTheme(theme);
    }, [theme]);
    return actualTheme;
}