import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.columnBased ? "column" : "row"};
  height: 80vh;
  width: 100vw;
  padding: 0 2rem;
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`; 

export const Title = styled.h1`
   color: ${(props) => props.primary ? props.theme.colors.secondary :props.theme.colors.text};
font-size: 3rem;
font-family: 'Pacifico', cursive;
background-color: transparent;
`; 

export const Subtitle = styled.h1`
  color: ${(props) =>
    props.primary ? props.theme.colors.secondary : props.theme.colors.text};
  font-size: 24px;
  font-family: "Pacifico", cursive;
  font-weight: 200;
  background-color: transparent;
`; 

export const Text = styled.p`
  color: ${(props) =>
    props.primary ? props.theme.colors.secondary : props.theme.colors.text};
  font-size: 1.2rem;
  font-family: "Pacifico", cursive;
  background-color: transparent;
`; 