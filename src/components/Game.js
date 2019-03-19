import React, {Component} from 'react';

import Header from './Header';
import Board from './Board';

class Game extends Component {
  constructor(props){
    super(props)

    this.state = {
      game:false
    }
  }
  //clicking on "start(stop)" button
  gameChanger = () => {
    this.setState(prevState => {
      return {
        game: !prevState.game
      }
    });
  }
    
  render(){
    if(this.state.game===false){
      return(
      <div className="main">
        <Header onClicked={this.gameChanger} cstate={this.state.game}/>
        <div className="gameEnd">Press button to start a game</div>
      </div>
      )
    }
    return(
      <div className="main">
        <Header onClicked={this.gameChanger} cstate={this.state.game}/>
        <Board/>
      </div>
    );
  }
}

export default Game;