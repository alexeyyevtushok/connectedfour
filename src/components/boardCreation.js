function boardCreation(columns){
  const board = new Array(columns);
  board.fill([]);
  return board;
}

export default boardCreation;