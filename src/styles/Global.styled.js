import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    
    /* Safe media query with optional chaining */
    ${(props) => props.theme?.media?.mobile || "@media (max-width: 1000px)"} {
      font-size: 11px;
    }
  }
  
  body {
    /* Safe color access with fallback */
    background-color: ${(props) => props.theme?.colors?.primary || "#FFFFFF"};
  }
`;
