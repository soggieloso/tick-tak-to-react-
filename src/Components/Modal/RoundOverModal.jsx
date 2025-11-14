import React, { useContext } from 'react'
import { Title, Subtitle } from "../../styles/General.styled"
import { ModalHeader, ModalFooter, ModalBody } from './Modal.styled'
import Button from "../Button/Button";
import { GameContext } from '../../Contexts/GameContext'
import { ModalContext } from '../../Contexts/ModalContext'

function RoundOverModal() {
  const { resetBoard, game } = useContext(GameContext)
  const { handleModal } = useContext(ModalContext)
  

  const getWinnerName = () => {
    if (game.roundWinner === "player1") {
      return game.player1.name;
    } else if (game.roundWinner === "player2") {
      return game.player2.name;
    } else {
      return "Player"; 
    }
  }

  const winnerName = getWinnerName();
  
  return (
    <>
      <ModalHeader>
        <Title primary>{game.roundWinner
         ? `${game.roundWinner.name} wins round`
         :"Round drawn"}</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary>{winnerName} won this round</Subtitle>
        <Subtitle primary>{game.player1.name}: {game.player1.score}</Subtitle>
        <Subtitle primary>{game.player2.name}: {game.player2.score}</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button color="red" onClick={() => {
          handleModal();
          resetBoard();
        }}>
          Continue
        </Button>
        <Button color="blue">Restart</Button>
      </ModalFooter>
    </>
  )
}

export default RoundOverModal