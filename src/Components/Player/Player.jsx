import React from 'react'
import { PlayerWrapper, AvatarWrapper } from './Player.styled'
import { Text } from "../../styles/General.styled"

function Player({ player, isPlayerActive, useCharacterAvatars = false }) {
 
    if (!player) {
        return (
            <PlayerWrapper isPlayerActive={isPlayerActive}>
                <Text>Player data not available</Text>
            </PlayerWrapper>
        );
    }
    
    const getPlayerEmoji = () => {
        if (player.choice === "x") {
            return "❌"; // X emoji
        } else {
            return "⭕"; // O emoji
        }
    }

    const getPlayerAvatar = () => {
        if (player.name === "Player1" || player.name.includes("1")) {
            return "👨‍🎤"; // Rock star for Player 1
        } else {
            return "👩‍🎤"; // Rock star for Player 2
        }
    }

    return (
        <PlayerWrapper isPlayerActive={isPlayerActive}>
            <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
                <div style={{ fontSize: '3rem' }}>
                    {useCharacterAvatars ? getPlayerAvatar() : getPlayerEmoji()}
                </div>
            </AvatarWrapper>

            <Text>
                {player.name} ({player.choice.toUpperCase()})
            </Text>
            <Text>{player.score}</Text>
        </PlayerWrapper>
    )
}

export default Player;