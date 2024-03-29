//a function that addes a shap to the top of a board and return the board
export const addShapeToBoardAndReturnboard = (currentShape, board) => {
  const {shapeFormIndex,rowpossession,coulmnPossession}=currentShape
  const shape = currentShape.shape.shape[shapeFormIndex];
  const NewBoard = [...board];

  for (let column = 0; column < shape.length; column++) {
    for (let row = 0; row < shape[column].length; row++) {
      NewBoard[coulmnPossession + column][19 - rowpossession - row] =
        shape[column][row];
    }
  }
  return NewBoard;
};

export const removeShapfromBoard = (currentShape, board) => {
  const {shapeFormIndex,rowpossession,coulmnPossession}=currentShape
  const newBoard = [...board];
  const shape = currentShape.shape.shape[shapeFormIndex];


  for (let coulmn = shape.length - 1; coulmn >= 0; coulmn--) {
    for (let row = 0; row < shape[coulmn].length; row++) {
      if (
        newBoard[coulmnPossession + coulmn][19 - rowpossession - row]
          .isactive === true
      ) {
        //making sure we are only removing the current shape cells
        newBoard[coulmnPossession + coulmn][19 - rowpossession - row] = {
          isactive: false,
          color: "black",
        };
      }
    }
  }
  return newBoard;
};

export const deactivateAllBoardCells = (board) => {
  const tempBoard = [...board];
  for (let coulmn = 0; coulmn < tempBoard.length; coulmn++) {
    for (let row = 0; row < tempBoard[coulmn].length; row++) {
      tempBoard[coulmn][row].isactive = false;
    }
  }
  return tempBoard;
};

// a function to retrun the complete shape object to fit in the current shape slice
export const createShapObject = ({ shape, position, shapeFormIndex }) => {
  const shapeObject = {
    shape,
    rowpossession: 19,
    coulmnPossession: position,
    shapeFormIndex,
    isActive: false,
  };
  shapeObject.isActive = true;
  const tempShape = shapeObject.shape.shape[shapeFormIndex];
  let maxRowHight = 0;

  for (let coulmnIndex = 0; coulmnIndex < tempShape.length; coulmnIndex++) {
    if (tempShape[coulmnIndex].length > maxRowHight) {
      maxRowHight = tempShape[coulmnIndex].length;
    }
  }
  shapeObject.rowpossession = 20 - maxRowHight;
  return shapeObject;
};

export const getFullRowsIndices = (board) => {
  let FullRowsIndices=[]

  for(let row=0;row<20;row++){
    let isRowFull = true;
    for(let coulmn=0;coulmn<10;coulmn++){
      if(board[coulmn][row].color===`black`){
        isRowFull=false;
      }
    }
    if(isRowFull){FullRowsIndices.push(row)}
  }
  return FullRowsIndices;
};

const removeRowAndReturnBoard =(board,rowIndex)=>{
  let updatedBoard=[...board]
  for(let column=0;column<board.length;column++){
    board[column][rowIndex]={isactive:false,color:'black'}
  }
  return updatedBoard
}

const shiftBoardRows=(board,index)=>{ //function to shift all the rows to cover the empty rows
let updatedBoard =[...board]
for(let column=0;column<10;column++){
  for(let row=index;row>0;row--){
    updatedBoard[column][row]=updatedBoard[column][row-1]
  }
}
return updatedBoard
}

export const removeFullRowsAndShiftBoard=(board,FullRowsIndices)=>{ // afunction to remove full rows and shift the board 
  let updatedboard=[...board];
  
  FullRowsIndices.forEach((index)=>{
    updatedboard=removeRowAndReturnBoard(updatedboard,index)
    updatedboard=shiftBoardRows(updatedboard,index)
  })

  return updatedboard
}

export const calcSpeedOnScore = (score)=>{
  if (score<=30) {
    return 1000
  }else if(score<=60){
    return 900
  }
  else if(score<=90){
    return 800
  }
  else if(score<=120){
    return 700
  }
  else if(score<=150){
    return 600
  }
  else if(score<=180){
    return 500
  }
  else if(score<=210){
    return 400
  }
  else if(score<=240){
    return 300
  }
  else if(score<=270){
    return 200
  }
  else {
    return 100
  }
}