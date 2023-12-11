import reset from "./reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/* reset */
${reset}

/* Custom-Global-Styled */
*{
    box-sizing: border-box;
}
a{
    text-decoration: none;
    color: inherit;
}
button{
    border: unset;
}
`;

export default GlobalStyles;
