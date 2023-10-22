
//board manbulation functions

//a function that addes a shap to the top of a board and return the board
export const addShapeToBoardAndReturnboard = (currentShape, board) => {
  const shape = currentShape.shape.shape[currentShape.shapeFormIndex]
  const rowpossession = currentShape.rowpossession
  const coulmnPossession =  currentShape.coulmnPossession
  const NewBoard = [...board];

  for (let column = 0; column < shape.length; column++) {
    for (let row = 0; row < shape[column].length; row++) {
      NewBoard[coulmnPossession + column][
        19 - rowpossession - row
      ] = shape[column][row];
    }
  }
  return NewBoard;
};

export const deactivateAllBoardCells =(board)=>{
  const tempBoard=[...board]
  for(let coulmn = 0;coulmn<tempBoard.length;coulmn++){
    for(let row = 0; row<tempBoard[coulmn].length;row++){
      tempBoard[coulmn][row].isactive=false;
    }
  }
  return tempBoard
}

const removeShapfromBoard=(currentShape,board)=>{
  const newBoard=[...board];
  const shape=currentShape.shape.shape[currentShape.shapeFormIndex];
  const coulmnPossession = currentShape.coulmnPossession;
  const rowpossession = currentShape.rowpossession

  for(let coulmn=shape.length-1;coulmn>=0;coulmn--){
    for(let row=0;row<shape[coulmn].length;row++){
      if(newBoard[coulmnPossession+coulmn][19-rowpossession-row].isactive===true){ //making sure we are only removing the current shape cells
        newBoard[coulmnPossession+coulmn][19-rowpossession-row]={isactive:false,color:"black"}
      }
    }
  }
  return newBoard
}

//a funciton to move the shape to left on the board
export const moveShapToLeftAndRetrunboard=(currentShape,board)=>{
  let newBoard=[...board];
  const shape=currentShape.shape.shape[currentShape.shapeFormIndex];
  const coulmnPossession = currentShape.coulmnPossession;
  const rowpossession = currentShape.rowpossession
 
  //removing the current shape
  newBoard = [...removeShapfromBoard(currentShape,board)]

  //adding current shape again at old columnPossession-1
  for(let coulmn=shape.length-1;coulmn>=0;coulmn--){
    for(let row=0;row<shape[coulmn].length;row++){
      if(shape[coulmn][row].isactive===true){ //making sure not to override another shape with current's shape black cells
      newBoard[coulmnPossession+coulmn-1][19-rowpossession-row]=shape[coulmn][row]
      }
    }
  }

return newBoard;
}

export const moveShapToRightAndRetrunboard=(currentShape,board)=>{
  let newBoard=[...board];
  const shape = currentShape.shape.shape[currentShape.shapeFormIndex];
  const coulmnPossession = currentShape.coulmnPossession;
  const rowpossession = currentShape.rowpossession

  //removing the current shape
  newBoard = [...removeShapfromBoard(currentShape,board)]


  //adding current shape again at old coulmnPossession + 1
  for(let coulmn=shape.length-1;coulmn>=0;coulmn--){
    for(let row=0;row<shape[coulmn].length;row++){
      if(shape[coulmn][row].isactive===true){ //making sure not to override another shape with current's shape black cells
        newBoard[coulmnPossession+coulmn+1][19-rowpossession-row]=shape[coulmn][row]
      }
    }
  }
  
return newBoard;
}

export const moveShapDownAndRetrunboard=(currentShape,board)=>{
  let newBoard=[...board];
  const shape = currentShape.shape.shape[currentShape.shapeFormIndex];
  const coulmnPossession = currentShape.coulmnPossession;
  const rowpossession = currentShape.rowpossession


  //removing the current shape
  newBoard = [...removeShapfromBoard(currentShape,board)]

  //adding current shape again at old row + 1
  for(let coulmn=shape.length-1;coulmn>=0;coulmn--){
    for(let row=0;row<shape[coulmn].length;row++){
      if(shape[coulmn][row].isactive===true){//making sure not to override another shape with current's shape black cells
      newBoard[coulmnPossession+coulmn][19-rowpossession-row+1]=shape[coulmn][row]
      }
    }
  }

  return newBoard;
}

export const RotateShapAndRetrunboard=(currentShape,board)=>{
  let tempBoard =JSON.parse(JSON.stringify(board))
  const shapeObject=currentShape.shape.shape
  let shape = currentShape.shape.shape[currentShape.shapeFormIndex]
  const rowpossession = currentShape.rowpossession
  const coulmnPossession = currentShape.coulmnPossession
  let shapeFormIndex = currentShape.shapeFormIndex;

    //removing the current shape from the tempBoard
    tempBoard = [...removeShapfromBoard(currentShape,board)]
  
  
    // checking if the form index is the last index in the shape so we could set it to 0  or increase it by one to get another shape
    if(shapeFormIndex!==shapeObject.length-1){
      shapeFormIndex++;
    }else{
      shapeFormIndex=0;
    }
  
    shape = shapeObject[shapeFormIndex]; //setting the shap into another form of the same shape

    for(let column = 0; column < shape.length ; column++ ){
      for(let row = 0 ;row<shape[column].length;row++){
          tempBoard[coulmnPossession+column][19-rowpossession-row] = shape[column][row]
      }
    }
  
return tempBoard;
}

