import styled from "styled-components";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 2px solid
    ${(props) => (props.isPlayerActive ? props.theme.primary : "transparent")};
  border-radius: 12px;
  background: ${(props) => props.theme.cardBackground};
  transition: all 0.3s ease;

  ${(props) =>
    props.isPlayerActive &&
    `
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  `}
`;

export const AvatarWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid
    ${(props) =>
      props.isPlayerActive ? props.theme.primary : props.theme.border};
  overflow: hidden;
  transition: all 0.3s ease;
`;
