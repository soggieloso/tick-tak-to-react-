import { useEffect, useState, useRef } from "react";

const useSound = (url, options = {}) => {
  const [sound, setSound] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    
    if (!url) return;

    const audio = new Audio();

    const handleCanPlay = () => {
      setIsLoaded(true);
    };

    const handleError = (e) => {
      console.error(`Error loading sound from ${url}:`, e);
      setIsLoaded(false);
    };

    
    audio.addEventListener("canplaythrough", handleCanPlay);
    audio.addEventListener("error", handleError);

   
    audio.volume = options.volume || 0.1;
    audio.preload = "auto";

    
    audio.src = url;

    setSound(audio);

   
    return () => {
      if (audio) {
        audio.removeEventListener("canplaythrough", handleCanPlay);
        audio.removeEventListener("error", handleError);
        audio.pause();
        audio.currentTime = 0;
        audio.src = ""; 
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [url, options.volume]);

  const playSound = () => {
    if (sound && isLoaded) {
      try {
      
        sound.currentTime = 0;

        
        const playPromise = sound.play();

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn("Sound play failed:", error);
          });
        }

        
        if (options.timeout) {
         
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }

          timeoutRef.current = setTimeout(() => {
            if (sound) {
              sound.pause();
              sound.currentTime = 0;
            }
          }, options.timeout);
        }
      } catch (error) {
        console.warn("Error playing sound:", error);
      }
    }
  };

  return playSound;
};

export default useSound;
