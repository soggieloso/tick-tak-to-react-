import styled from "styled-components";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 2rem;

  .logo {
    height: 4rem;
    fill: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }
`;

export const LightModeIcon = styled(MdOutlineLightMode)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;

// Fixed: Changed the name to avoid conflict with the import
export const DarkModeIcon = styled(MdDarkMode)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;
