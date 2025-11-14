import React from 'react'
import { PlayerWrapper, AvatarWrapper } from './Player.styled'
import Avatar, { genConfig } from 'react-nice-avatar'
import { Text } from "../../styles/General.styled"

function Player({ player, isPlayerActive }) {
    // Add safety check for player prop
    if (!player) {
        return (
            <PlayerWrapper isPlayerActive={isPlayerActive}>
                <Text>Player data not available</Text>
            </PlayerWrapper>
        );
    }

    // Generate avatar config with fallback
    const updatedAvatarConfig = genConfig(player.avatarConfig || player.name || "Player");
    
    return (
        <PlayerWrapper isPlayerActive={isPlayerActive}>
            <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
                <Avatar {...updatedAvatarConfig} />
            </AvatarWrapper>

            <Text>{player.name || "Player"} ({player.choice?.toUpperCase() || "X"})</Text>
            <Text>{player.score || 0}</Text>
        </PlayerWrapper>
    )
}

export default Player