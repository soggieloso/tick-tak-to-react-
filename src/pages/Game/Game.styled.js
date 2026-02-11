import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const GameBoardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const GameContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    padding-bottom: 80px;
  }
`;

export const GameOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme?.colors?.tertiary || "#2C3E50"};
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 30px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 100;
  min-width: 350px;
  border: 2px solid ${(props) => props.theme?.colors?.yellow || "#FFD700"}40;
  animation: ${fadeIn} 0.5s ease;

  h2 {
    color: ${(props) => props.theme?.colors?.yellow || "#FFD700"};
    font-size: 2rem;
    margin: 0;
    font-family: "Pacifico", cursive;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .score-banner {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 1rem;
    background: ${(props) => props.theme?.colors?.secondary || "#203124"}40;
    border-radius: 15px;
    color: ${(props) => props.theme?.colors?.primary || "#F6F1EB"};
    font-size: 1.2rem;
    font-weight: bold;

    span:nth-child(2) {
      color: ${(props) => props.theme?.colors?.yellow || "#FFD700"};
    }
  }

  .button-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    min-width: 90%;
    padding: 1.5rem;

    h2 {
      font-size: 1.5rem;
    }

    .score-banner {
      font-size: 1rem;
    }
  }
`;

export const ResetButton = styled.button`
  background: ${(props) => {
    switch (props.color) {
      case "green":
        return props.theme?.colors?.green || "#4CAF50";
      case "blue":
        return props.theme?.colors?.blue || "#2196F3";
      case "purple":
        return props.theme?.colors?.purple || "#9C27B0";
      case "red":
        return props.theme?.colors?.red || "#F44336";
      default:
        return props.theme?.colors?.secondary || "#203124";
    }
  }};
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px
      ${(props) => {
        switch (props.color) {
          case "green":
            return "#4CAF5080";
          case "blue":
            return "#2196F380";
          case "purple":
            return "#9C27B080";
          case "red":
            return "#F4433680";
          default:
            return "#00000080";
        }
      }};
    animation: ${pulse} 0.5s ease;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 0.9rem;
  }
`;

export const FloatingResetButton = styled.button`
  position: fixed;
  bottom: 120px;
  right: 30px;
  background: ${(props) => props.theme?.colors?.purple || "#9C27B0"};
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(156, 39, 176, 0.4);
  transition: all 0.3s ease;
  z-index: 99;
  border: 2px solid rgba(255, 255, 255, 0.3);

  &:hover {
    transform: scale(1.1) rotate(90deg);
    box-shadow: 0 6px 20px rgba(156, 39, 176, 0.6);
  }

  @media (max-width: 768px) {
    bottom: 100px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }
`;
