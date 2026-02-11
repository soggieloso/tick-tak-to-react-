import React from "react";
import { ThemeContextProvider } from "./ThemeContext";
import { GameContextProvider } from "./GameContext";
import { SfxProvider } from "./SfxContext";
import { ModalContextProvider } from "./ModalContext"; // Add this import

function Provider({ children }) {
  return (
    <ThemeContextProvider>
      <GameContextProvider>
        <SfxProvider>
          <ModalContextProvider>
            {" "}
            {}
            {children}
          </ModalContextProvider>
        </SfxProvider>
      </GameContextProvider>
    </ThemeContextProvider>
  );
}

export default Provider;
