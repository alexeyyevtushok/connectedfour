import React, {Component} from 'react';

import Header from './Header';
import Board from './Board';

class Game extends Component {
  constructor(props){
    super(props)

    this.state = {
      game:false,
      column:7,
      row:6,
    }
  }
  //clicking on "start(stop)" button
  gameChanger = () => {
    if(this.state.game){
      this.setState({
        game: !this.state.game,
        column:7,
        row:6
      })
    }
    this.setState({
      game: !this.state.game
    })
  }
  //grid size 
  handleOptionChange = (event) => {
    switch(event.target.value) {
      case '4x4':
        this.setState({
          column: 4,
          row: 4
        });
        break;
      case '8x6':
        this.setState({
          column: 8,
          row: 6
        });
        break;
      case '9x6':
        this.setState({
          column: 9,
          row: 6
        });
        break;
      case '10x6':
        this.setState({
          column: 10,
          row: 6
        });
        break;
      default:
      this.setState({
        column: 7,
        row: 6
      });
    }
  }

  addInput(option){
    const lablels = []
      lablels.push(
        <label>
        <input 
        className="option-input radio" 
        type="radio" name="config" 
        value= {option}
        onChange={this.handleOptionChange} 
        />
        {option}
      </label>
      );
    return lablels;
  }

  render(){
    if(this.state.game){
      return(
        <div className="main">
          <Header onClicked={this.gameChanger} cstate={this.state.game}/>
          <Board column={this.state.column} row={this.state.row}/>
        </div>
      );
    }
      return(
        <div className="main">
          <Header onClicked={this.gameChanger} cstate={this.state.game} />
          <form className="gameEnd">
          <p>Base grid size: 7x6</p>
          <hr></hr>
            <div className="gameEndLabel">Choose another size: </div>
              {this.addInput("4x4")}
              {this.addInput("8x6")}
              {this.addInput("9x6")}
              {this.addInput("10x6")}
          </form>
        </div>
      );
  }
}

export default Game;