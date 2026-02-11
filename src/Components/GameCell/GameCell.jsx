import React, { useContext, useState } from 'react'
import { CellStyle } from './GameCell.styled'
import { GameContext } from '../../Contexts/GameContext'
import { ReactComponent as IconX } from "../../assets/svgs/icons8-x.svg"
import { ReactComponent as XIconOutline } from "../../assets/svgs/icons8-x-outline.svg"
import { ReactComponent as IconO } from "../../assets/svgs/icons8-o.svg"
import { ReactComponent as OIconOutline } from "../../assets/svgs/icons8-o-outline.svg"
import { SfxContext } from '../../Contexts/SfxContext';

function GameCell({ cellItem, index, isWinningCell }) {
    const { updateBoard, game } = useContext(GameContext);
    const { hoverSfx, clickSfx } = useContext(SfxContext);
    const [isHovered, setIsHovered] = useState(false);

    const cellClickHandler = () => {
       
        if (cellItem !== null || game.roundWinner) {
            return;
        }

        clickSfx();
        updateBoard(index);
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
        hoverSfx();
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    
    if (cellItem === "x") {
        return (
            <CellStyle isWinningCell={isWinningCell ?? false}>
                <IconX className='markedItem' />
            </CellStyle>
        )
    }
    
    
    if (cellItem === "o") {
        return (
            <CellStyle isWinningCell={isWinningCell ?? false}>
                <IconO className='markedItem' />
            </CellStyle>
        )
    }
    
    
    return (
        <CellStyle 
            onClick={cellClickHandler} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            isEmpty={true}
        >
            {isHovered && !game.roundWinner && (
                game.turn === "x" ? 
                <XIconOutline className='outlineIcon' /> :
                <OIconOutline className='outlineIcon'/>
            )}
        </CellStyle>
    )
}

export default GameCell;