
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
  const shapeInfo=currentShape.shape;

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
  const shapeInfo=currentShape.shape;

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

export const checkIfShapeCanGoLeft = (currentShape, board) => {
  if (!currentShape.shape[0]||currentShape.coulmnPossession===0)return false //checking if the there is a shape and the shap is not at the left edge
  for (let row=0;row<currentShape.shape[0].length;row++){
    // debug code tobe removed later!!
    // console.log(`index `,currentShape.coulmnPossession-1,20-currentShape.rowpossession-row-1)
    // console.log(`value`,board.boardStats[currentShape.coulmnPossession-1][20-currentShape.rowpossession-row-1].color)

    // console.log(`index `,currentShape.coulmnPossession,20-currentShape.rowpossession-row-1)
    // console.log(`value`,board.boardStats[currentShape.coulmnPossession][20-currentShape.rowpossession-row-1].color)
    // console.log(`-----------------------------------`)
    if(board.boardStats[currentShape.coulmnPossession-1][20-currentShape.rowpossession-row-1].color!=='black'&&
    board.boardStats[currentShape.coulmnPossession][20-currentShape.rowpossession-row-1].color!=='black')return false  //if there is not atleast one black cell in the last coulmn or the next to it return false
  }
  return true;
};

export const checkIfShapeCanGoRight = (currentShape, board) => {
  if (!currentShape.shape[0]||currentShape.coulmnPossession+currentShape.shape.length-1===9)return false //checking if the there is a shape and the shap is not at the right edge
  for (let row=0;row<currentShape.shape[currentShape.shape.length-1].length;row++){
    if(board.boardStats[currentShape.coulmnPossession+currentShape.shape.length][20-currentShape.rowpossession-row-1].color!=='black'&&
    board.boardStats[currentShape.coulmnPossession+currentShape.shape.length-1][20-currentShape.rowpossession-row-1].color!=='black')return false  //if there is not atleast one black cell in the last coulmn or the next to it return false
  }
  return true;
};

export const checkIfShapeCanGoDown = (currentShape, board) => {

    //finding the tallest coulmn so that we know the bottom limits to our shape
    let tallestCoulmn=0;
    for(let i =0;i<currentShape.shape.length;i++){
      if(currentShape.shape[i].length>tallestCoulmn){
        tallestCoulmn=currentShape.shape[i].length
      }
    }


  if (!currentShape.shape[0]||currentShape.rowpossession===0)return false //checking if the there is a shape and the shap is not at the bottom edge
  for(let coulmn=0;coulmn<currentShape.shape.length;coulmn++){
    // debug code tobe removed later!!
    // console.log(`index `,currentShape.coulmnPossession+coulmn,19-currentShape.rowpossession)
    // console.log(`value`,board.boardStats[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession].color)

    // console.log(`index `,currentShape.coulmnPossession+coulmn,19-currentShape.rowpossession+1)
    // console.log(`value`,board.boardStats[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession+1].color)
    // console.log(`-----------------------------------`)

    if(board.boardStats[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession].color!=='black'&&
    board.boardStats[currentShape.coulmnPossession+coulmn][19-currentShape.rowpossession+1].color!=='black')return false  //if there is not atleast one black cell in the last coulmn or the next to it return false
  }
  return true
};