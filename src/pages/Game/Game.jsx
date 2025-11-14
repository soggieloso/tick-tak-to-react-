import React, {useContext} from 'react'
import { Container } from '../../styles/General.styled'
import { GameBoardStyle } from './Game.styled'
import GameCell from '../../Components/GameCell/GameCell'
import { GameContext } from '../../Contexts/GameContext'
import Player from '../../Components/Player/Player'


function Game() {
  const  {game} = useContext(GameContext)
  return (
    <Container>
      <Player player={game.player} isPlayerActive={game.player1.choice === game.turn}/>
      <GameBoardStyle>
        {game.board.map((item, index) => (
            <GameCell key={index} cellitem={item} index={index} />
          ))}
      </GameBoardStyle>
       <Player player={game.player2}  isPlayerActive={game.player2.choice === game.turn}/>
    </Container>
  )
}

export default Game;
