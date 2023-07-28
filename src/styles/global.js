import { createGlobalStyle } from "styled-components"
import "./reset.css";

const GlobalStyles = createGlobalStyle`

:root {   
    --highlight: #E02041;
    --dark: #13131A;

    --break-small: 320px;
    --break-medium: 992px;
    --break-large: 1280px;
    
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
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 10px;
    font-weight: 400;
}

body {
    background-color:var(--dark);
    color: white;
    font-family: Noto Sans SC, sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    min-height: 100%;
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