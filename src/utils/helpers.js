
//board manbulation functions

//a function that addes a shap to the top of a board and return the board
export const addShapeToBoardAndReturnboard = (currentShape, board) => {
  const NewBoard = [...board];
  console.log(currentShape.shape.shape[currentShape.shapeFormIndex])
  for (let column = 0; column < currentShape.shape.shape[currentShape.shapeFormIndex].length; column++) {
    for (let row = 0; row < currentShape.shape.shape[currentShape.shapeFormIndex][column].length; row++) {
      NewBoard[currentShape.coulmnPossession + column][
        19 - currentShape.rowpossession - row
      ] = currentShape.shape.shape[currentShape.shapeFormIndex][column][row];
    }
  }
  return NewBoard;
};

//a funciton to move the shape to left on the board
export const moveShapToLeftAndRetrunboard=(currentShape,board)=>{
  const newBoard=[...board];
  const shapeInfo=currentShape.shape.shape[currentShape.shapeFormIndex];

  //finding the tallest coulmn so that we could itarate over its rows
  let tallestCoulmn=0;
  for(let i =0;i<shapeInfo.length;i++){
    if(shapeInfo[i].length>tallestCoulmn){
      tallestCoulmn=shapeInfo[i].length
    }
  }

  for(let coulmn=0;coulmn<shapeInfo.length;coulmn++){
    for(let row=0;row<tallestCoulmn;row++){//19
      if(newBoard[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession-row].color==='black'&&coulmn===0){}
      else{
        newBoard[currentShape.coulmnPossession-1+coulmn][19-currentShape.rowpossession-row]=
        newBoard[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession-row]
      }
      if(coulmn===shapeInfo.length-1){
        newBoard[currentShape.coulmnPossession+shapeInfo.length-1][19-currentShape.rowpossession-row]={isfull:false,color:"black"}
      }

    }
  }

return newBoard;
}

export const moveShapToRightAndRetrunboard=(currentShape,board)=>{
  const newBoard=[...board];
  const shapeInfo=currentShape.shape.shape[currentShape.shapeFormIndex];

  //finding the tallest coulmn so that we could itarate over its rows
  let tallestCoulmn=0;
  for(let i =0;i<shapeInfo.length;i++){
    if(shapeInfo[i].length>tallestCoulmn){
      tallestCoulmn=shapeInfo[i].length
    }
  }

  for(let coulmn=shapeInfo.length-1;coulmn>=0;coulmn--){
    for(let row=0;row<tallestCoulmn;row++){
      if(newBoard[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession-row].color==='black'&&coulmn===shapeInfo.length-1){}
      else{
      newBoard[currentShape.coulmnPossession+1+coulmn][19-currentShape.rowpossession-row]=
      newBoard[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession-row]
      }
      if(coulmn===0){
        newBoard[currentShape.coulmnPossession][19-currentShape.rowpossession-row]={isfull:false,color:"black"}
      }

    }
  }

return newBoard;
}

export const moveShapDownAndRetrunboard=(currentShape,board)=>{
  const newBoard=[...board];
  const shapeInfo=currentShape.shape.shape[currentShape.shapeFormIndex];

    //finding the tallest coulmn so that we could itarate over its rows
    let tallestCoulmn=0;
    for(let i =0;i<shapeInfo.length;i++){
      if(shapeInfo[i].length>tallestCoulmn){
        tallestCoulmn=shapeInfo[i].length
      }
    }

  for(let coulmn=0;coulmn<shapeInfo.length;coulmn++){
    for(let row = 0;row<tallestCoulmn;row++){
      if(newBoard[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession-row].color==='black'&&row===0){}
      else{
        newBoard[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession-row+1]=
        newBoard[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession-row]
      }
    }
    if(shapeInfo[coulmn].length===tallestCoulmn){
      newBoard[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession-tallestCoulmn+1]={isfull:false,color:"black"}
    }
  }
  return newBoard;
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

  let maxRowHight = 0;
  for (
    let coulmnIndex = 0;
    coulmnIndex < shapeObject.shape.shape[shapeFormIndex].length;
    coulmnIndex++
  ) {
    if (shapeObject.shape.shape[shapeFormIndex][coulmnIndex].length > maxRowHight) {
      maxRowHight = shapeObject.shape.shape[shapeFormIndex][coulmnIndex].length;
    }
  }
  shapeObject.rowpossession = 20 - maxRowHight;
  return shapeObject;
};

//checkers functions

export const checkIfShapeCanGoLeft = (currentShape, board) => {
  
  const shape = currentShape.shape.shape[currentShape.shapeFormIndex]
  const rowpossession = currentShape.rowpossession
  const coulmnPossession = currentShape.coulmnPossession

  if (!shape[0]||coulmnPossession===0)return false //checking if the there is a shape and the shap is not at the left edge
  for (let row=0;row<shape[0].length;row++){
    if(board.boardStats[coulmnPossession-1][20-rowpossession-row-1].color!=='black'&&
    board.boardStats[coulmnPossession][20-rowpossession-row-1].color!=='black')return false  //if there is not atleast one black cell in the last coulmn or the next to it return false
  }
  return true;
};

export const checkIfShapeCanGoRight = (currentShape, board) => {
  if (!currentShape.shape.shape[currentShape.shapeFormIndex][0]||currentShape.coulmnPossession+currentShape.shape.shape[currentShape.shapeFormIndex].length-1===9)return false //checking if the there is a shape and the shap is not at the right edge
  for (let row=0;row<currentShape.shape.shape[currentShape.shapeFormIndex][currentShape.shape.shape[currentShape.shapeFormIndex].length-1].length;row++){
    if(board.boardStats[currentShape.coulmnPossession+currentShape.shape.shape[currentShape.shapeFormIndex].length][20-currentShape.rowpossession-row-1].color!=='black'&&
    board.boardStats[currentShape.coulmnPossession+currentShape.shape.shape[currentShape.shapeFormIndex].length-1][20-currentShape.rowpossession-row-1].color!=='black')return false  //if there is not atleast one black cell in the last coulmn or the next to it return false
  }
  return true;
};

export const checkIfShapeCanGoDown = (currentShape, board) => {

    //finding the tallest coulmn so that we know the bottom limits to our shape
    let tallestCoulmn=0;
    for(let i =0;i<currentShape.shape.shape[currentShape.shapeFormIndex].length;i++){
      if(currentShape.shape.shape[currentShape.shapeFormIndex][i].length>tallestCoulmn){
        tallestCoulmn=currentShape.shape.shape[currentShape.shapeFormIndex][i].length
      }
    }


  if (!currentShape.shape.shape[currentShape.shapeFormIndex][0]||currentShape.rowpossession===0)return false //checking if the there is a shape and the shap is not at the bottom edge
  for(let coulmn=0;coulmn<currentShape.shape.shape[currentShape.shapeFormIndex].length;coulmn++){
    if(board.boardStats[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession].color!=='black'&&
    board.boardStats[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession+1].color!=='black')return false  //if there is not atleast one black cell in the last coulmn or the next to it return false
  }
  return true
};