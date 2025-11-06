import React, {useContext} from 'react'
import { Container } from '../../styles/General.styled'
import { GameBoardStyle } from './Game.styled'
import GameCell from '../../Components/GameCell/GameCell'
import { GameContext } from '../../Contexts/GameContext'


function Game() {
  const  {game} = useContext(GameContext)
  return (
    <Container>
      <GameBoardStyle>
        {game.board.map((item, index) => (
            <GameCell key={index} cellitem={item} index={index} />
          ))}
      </GameBoardStyle>
    </Container>
  )
}

export default Game;
