import { useState } from "react";

function useDarkMode() {
    const [mode, setMode] = useState<'Light Mode' | 'Dark Mode'>('Light Mode');
    const toggleTheme = () => {
        if (mode === "Dark Mode")
            setMode('Light Mode');
        else
            setMode('Dark Mode');
    }
    return {mode, toggleTheme}
}

// function ThemeComponent() {
//   const { darkMode, toggleTheme } = useDarkMode();

//   return (
//     <button onClick={toggleTheme}>
//       {darkMode ? "Light Mode" : "Dark Mode"}
//     </button>
//   );
// }
