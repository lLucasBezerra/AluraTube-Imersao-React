import React from 'react'

//estudar mais sobre Providers e useContext
export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => { alert("Você precisa me configurar primeiro!")  },
    toggleMode: () => { alert("Você precisa me configurar primeiro!")  },
});

export default function index(props) {
    const [mode, setMode] = React.useState(props.initialMode);

    function toggleMode() {
        if(mode === "dark") setMode("light");
        if(mode === "light") setMode("dark");
    }


    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
            {/* oq estar envolvido nesse componente */}
            {props.children}
        </ColorModeContext.Provider>
    );
}

