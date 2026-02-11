import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) =>
    props.isWinningCell
      ? props.theme.colors.yellow
      : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  border: none;
  width: 10rem;
  height: 10rem;
  border-radius: 2.5rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.cream};
  cursor: ${(props) => (props.isEmpty ? "pointer" : "default")};
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  .markedItem {
    width: 100%;
    height: 100%;
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }

  .outlineIcon {
    width: 100%;
    height: 100%;
    path {
      stroke: ${(props) => props.theme.colors.primary};
      stroke-width: 0;
      transition: stroke-width 0.2s ease;
    }
  }

  &:hover {
    .outlineIcon {
      path {
        stroke-width: 2;
      }
    }
  }
`;
