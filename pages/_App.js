import React from 'react';
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../assets/CSSReset_index.js";
import ColorModeProvider from "../components/Menu/ColorMode"
import { ColorModeContext } from "../components/Menu/ColorMode";


const theme = {
    light: {
        backgroundBase: "#F9F9F9",
        backgroundLevel1: "#FFFFFF",
        backgroundLeve2: "#F0F0F0",
        borderBase: "#E5E5E5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLeve2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF"
    }
};
function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}
// para configurações gerais/globais
function MyApp({ Component, pageProps }) {
    
    const contexto = React.useContext(ColorModeContext);
    
    return (
                    
    <ThemeProvider theme={theme[contexto.mode]}>
                        {/* permite uma "conversa" com os outros styled components  de cada componente. a variavel "theme" visto no Menu, é um exemplo de como funciona */}
    <CSSReset />
    
    <Component {...pageProps} />
    </ThemeProvider>
    )
  }
  export default function _App(props) {
    return (
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    )
};