import React, { useContext } from "react";
import { Title, Subtitle } from "../../styles/General.styled";
import { ModalHeader, ModalFooter, ModalBody } from "./Modal.styled";
import Button from "../Button/Button";
import { GameContext } from "../../Contexts/GameContext";
import { ModalContext } from "../../Contexts/ModalContext";
import { SfxContext } from "../../Contexts/SfxContext";
import { useNavigate } from "react-router-dom";

function RoundOverModal() {
  const { resetRound, game, rematch, restartGame } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const { hoverSfx, clickSfx, completedSfx } = useContext(SfxContext);

  const navigate = useNavigate();

  const getWinnerName = () => {
    if (game.roundWinner === "player1") {
      return game.player1.name;
    } else if (game.roundWinner === "player2") {
      return game.player2.name;
    } else {
      return null;
    }
  };

  const winnerName = getWinnerName();
  const isDraw = game.roundWinner === "Draw";

  
  const handleContinue = () => {
    clickSfx();
    handleModal(); 
    
    
    setTimeout(() => {
      resetRound(); 
    }, 50);
  };

  
  const handleRematch = () => {
    clickSfx();
    handleModal(); 
    
    setTimeout(() => {
      rematch();
    }, 50);
  };

  
  const handleRestart = () => {
    completedSfx();
    handleModal(); 
    
    setTimeout(() => {
      restartGame(); 
      navigate("/");
    }, 50);
  };

  
  const handleQuit = () => {
    clickSfx();
    handleModal();
    navigate("/");
  };

  return (
    <>
      <ModalHeader>
        <Title primary>
          {isDraw ? "🤝 Round Draw!" : `🏆 ${winnerName} Wins!`}
        </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary>
          {isDraw
            ? "This round was a draw"
            : `${winnerName} won this round`}
        </Subtitle>
        
        {/* Score Display */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          width: '100%', 
          margin: '20px 0',
          padding: '15px',
          background: 'rgba(0,0,0,0.1)',
          borderRadius: '10px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{game.player1.name}</div>
            <div style={{ fontSize: '2rem', color: '#FFD700' }}>{game.player1.score}</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{game.player2.name}</div>
            <div style={{ fontSize: '2rem', color: '#FFD700' }}>{game.player2.score}</div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px', 
          width: '100%' 
        }}>
          {}
          <div style={{ 
            display: 'flex', 
            gap: '10px', 
            justifyContent: 'center' 
          }}>
            <Button
              color="green"
              onClick={handleContinue}
              onMouseEnter={() => hoverSfx()}
            >
              ⏭️ Continue
            </Button>
            <Button
              color="purple"
              onClick={handleRematch}
              onMouseEnter={() => hoverSfx()}
            >
              🔄 Rematch
            </Button>
          </div>
          
          {}
          <div style={{ 
            display: 'flex', 
            gap: '10px', 
            justifyContent: 'center' 
          }}>
            <Button
              color="blue"
              onClick={handleRestart}
              onMouseEnter={() => hoverSfx()}
            >
              🔁 New Game
            </Button>
            <Button
              color="red"
              onClick={handleQuit}
              onMouseEnter={() => hoverSfx()}
            >
              🏠 Quit
            </Button>
          </div>
        </div>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;