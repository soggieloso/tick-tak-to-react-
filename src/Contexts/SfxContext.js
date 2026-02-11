import { createContext, useState, useEffect } from "react";
import useSound from "../hooks/useSound";

export const SfxContext = createContext({});

export function SfxProvider({ children }) {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audioInitialized, setAudioInitialized] = useState(false);

  const options = {
    volume: 0.05,
    timeout: 200,
  };

  const hoverPath = "/assets/Mouse Click Sound Effect.mp3";
  const clickedPath = "/assets/Mouse Click Sound Effect.mp3";
  const winnerPath = "/assets/Mouse Click Sound Effect.mp3";
  const completedPath = "/assets/Mouse Click Sound Effect.mp3";

  const hoverSfx = useSound(hoverPath, options);
  const clickSfx = useSound(clickedPath, options);
  const winSfx = useSound(winnerPath, { ...options, timeout: 1000 });
  const completedSfx = useSound(completedPath, { ...options, timeout: 2000 });

 
  useEffect(() => {
    const enableAudio = () => {
      if (!audioInitialized) {
        setAudioEnabled(true);
        setAudioInitialized(true);
        document.removeEventListener("click", enableAudio);
        document.removeEventListener("keydown", enableAudio);
        document.removeEventListener("touchstart", enableAudio);
      }
    };

    if (!audioInitialized) {
      document.addEventListener("click", enableAudio);
      document.addEventListener("keydown", enableAudio);
      document.addEventListener("touchstart", enableAudio);
    }

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("keydown", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };
  }, [audioInitialized]);

  const safeHoverSfx = () => {
    if (audioEnabled) hoverSfx();
  };

  const safeClickSfx = () => {
    if (audioEnabled) clickSfx();
  };

  const safeWinSfx = () => {
    if (audioEnabled) winSfx();
  };

  const safeCompletedSfx = () => {
    if (audioEnabled) completedSfx();
  };

  const enableAudio = () => {
    setAudioEnabled(true);
    setAudioInitialized(true);
  };

  return (
    <SfxContext.Provider
      value={{
        hoverSfx: safeHoverSfx,
        completedSfx: safeCompletedSfx,
        winSfx: safeWinSfx,
        clickSfx: safeClickSfx,
        enableAudio,
        audioEnabled,
      }}
    >
      {children}
    </SfxContext.Provider>
  );
}
