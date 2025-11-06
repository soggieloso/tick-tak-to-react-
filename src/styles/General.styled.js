import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  padding: 0 2rem;
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};
`; 

export const Title = styled.h1`
   color: ${(props) => props.isDarkMode ? "white" : "black"};
font-size: 3rem;
font-family: 'Pacifico', cursive;
background-color: transparent;
`; 

export const Subtitle = styled.h1`
   color: ${(props) => (props.isDarkMode ? "white" : "black")};
font-size: 24px;
font-family: 'Pacifico', cursive;
font-weight: 200;
background-color: transparent;
`; 