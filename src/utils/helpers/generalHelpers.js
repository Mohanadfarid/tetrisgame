//a function that addes a shap to the top of a board and return the board
export const addShapeToBoardAndReturnboard = (currentShape, board) => {
  const shape = currentShape.shape.shape[currentShape.shapeFormIndex];
  const rowpossession = currentShape.rowpossession;
  const coulmnPossession = currentShape.coulmnPossession;
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
  const newBoard = [...board];
  const shape = currentShape.shape.shape[currentShape.shapeFormIndex];
  const coulmnPossession = currentShape.coulmnPossession;
  const rowpossession = currentShape.rowpossession;

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

const shiftBoardRows=(board)=>{ //function to shift all the rows to cover the empty rows
let updatedBoard =[...board]
}

export const removeFullRowsAndShiftBoard=(board,FullRowsIndices)=>{ // afunction to remove full rows and shift the board 
  let updatedboard=[...board];
  
  FullRowsIndices.forEach((index)=>{
    updatedboard=removeRowAndReturnBoard(updatedboard,index)
  })

  return updatedboard
}
