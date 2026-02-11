import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${(props) => props.theme.background};
  padding: 2rem;
  gap: 3rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: ${(props) => props.theme.primary};
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  text-align: center;
  margin-bottom: 3rem;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 300px;
`;

export const PrimaryButton = styled.button`
  background: ${(props) => props.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${(props) => props.theme.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: ${(props) => props.theme.disabled};
    cursor: not-allowed;
    transform: none;
  }
`;

export const SecondaryButton = styled.button`
  background: transparent;
  color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.primary};
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const PlayerSetup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
  background: ${(props) => props.theme.cardBackground};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const PlayerInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid ${(props) => props.theme.border};
  border-radius: 8px;
  font-size: 1rem;
  background: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.text};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
  }

  &::placeholder {
    color: ${(props) => props.theme.textLight};
  }
`;

export const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

export const AvatarPreview = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${(props) => props.theme.avatarBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${(props) => props.theme.primary};
  overflow: hidden;
`;

export const ThemeToggle = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;

  @media (max-width: 768px) {
    position: static;
    margin-bottom: 1rem;
  }
`;

export const GameModes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
  margin: 2rem 0;
`;

export const ModeCard = styled.div`
  background: ${(props) => props.theme.cardBackground};
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-color: ${(props) => props.theme.primary};
  }

  ${(props) =>
    props.selected &&
    `
    border-color: ${props.theme.primary};
    background: ${props.theme.primary}15;
  `}
`;

export const ModeTitle = styled.h3`
  color: ${(props) => props.theme.primary};
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

export const ModeDescription = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 0.9rem;
  opacity: 0.8;
`;

export const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.primary};
`;

export const Footer = styled.footer`
  margin-top: auto;
  padding: 2rem;
  text-align: center;
  color: ${(props) => props.theme.textLight};
  font-size: 0.9rem;
`;

// Loading animation
export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${(props) => props.theme.border};
  border-top: 4px solid ${(props) => props.theme.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Responsive grid for player avatars
export const AvatarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

// Score display
export const ScoreDisplay = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 400px;
  background: ${(props) => props.theme.cardBackground};
  padding: 1rem;
  border-radius: 12px;
  margin: 1rem 0;
`;

export const ScoreItem = styled.div`
  text-align: center;

  ${(props) =>
    props.highlight &&
    `
    color: ${props.theme.primary};
    font-weight: bold;
  `}
`;

export const ScoreValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
`;

export const ScoreLabel = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.textLight};
  margin-top: 0.5rem;
`;

// Game history
export const HistorySection = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${(props) => props.theme.cardBackground};
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
`;

export const HistoryTitle = styled.h3`
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
  text-align: center;
`;

export const HistoryList = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

export const HistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.border};

  &:last-child {
    border-bottom: none;
  }
`;