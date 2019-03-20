import React,{Component} from 'react';
import Cell from './Cell';

import boardCreation from './boardCreation'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: boardCreation(this.props.width),
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
    if(this.state.board[x].length!==6){
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
    const height = this.props.height;
    const width = this.props.width;

    //creation of grid
    for(let y=height-1;y>=0;y--){
      const row = [];
      for(let x=0;x<width;x++){
        row.push(this.renderCell(x,y));
      }
      grid.push(<div className="boardRow" key={y}>{row}</div>)
    }

    //choose color depend on current player
    let playerColor = 'playerColor';
    playerColor += this.state.current === 'red' ? ' player2' : ' player1';

    //if somebody wins
    if(winner(this.state.board,height,width)){
      let winColor = 'winColor';
      winColor += winner(this.state.board,height,width) === 'red' ? ' player2' : ' player1';
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
const winner = (array,height,width) => {
  height+=width-height;
  const empty = undefined;

  for (let i = 0; i < height; i++) { // iterate rows, bottom to top
    for (let j = 0; j < width; j++) { // iterate columns, left to right
      let currentCell = array[i][j];
      if (currentCell === empty) //if cell!== 'red' or 'grin' -> continue
        continue;

      if (j + 3 < width &&  //check right
        currentCell === array[i][j + 1] &&
        currentCell === array[i][j + 2] &&
        currentCell === array[i][j + 3])
        return currentCell;

      if (i + 3 < height) { //check up
        if (currentCell === array[i + 1][j] &&
          currentCell === array[i + 2][j] &&
          currentCell === array[i + 3][j])
          return currentCell;
        if (j + 3 < width && //check up and right
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
