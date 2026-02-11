import { createContext, useState, useEffect } from "react";
import { genConfig } from "react-nice-avatar";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [null, null, null, null, null, null, null, null, null],
    player1: {
      choice: "x",
      name: "Player1",
      score: 0,
      color: "",
      avatarConfig: genConfig(),
    },
    player2: {
      choice: "o",
      name: "Player2",
      score: 0,
      color: "",
      avatarConfig: genConfig(),
    },
    turn: "x",
    roundWinner: "",
    winningCombo: [],
  });

  const [gameEnded, setGameEnded] = useState(false);

  const checkWinner = (board) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], winningCombo: pattern };
      }
    }

    if (board.every((cell) => cell !== null)) {
      return { winner: "draw", winningCombo: [] };
    }

    return null;
  };

  const updateBoard = (index) => {
    setGame((prevGame) => {
      
      if (prevGame.board[index] !== null || prevGame.roundWinner) {
        return prevGame;
      }

      const updatedBoard = [...prevGame.board];
      updatedBoard[index] = prevGame.turn;

      
      const result = checkWinner(updatedBoard);

      if (result) {
        
        const { winner, winningCombo } = result;

        if (winner === "draw") {
          // Draw case
          return {
            ...prevGame,
            board: updatedBoard,
            roundWinner: "Draw",
            winningCombo: winningCombo,
            player1: {
              ...prevGame.player1,
              score: prevGame.player1.score + 0.5,
            },
            player2: {
              ...prevGame.player2,
              score: prevGame.player2.score + 0.5,
            },
          };
        } else {
          
          let winnerKey;
          if (prevGame.player1.choice === winner) {
            winnerKey = "player1";
          } else {
            winnerKey = "player2";
          }

          return {
            ...prevGame,
            board: updatedBoard,
            roundWinner: winnerKey,
            winningCombo: winningCombo,
            [winnerKey]: {
              ...prevGame[winnerKey],
              score: prevGame[winnerKey].score + 1,
            },
          };
        }
      } else {
       
        return {
          ...prevGame,
          board: updatedBoard,
          turn: prevGame.turn === "x" ? "o" : "x",
        };
      }
    });
  };

  
  const resetBoard = () => {
    setGame((prevGame) => ({
      ...prevGame,
      board: [null, null, null, null, null, null, null, null, null],
      turn: "x",
      roundWinner: "",
      winningCombo: [],
    }));
    setGameEnded(false);
  };

  
  const restartGame = () => {
    setGame({
      board: [null, null, null, null, null, null, null, null, null],
      player1: {
        choice: "x",
        name: "Player1",
        score: 0,
        color: "",
        avatarConfig: genConfig(),
      },
      player2: {
        choice: "o",
        name: "Player2",
        score: 0,
        color: "",
        avatarConfig: genConfig(),
      },
      turn: "x",
      roundWinner: "",
      winningCombo: [],
    });
    setGameEnded(false);
  };

  
  const resetRound = () => {
    setGame((prevGame) => ({
      ...prevGame,
      board: [null, null, null, null, null, null, null, null, null],
      turn: "x",
      roundWinner: "",
      winningCombo: [],
    }));
    setGameEnded(false);
  };

  
  const rematch = () => {
    setGame((prevGame) => ({
      ...prevGame,
      board: [null, null, null, null, null, null, null, null, null],
      player1: {
        ...prevGame.player1,
        score: 0,
      },
      player2: {
        ...prevGame.player2,
        score: 0,
      },
      turn: "x",
      roundWinner: "",
      winningCombo: [],
    }));
    setGameEnded(false);
  };

  const toggleChoice = (choice) => (choice === "x" ? "o" : "x");

  const switchTurn = () => {
    setGame((prevGame) => ({
      ...prevGame,
      player1: {
        ...prevGame.player1,
        choice: toggleChoice(prevGame.player1.choice),
      },
      player2: {
        ...prevGame.player2,
        choice: toggleChoice(prevGame.player2.choice),
      },
      turn: "x",
    }));
  };

  
  useEffect(() => {
    if (game.roundWinner && !gameEnded) {
      setGameEnded(true);
    }
  }, [game.roundWinner, gameEnded]);

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard,
        resetBoard,
        resetRound, 
        rematch, 
        restartGame,
        checkWinner,
        switchTurn,
        gameEnded,
        setGameEnded,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
