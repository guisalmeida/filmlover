import { createGlobalStyle } from "styled-components"
import media from 'styled-media-query'
import "./reset.css";

const GlobalStyles = createGlobalStyle`

:root {   
    --highlight: #E02041;
    --background: #1d2735;

    --break-huge: 1440px;
    --break-large: 1170px;
    --break-medium: 768px;
    --break-small: 450px;
    
    font-size: 16px;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}

*,
:after,
:before {
    box-sizing: border-box;
}

body,
body button,
body input,
html,
html button,
html input {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
}

body {
    color: white;
    /* fallback for old browsers */
    background: var(--background);

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to bottom, var(--background), var(--highlight));
    
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to bottom, var(--background), var(--highlight));

    min-height: calc(100vh - 6rem);
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
}

button {
    outline: none;
    border: none;
    background-color: transparent;
}

.container {
    width: 100%;
    max-width: var(--break-large);
}
`
export default GlobalStyles;