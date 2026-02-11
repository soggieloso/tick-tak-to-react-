import React, { useContext, useEffect } from 'react'
import { Container } from '../../styles/General.styled'
import { GameBoardStyle, GameContainer, GameOverlay, ResetButton } from './Game.styled' // Add all exports here
import GameCell from '../../Components/GameCell/GameCell'
import { GameContext } from '../../Contexts/GameContext'
import Player from '../../Components/Player/Player'
import { ModalContext } from '../../Contexts/ModalContext'
import RoundOverModal from '../../Components/Modal/RoundOverModal'
import { SfxContext } from '../../Contexts/SfxContext'



function Game() {
  const { game, resetRound, rematch, restartGame } = useContext(GameContext)
  const { handleModal } = useContext(ModalContext)
  const { winSfx, completedSfx, clickSfx, hoverSfx } = useContext(SfxContext);

  useEffect(() => {
    if (game.roundWinner) {
      if (game.roundWinner === "Draw") {
        completedSfx();
      } else {
        winSfx();
      }
      
      setTimeout(() => {
        handleModal(<RoundOverModal/>);
      }, 500);
    }
  }, [game.roundWinner, handleModal, winSfx, completedSfx]);

  
  const handleQuickReset = () => {
    clickSfx();
    resetRound();
  };

  const handleQuickRematch = () => {
    clickSfx();
    rematch(); 
  };

  const handleQuickRestart = () => {
    clickSfx();
    restartGame(); 
  };

  return (
    <GameContainer>
      {}
      {game.roundWinner && (
        <GameOverlay>
          <h2>
            {game.roundWinner === "Draw" 
              ? "🤝 Game Draw!" 
              : `🏆 ${game.roundWinner === "player1" ? game.player1.name : game.player2.name} Wins!`}
          </h2>
          <div className="score-banner">
            <span>{game.player1.name}: {game.player1.score}</span>
            <span>VS</span>
            <span>{game.player2.name}: {game.player2.score}</span>
          </div>
          <div className="button-group">
            <ResetButton 
              color="green" 
              onClick={handleQuickReset}
              onMouseEnter={() => hoverSfx()}
            >
              🔄 Next Round
            </ResetButton>
            <ResetButton 
              color="blue" 
              onClick={handleQuickRematch}
              onMouseEnter={() => hoverSfx()}
            >
              🔁 Rematch
            </ResetButton>
            <ResetButton 
              color="purple" 
              onClick={handleQuickRestart}
              onMouseEnter={() => hoverSfx()}
            >
              🎮 New Game
            </ResetButton>
          </div>
        </GameOverlay>
      )}

      <Container>
        <Player 
          player={game.player1} 
          isPlayerActive={game.player1.choice === game.turn && !game.roundWinner}
        />
        <GameBoardStyle>
          {game.board.map((item, index) => (
            <GameCell 
              key={index} 
              cellItem={item}
              index={index} 
              isWinningCell={game.winningCombo?.includes(index) || false} 
              disabled={!!game.roundWinner} 
            />
          ))}
        </GameBoardStyle>
        <Player 
          player={game.player2}  
          isPlayerActive={game.player2.choice === game.turn && !game.roundWinner}
        />
      </Container>
    </GameContainer>
  )
}

export default Game;