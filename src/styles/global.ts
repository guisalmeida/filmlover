import { createGlobalStyle } from 'styled-components';
import './reset.css';

const GlobalStyles = createGlobalStyle`

:root {   
    --highlight: #E02041;
    --dark: #1c1c23;
    --background: #13131a;
    --background-gradient: linear-gradient(to bottom right, var(--dark), rgba(224,32,65,0.2));
    --background-gradient-webkit: -webkit-linear-gradient(to bottom right, var(--dark), rgba(224,32,65,0.2));
    --border: 1px solid rgba(225,225,225,0.3);

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
    background: var(--background);

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
`;
export default GlobalStyles;
