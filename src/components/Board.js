import React,{Component} from 'react';
import Cell from './Cell';

import boardCreation from './boardCreation'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: boardCreation(this.props.column),
      current:'red',
    }
  }

  renderCell(x,y){
    return <Cell
    value={this.state.board[x][y]}
    key={x}
    onClick={() => this.handleClick(x)} 
    />
  }

  //click to cell
  handleClick(x){
    //if trying add cell out of range
    if(this.state.board[x].length!==this.props.row){
      const col = this.state.board[x].concat(this.state.current); //add color to array
      const updatedBoard = this.state.board.slice();
      updatedBoard[x] = col;

      this.setState({
        board:updatedBoard,
        current : this.state.current === 'red' ? 'green' : 'red'
      })
    }
  }

  render(){
    //const
    const grid = [];
    const row = this.props.row;
    const column = this.props.column;

    //creation of grid
    for(let y=row-1;y>=0;y--){
      const rows = [];
      for(let x=0;x<column;x++){
        rows.push(this.renderCell(x,y));
      }
      grid.push(<div className="boardRow" key={y}>{rows}</div>)
    }

    //choose color depend on current player
    let playerColor = 'playerColor';
    playerColor += this.state.current === 'red' ? ' player2' : ' player1';

    //if somebody wins
    if(checkWinner(this.state.board,row,column)){
      let winColor = 'winColor';
      winColor += checkWinner(this.state.board,row,column) === 'red' ? ' player2' : ' player1';
      return (
        <div>
            <div className="gameEnd gameWin">Winner is: <div className={winColor}></div></div>
        </div>
      );
    }
    //without winner
    return(
      <div>
        <div><p className="playerLabel">Current player:</p><div className={playerColor}></div></div>
        {grid}
      </div>
    );
  }
}

//Function for checking a winner
const checkWinner = (array,row,column) => {
  row+=column-row;
  const empty = undefined;

  for (let i = 0; i < row; i++) { // iterate rows, bottom to top
    for (let j = 0; j < column; j++) { // iterate columns, left to right
      let currentCell = array[i][j];
      if (currentCell === empty) //if cell!== 'red' or 'grin' -> continue
        continue;

      if (j + 3 < column &&  //check right
        currentCell === array[i][j + 1] &&
        currentCell === array[i][j + 2] &&
        currentCell === array[i][j + 3])
        return currentCell;

      if (i + 3 < row) { //check up
        if (currentCell === array[i + 1][j] &&
          currentCell === array[i + 2][j] &&
          currentCell === array[i + 3][j])
          return currentCell;
        if (j + 3 < column && //check up and right
          currentCell === array[i + 1][j + 1] &&
          currentCell === array[i + 2][j + 2] &&
          currentCell === array[i + 3][j + 3])
          return currentCell;
        if (j - 3 >= 0 && //check up and left
          currentCell === array[i + 1][j - 1] &&
          currentCell === array[i + 2][j - 2] &&
          currentCell === array[i + 3][j - 3])
          return currentCell; //return 'green' or 'red'
      }
    }
  } 
  return empty; // return 'undefined'
}

export default Board;
