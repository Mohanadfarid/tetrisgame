
//board manbulation functions

//a function that addes a shap to the top of a board and return the board
export const addShapeToBoardAndReturnboard = (curretShape, board) => {
  const NewBoard = [...board];
  for (let column = 0; column < curretShape.shape.length; column++) {
    for (let row = 0; row < curretShape.shape[column].length; row++) {
      NewBoard[curretShape.coulmnPossession + column][
        19 - curretShape.rowpossession - row
      ] = curretShape.shape[column][row];
    }
  }
  return NewBoard;
};

//a funciton to move the shape to left on the board
export const moveShapToLeftAndRetrunboard=(currentShape,board)=>{
  const newBoard=[...board];
  const shapeInfo=currentShape.shape;
  for(let coulmn=0;coulmn<shapeInfo.length;coulmn++){
    for(let row=0;row<shapeInfo[coulmn].length;row++){//19
      newBoard[currentShape.coulmnPossession-1+coulmn][19-currentShape.rowpossession-row]=
      newBoard[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession-row];
      newBoard[currentShape.coulmnPossession+shapeInfo.length-1][19-currentShape.rowpossession-row]={isfull:false,color:"black"}
    }
  }
  

return newBoard;
}

// a function to retrun the complete shape object to fit in the current shape slice
export const createShapObject = ({ shape, position }) => {
  const shapeObject = {
    shape,
    rowpossession: 19,
    coulmnPossession: position,
    isActive: false,
  };
  shapeObject.isActive = true;

  let maxRowHight = 0;
  for (
    let coulmnIndex = 0;
    coulmnIndex < shapeObject.shape.length;
    coulmnIndex++
  ) {
    if (shapeObject.shape[coulmnIndex].length > maxRowHight) {
      maxRowHight = shapeObject.shape[coulmnIndex].length;
    }
  }
  shapeObject.rowpossession = 20 - maxRowHight;
  return shapeObject;
};

//checkers functions
export const checkIfShapeCanGoDown = (currnetShape, board) => {};
export const checkIfShapeCanGoLeft = (currentShape, board) => {
  //to do clean this logic 
  if (currentShape.shape[0]) {
    for (let row = 0; row < currentShape.shape[0].length; row++) {
      if (
        currentShape.coulmnPossession - 1 > 0
          ? board.boardStats[currentShape.coulmnPossession - 1][
              currentShape.rowpossession + row
            ].isfull === true
          : true ||
          currentShape.coulmnPossession > 0
          ? board.boardStats[currentShape.coulmnPossession][
              currentShape.rowpossession + row
            ].isfull === true
          : true
      ) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
};

export const checkIfShapeCanGoRight = (currentShape, board) => {
   //to do clean this logic
   if (currentShape.shape[currentShape.shape.length-1]) {
    for (let row = 0; row < currentShape.shape[currentShape.shape.length-1].length; row++) {
      if (
        currentShape.coulmnPossession +currentShape.shape.length-1+1 > 0
          ? board.boardStats[currentShape.coulmnPossession +currentShape.shape.length-1+1][
              currentShape.rowpossession + row
            ].isfull === true
          : true ||
          currentShape.coulmnPossession +currentShape.shape.length-1 > 0
          ? board.boardStats[currentShape.coulmnPossession +currentShape.shape.length-1][
              currentShape.rowpossession + row
            ].isfull === true
          : true
      ) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
};
