import React from 'react';

function Header(props){
  return (
    <div className="gameHeader">
      <h1>Connected four game</h1>
      <button onClick={props.onClicked}>{!props.cstate ? 'Play' : 'Stop'}</button>
    </div>
  )
}

export default Header;