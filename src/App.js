import Router from "./Router";
import {  GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import { useContext } from "react";
import { ThemeContext } from "./Contexts/ThemeContext";


function App() {
  const {theme} = useContext(ThemeContext)
  
  const mode = (theme ==="light" ? lightTheme: darkTheme)

  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles/>
       <Router/>
    </ThemeProvider>
  );
}

export default App;
