export const checkForWinner = (board) => {

    
    if(board[0] === board[4] && board[4] === board[8]) {
        return true
    }
     if (board[2] === board[4] && board[4] === board[6]) {
       return true;
     }
}