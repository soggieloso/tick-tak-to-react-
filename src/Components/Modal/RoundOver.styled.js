import styled from "styled-components";

export const RoundOverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  background-color: ${(props) => props.theme?.colors?.secondary || "#203124"};
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

export const WinnerAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 4px solid
    ${(props) =>
      props.winner === "Draw"
        ? props.theme?.colors?.gray || "#828282"
        : props.theme?.colors?.yellow || "#FFD700"};
  overflow: hidden;
  box-shadow: 0 0 20px
    ${(props) =>
      props.winner === "Draw"
        ? props.theme?.colors?.gray || "#828282"
        : props.theme?.colors?.yellow || "#FFD700"}80;
`;

export const ScoreBoard = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${(props) => props.theme?.colors?.tertiary || "#3D3D2D"};
  border-radius: 15px;
`;

export const PlayerScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const PlayerName = styled.span`
  color: ${(props) => props.theme?.colors?.primary || "#F6F1EB"};
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Pacifico", cursive;
`;

export const ScoreValue = styled.span`
  color: ${(props) => props.theme?.colors?.yellow || "#FFD700"};
  font-size: 2rem;
  font-weight: bold;
`;

export const WinnerMessage = styled.div`
  text-align: center;
  margin: 1rem 0;
  padding: 1rem;
  background: ${(props) =>
    props.isDraw
      ? props.theme?.colors?.gray || "#828282"
      : props.theme?.colors?.purple || "#843719"}20;
  border-radius: 10px;
  width: 100%;
`;

export const WinnerText = styled.h2`
  color: ${(props) =>
    props.isDraw
      ? props.theme?.colors?.gray || "#828282"
      : props.theme?.colors?.yellow || "#FFD700"};
  font-size: 1.8rem;
  font-family: "Pacifico", cursive;
  margin-bottom: 0.5rem;
`;

export const SubText = styled.p`
  color: ${(props) => props.theme?.colors?.primary || "#F6F1EB"};
  font-size: 1.1rem;
  opacity: 0.9;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const StyledButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.color === "red"
      ? props.theme?.colors?.red || "#FF2329"
      : props.theme?.colors?.blue || "#993873"};
  color: ${(props) => props.theme?.colors?.primary || "#F6F1EB"};
  min-width: 150px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px
      ${(props) =>
        props.color === "red"
          ? props.theme?.colors?.red || "#FF2329"
          : props.theme?.colors?.blue || "#993873"}80;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
  }
`;

export const TrophyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${(props) =>
    props.isDraw
      ? props.theme?.colors?.gray || "#828282"
      : props.theme?.colors?.yellow || "#FFD700"};
`;

export const Confetti = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 10;
`;
