import reset from "./reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/* reset */
${reset}
/* Custom-Global-Styled */
*{
    box-sizing: border-box;
}
body{
    background-color: ${({ theme }) => theme.display};
}
a{
    text-decoration: none;
    color: inherit;
}
button{
    border: unset;
}
.ql-size-10{
    font-size: 1rem;
}
.ql-size-12{
    font-size: 1.2rem;
}
.ql-size-16{
    font-size: 1.6rem;
}
.ql-size-20{
    font-size: 2rem;
}
.ql-size-24{
    font-size: 2.4rem;
}
.ql-size-32{
    font-size: 3.2;
}
.ql-size-40{
    font-size: 4rem;
}
.ql-font-프리텐다드{
    font-family:'프리텐다드';
}
.ql-font-나눔고딕{
    font-family:'나눔고딕';
}
.ql-font-나눔명조{
    font-family:'나눔명조';
}
.ql-font-D2코딩체{
    font-family:'D2코딩체';
}
.ql-font-교보손글씨체{
    font-family:'교보손글씨체';
}
.ql-font-어비지슉체{
    font-family:'어비지슉체';
}
.ql-font-치킨체{
    font-family:'치킨체';
}
.ql-font-메이플스토리{
    font-family:'메이플스토리';
}
.ql-font-조선궁서체{
    font-family:'조선궁서체';
}
.ql-align-center{
    text-align: center;
}
.ql-align-right{
    text-align: right;
}
`;

export default GlobalStyles;
