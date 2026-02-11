import styled, { keyframes } from "styled-components";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const MusicPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px; 
  left: auto; 
  transform: none; 
  width: 280px; 
  background: ${(props) => props.theme?.colors?.tertiary || "#2C3E50"};
  backdrop-filter: blur(10px);
  border-radius: 20px; 
  padding: 12px 18px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme?.colors?.secondary || "#FFFFFF"}20;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 90%;
    right: 5%;
    bottom: 10px;
    padding: 10px 15px;
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SongInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0; 
`;

export const MusicNoteIcon = styled(IoMdMusicalNote)`
  color: ${(props) => props.theme?.colors?.yellow || "#FFD700"};
  font-size: 1.4rem; 
  animation: ${(props) => (props.isPlaying ? spin : "none")} 4s linear infinite;
`;

export const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0; 
`;

export const SongTitle = styled.span`
  color: ${(props) => props.theme?.colors?.primary || "#FFFFFF"};
  font-size: 0.8rem; 
  font-weight: 600;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SongArtist = styled.span`
  color: ${(props) => props.theme?.colors?.secondary || "#CCCCCC"};
  font-size: 0.7rem; 
  opacity: 0.8;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; 
`;

const IconStyle = `
  font-size: 1.6rem; /* Smaller icons */
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const PlayIcon = styled(FaPlay)`
  ${IconStyle}
  color: ${(props) => props.theme?.colors?.green || "#4CAF50"};
`;

export const PauseIcon = styled(FaPause)`
  ${IconStyle}
  color: ${(props) => props.theme?.colors?.yellow || "#FFD700"};
  animation: ${pulse} 2s ease infinite;
`;

export const NextIcon = styled(FaStepForward)`
  ${IconStyle}
  color: ${(props) => props.theme?.colors?.blue || "#2196F3"};
`;

export const VolumeIcon = styled(FaVolumeUp)`
  ${IconStyle}
  font-size: 1.4rem;
  color: ${(props) => props.theme?.colors?.secondary || "#CCCCCC"};
`;

export const VolumeMuteIcon = styled(FaVolumeMute)`
  ${IconStyle}
  font-size: 1.4rem;
  color: ${(props) => props.theme?.colors?.red || "#F44336"};
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 3px;
  background: ${(props) => props.theme?.colors?.secondary || "#CCCCCC"}40;
  border-radius: 1.5px;
  margin-top: 8px;
  cursor: pointer;
`;

export const ProgressFill = styled.div`
  width: ${(props) => props.progress || "0%"};
  height: 100%;
  background: ${(props) => props.theme?.colors?.yellow || "#FFD700"};
  border-radius: 1.5px;
  transition: width 0.1s linear;
`;

export const TimeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 4px;
  color: ${(props) => props.theme?.colors?.secondary || "#CCCCCC"};
  font-size: 0.65rem; 
`;

export const NoAudioMessage = styled.div`
  color: ${(props) => props.theme?.colors?.secondary || "#CCCCCC"};
  font-size: 0.8rem;
  padding: 8px;
  text-align: center;
`;


export const MinimizedPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
  background: ${(props) => props.theme?.colors?.tertiary || "#2C3E50"};
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 8px 15px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme?.colors?.secondary || "#FFFFFF"}20;

  .song-info-mini {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
    color: ${(props) => props.theme?.colors?.primary || "#FFFFFF"};
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
