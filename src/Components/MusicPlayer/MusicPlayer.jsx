import React, { useEffect, useState, useRef, useContext } from 'react';
import { 
    MusicPlayerWrapper, 
    ControlsContainer,
    SongInfo,
    MusicNoteIcon,
    SongDetails,
    SongTitle,
    SongArtist,
    ButtonGroup,
    PlayIcon, 
    PauseIcon, 
    NextIcon,
    VolumeIcon,
    VolumeMuteIcon,
    ProgressBar,
    ProgressFill,
    TimeDisplay,
    NoAudioMessage
} from './MusicPlayerstyled';
import playList from '../../utils/GameUtils/MusicUtils/playlist';
import { randomizeIndex } from '../../utils/GameUtils/MusicUtils';
import { SfxContext } from "../../Contexts/SfxContext";

function MusicPlayer() {
    const { hoverSfx, clickSfx } = useContext(SfxContext);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(0);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [duration, setDuration] = useState('0:00');
    const [volume, setVolume] = useState(0.5);
    const [isMuted, setIsMuted] = useState(false);
    const [previousVolume, setPreviousVolume] = useState(0.5);
    const [hasAudio, setHasAudio] = useState(true);
    
    const playerRef = useRef(null);
    const progressBarRef = useRef(null);

    
    const songTitles = [
        "Summer Vibes",
        "Ocean Waves",
        "Mountain Air",
        "City Lights",
        "Forest Rain",
        "Desert Wind"
    ];

    const songArtists = [
        "Chillhop",
        "Lofi Beats",
        "Ambient",
        "Electronic",
        "Nature Sounds",
        "Meditation"
    ];

    useEffect(() => {
        
        setCurrentSong(randomizeIndex(playList));
    }, []);

    useEffect(() => {
        const playAudio = async () => {
            if (playerRef.current) {
                playerRef.current.volume = volume;
                
                if (isPlaying) {
                    try {
                        await playerRef.current.play();
                        setHasAudio(true);
                    } catch (error) {
                        console.log('Playback prevented:', error);
                        setIsPlaying(false);
                        setHasAudio(false);
                    }
                } else {
                    playerRef.current.pause();
                }
            }
        };

        playAudio();
    }, [isPlaying, currentSong, volume]);

    
    useEffect(() => {
        const interval = setInterval(() => {
            if (playerRef.current && isPlaying) {
                const current = playerRef.current.currentTime;
                const total = playerRef.current.duration;
                
                if (total) {
                    const progressPercent = (current / total) * 100;
                    setProgress(progressPercent);
                    
                   
                    setCurrentTime(formatTime(current));
                    setDuration(formatTime(total));
                }
            }
        }, 100);

        return () => clearInterval(interval);
    }, [isPlaying]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const shuffleHandler = () => {
        clickSfx();
        if (playerRef.current) {
            playerRef.current.pause();
        }
        const newIndex = randomizeIndex(playList);
        setCurrentSong(newIndex);
        setIsPlaying(true);
        setProgress(0);
    };

    const handleSongEnd = () => {
        setIsPlaying(false);
        shuffleHandler();
    };

    const handleProgressClick = (e) => {
        if (playerRef.current && playerRef.current.duration) {
            const progressBar = progressBarRef.current;
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = (clickX / rect.width) * 100;
            const newTime = (percentage / 100) * playerRef.current.duration;
            
            playerRef.current.currentTime = newTime;
            setProgress(percentage);
        }
    };

    const toggleMute = () => {
        clickSfx();
        if (isMuted) {
            setVolume(previousVolume);
            setIsMuted(false);
        } else {
            setPreviousVolume(volume);
            setVolume(0);
            setIsMuted(true);
        }
    };

    if (!hasAudio) {
        return (
            <MusicPlayerWrapper>
                <NoAudioMessage>
                    🎵 Click play to start music
                </NoAudioMessage>
            </MusicPlayerWrapper>
        );
    }

    return (
        <MusicPlayerWrapper>
            <ControlsContainer>
                <SongInfo>
                    <MusicNoteIcon isPlaying={isPlaying} />
                    <SongDetails>
                        <SongTitle>
                            {songTitles[currentSong] || `Track ${currentSong + 1}`}
                        </SongTitle>
                        <SongArtist>
                            {songArtists[currentSong] || 'Unknown Artist'}
                        </SongArtist>
                    </SongDetails>
                </SongInfo>

                <ButtonGroup>
                    {isPlaying ? (
                        <PauseIcon
                            onClick={() => {
                                clickSfx();
                                setIsPlaying(false);
                            }}
                            onMouseEnter={() => hoverSfx()}
                        />
                    ) : (
                        <PlayIcon
                            onClick={() => {
                                clickSfx();
                                setIsPlaying(true);
                            }}
                            onMouseEnter={() => hoverSfx()}
                        />
                    )}

                    <NextIcon 
                        onClick={shuffleHandler} 
                        onMouseEnter={() => hoverSfx()}
                    />

                    {isMuted || volume === 0 ? (
                        <VolumeMuteIcon
                            onClick={toggleMute}
                            onMouseEnter={() => hoverSfx()}
                        />
                    ) : (
                        <VolumeIcon
                            onClick={toggleMute}
                            onMouseEnter={() => hoverSfx()}
                        />
                    )}
                </ButtonGroup>
            </ControlsContainer>

            <ProgressBar 
                ref={progressBarRef} 
                onClick={handleProgressClick}
            >
                <ProgressFill progress={`${progress}%`} />
            </ProgressBar>

            <TimeDisplay>
                <span>{currentTime}</span>
                <span>{duration}</span>
            </TimeDisplay>

            <audio 
                ref={playerRef}
                src={playList[currentSong]}
                onEnded={handleSongEnd}
                onError={() => {
                    console.error('Audio error');
                    setIsPlaying(false);
                }}
            />
        </MusicPlayerWrapper>
    );
}

export default MusicPlayer;