import React, { useContext } from 'react'
import {CellStyle} from './GameCell.styled'
import { GameContext } from '../../Contexts/GameContext'
import { checkForWinner } from '../../utils/GameUtils';

function GameCell({cellitem, index }) {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
     const result = checkForWinner(game.board)
     if (result) {
    updateBoard(index)
  }

}
  return (
    <CellStyle onClick={() => {
      console.log(cellitem, index);
      updateBoard(index)
    }}>
      {cellitem}
    </CellStyle>
  )
}

export default GameCell

