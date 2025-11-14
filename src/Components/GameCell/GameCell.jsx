import React, { useContext } from 'react'
import { CellStyle } from './GameCell.styled'
import { GameContext } from '../../Contexts/GameContext'
import { checkForWinner } from '../../utils/GameUtils';
import { ReactComponent as IconX } from "../../assets/svgs/icons8-x.svg"
import { ReactComponent as XIconOutline } from "../../assets/svgs/icons8-x-outline.svg"
import { ReactComponent as IconO } from "../../assets/svgs/icons8-o.svg"
import { ReactComponent as OIconOutline } from "../../assets/svgs/icons8-o-outline.svg"
import { ModalContext } from '../../Contexts/ModalContext';
import RoundOverModal from "../Modal/RoundOverModal";

function GameCell({ cellItem, index }) {
    const { updateBoard, game, roundComplete } = useContext(GameContext);
    const { handleModal } = useContext(ModalContext);

    const cellClickHandler = () => {
        updateBoard(index);
        const result = checkForWinner(game.board);
        if(result) {
            roundComplete(result)
            handleModal(<RoundOverModal/>)
        }
        
      
        if (result || isBoardFull(game.board)) {
            roundComplete(); 
            handleModal(<RoundOverModal />);
        }
    }

  
    const isBoardFull = (board) => {
        return board.every(cell => cell === "x" || cell === "o");
    }

    if (cellItem === "x") {
        return (
            <CellStyle>
                <IconX className='markedItem' />
            </CellStyle>
        )
    } else if (cellItem === "o") {
        return (
            <CellStyle>
                <IconO className='markedItem' />
            </CellStyle>
        )
    }
    
    return (
        <CellStyle onClick={cellClickHandler}>
            {game.turn === "x" ? 
            <XIconOutline className='outlineIcon' /> :
            <OIconOutline className='outlineIcon'/>}
        </CellStyle>
    )
}

export default GameCell;