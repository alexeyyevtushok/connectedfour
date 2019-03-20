import React, {Component} from 'react';

import Header from './Header';
import Board from './Board';

class Game extends Component {
  constructor(props){
    super(props)

    this.state = {
      game:false,
      width:7,
      height:6,
    }

    this.inputHeighthandler = this.inputHeighthandler;
    this.inputWidthHandler = this.inputWidthHandler;
  }
  //clicking on "start(stop)" button
  gameChanger = () => {
    if(this.state.game){
      this.setState({
        game: !this.state.game,
        width:7,
        height:6
      })
    }
    this.setState({
      game: !this.state.game
    })
  }


  handleOptionChange = (event) => {
    if (event.target.value === "option4x4") {
      this.setState({
        width: 4,
        height: 4
      })
    } else if (event.target.value === "option8x6") {
      this.setState({
        width: 8,
        height: 6
      })
    } else if (event.target.value === "option7x7") {
      this.setState({
        width: 7,
        height: 7
      })
    } else if (event.target.value === "option10x6") {
      this.setState({
        width: 10,
        height: 6
      })
    }
    console.log(this.state.width);
    console.log(this.state.height);
  }
  render(){
    if(this.state.game){
      return(
        <div className="main">
          <Header onClicked={this.gameChanger} cstate={this.state.game}/>
          <Board width={this.state.width} height={this.state.height}/>
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
              <label>
                <input 
                className="option-input radio" 
                type="radio" name="config" 
                value="option4x4" 
                onChange={this.handleOptionChange} 
                />
                4x4
              </label>
              <label>
                <input className="option-input radio" 
                type="radio" 
                name="config" 
                value="option8x6" 
                onChange={this.handleOptionChange} />
                8x6
              </label>
              <label>
                <input 
                className="option-input radio" 
                type="radio" 
                name="config" 
                value="option7x7" 
                onChange={this.handleOptionChange} />
                7x7
              </label>
              <label>
                <input 
                className="option-input radio" 
                type="radio" 
                name="config" 
                value="option10x6" 
                onChange={this.handleOptionChange} />
                10x6
              </label>
          </form>
        </div>
      );
  }
}

export default Game;