// a function to retrun the complete shape object to fit in the current shape slice
export const createShapObject = ({ shape, position ,shapeFormIndex}) => {
  
  const shapeObject = {
    shape,
    rowpossession: 19,
    coulmnPossession: position,
    shapeFormIndex,
    isActive: false,
  };
  shapeObject.isActive = true;
  const tempShape=shapeObject.shape.shape[shapeFormIndex]
  let maxRowHight = 0;

  for (let coulmnIndex = 0;coulmnIndex < tempShape.length;coulmnIndex++) {
    if (tempShape[coulmnIndex].length > maxRowHight) {
      maxRowHight = tempShape[coulmnIndex].length;
    }
  }
  shapeObject.rowpossession = 20 - maxRowHight;
  return shapeObject;
};

//checkers functions

export const checkIfShapeCanGoLeft = (currentShape, board) => {

  if (!currentShape.shape.color) return false //checking if the there is a shape
  const shape = currentShape.shape.shape[currentShape.shapeFormIndex]
  const rowpossession = currentShape.rowpossession
  const coulmnPossession = currentShape.coulmnPossession
  const boardStats = board.boardStats

  if (coulmnPossession===0)return false //checking if  shape is not at the left edge

  for (let row=0;row<shape[0].length;row++){
    if(boardStats[coulmnPossession-1][20-rowpossession-row-1].color!=='black'&&
    boardStats[coulmnPossession][20-rowpossession-row-1].color!=='black')return false  //if there is not atleast one black cell in the last coulmn or the next to it return false
  }
  return true;
};

export const checkIfShapeCanGoRight = (currentShape, board) => {

  if (!currentShape.shape.color) return false //checking if the there is a shape
  const shape = currentShape.shape.shape[currentShape.shapeFormIndex]
  const rowpossession = currentShape.rowpossession
  const coulmnPossession = currentShape.coulmnPossession
  const boardStats = board.boardStats

  if (coulmnPossession+shape.length-1===9)return false //checking if the shap is not at the right edge

  for (let row=0;row<shape[shape.length-1].length;row++){
    if(boardStats[coulmnPossession+shape.length][20-rowpossession-row-1].color!=='black'&&
    boardStats[coulmnPossession+shape.length-1][20-rowpossession-row-1].color!=='black')return false  //if there is not atleast one black cell in the last coulmn or the next to it return false
  }
  return true;
};

export const checkIfShapeCanGoDown = (currentShape, board) => {

  if (!currentShape.shape.color) return false //checking if the there is a shape

  const shape = currentShape.shape.shape[currentShape.shapeFormIndex]
  const rowpossession = currentShape.rowpossession
  const coulmnPossession = currentShape.coulmnPossession
  let tempBoard =JSON.parse(JSON.stringify(board.boardStats))

  if(rowpossession===0)return false
  
  //removing the shap from the board temporary
  tempBoard = [...removeShapfromBoard(currentShape,tempBoard)]

  //checking the current shape at old row possession - 1
  for(let coulmn=shape.length-1;coulmn>=0;coulmn--){
    for(let row=0;row<shape[coulmn].length;row++){
      if(shape[coulmn][row].isactive===true){ // only checking the shape's active cells
        if(tempBoard[coulmnPossession+coulmn][19-rowpossession-row+1].color!=='black')return false //checking if the shap n
      }
    }
  }
  
  return true
};

export const checkIfShapeCanRotate = (currentShape, board) =>{

  if (!currentShape.shape.color) return false //checking if the there is a shape

  let tempBoard =JSON.parse(JSON.stringify(board.boardStats))
  const shapeObject=currentShape.shape.shape
  let shape = currentShape.shape.shape[currentShape.shapeFormIndex]
  const rowpossession = currentShape.rowpossession
  const coulmnPossession = currentShape.coulmnPossession
  let shapeFormIndex = currentShape.shapeFormIndex;


  //removing the current shape from the tempBoard
  tempBoard = [...removeShapfromBoard(currentShape,tempBoard)]


  // checking if the form index is the last index in the shape so we could set it to 0  or increase it by one to get another shape
  if(shapeFormIndex!==shapeObject.length-1){
    shapeFormIndex++;
  }else{
    shapeFormIndex=0;
  }

  shape = shapeObject[shapeFormIndex]; //setting the shap into another form of the same shape

  //checking if the new form of the shap can fit in the tempBoard
  for(let column = 0; column < shape.length ; column++ ){
    for(let row = 0 ;row<shape[column].length;row++){
      if(tempBoard[coulmnPossession+column]?.[19-rowpossession-row]?.color!=='black')return false
    }
  }
  return true
}