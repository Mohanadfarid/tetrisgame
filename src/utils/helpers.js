
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

//a funciton to move the shape to left on the board
export const moveShapToLeftAndRetrunboard=(currentShape,board)=>{
  const newBoard=[...board];
  const shape=currentShape.shape.shape[currentShape.shapeFormIndex];
  const coulmnPossession = currentShape.coulmnPossession;
  const rowpossession = currentShape.rowpossession
  
  //finding the tallest coulmn so that we could itarate over its rows
  let tallestCoulmn=0;
  for(let i =0;i<shape.length;i++){
    if(shape[i].length>tallestCoulmn){
      tallestCoulmn=shape[i].length
    }
  }

  for(let coulmn=0;coulmn<shape.length;coulmn++){
    for(let row=0;row<tallestCoulmn;row++){//19
      if(newBoard[coulmnPossession+coulmn][19-rowpossession-row].color==='black'&&coulmn===0){}
      else{
        newBoard[coulmnPossession-1+coulmn][19-rowpossession-row]=
        newBoard[coulmnPossession+coulmn][19-rowpossession-row]
      }
      if(coulmn===shape.length-1){
        newBoard[coulmnPossession+shape.length-1][19-rowpossession-row]={isfull:false,color:"black"}
      }

    }
  }

return newBoard;
}

export const moveShapToRightAndRetrunboard=(currentShape,board)=>{
  const newBoard=[...board];
  const shape = currentShape.shape.shape[currentShape.shapeFormIndex];
  const coulmnPossession = currentShape.coulmnPossession;
  const rowpossession = currentShape.rowpossession
  

  //finding the tallest coulmn so that we could itarate over its rows
  let tallestCoulmn=0;
  for(let i =0;i<shape.length;i++){
    if(shape[i].length>tallestCoulmn){
      tallestCoulmn=shape[i].length
    }
  }

  for(let coulmn=shape.length-1;coulmn>=0;coulmn--){
    for(let row=0;row<tallestCoulmn;row++){
      if(newBoard[coulmnPossession+coulmn][19-rowpossession-row].color==='black'&&coulmn===shape.length-1){}
      else{
      newBoard[coulmnPossession+1+coulmn][19-rowpossession-row]=
      newBoard[coulmnPossession+coulmn][19-rowpossession-row]
      }
      if(coulmn===0){
        newBoard[coulmnPossession][19-rowpossession-row]={isfull:false,color:"black"}
      }

    }
  }

return newBoard;
}

export const moveShapDownAndRetrunboard=(currentShape,board)=>{
  const newBoard=[...board];
  const shape = currentShape.shape.shape[currentShape.shapeFormIndex];
  const coulmnPossession = currentShape.coulmnPossession;
  const rowpossession = currentShape.rowpossession

    //finding the tallest coulmn so that we could itarate over its rows
    let tallestCoulmn=0;
    for(let i =0;i<shape.length;i++){
      if(shape[i].length>tallestCoulmn){
        tallestCoulmn=shape[i].length
      }
    }

  for(let coulmn=0;coulmn<shape.length;coulmn++){
    for(let row = 0;row<tallestCoulmn;row++){
      if(newBoard[coulmnPossession+coulmn][19-rowpossession-row].color==='black'&&row===0){}
      else{
        newBoard[coulmnPossession+coulmn][19-rowpossession-row+1]=
        newBoard[coulmnPossession+coulmn][19-rowpossession-row]
      }
    }
    if(shape[coulmn].length===tallestCoulmn){
      newBoard[coulmnPossession+coulmn][19-rowpossession-tallestCoulmn+1]={isfull:false,color:"black"}
    }
  }
  return newBoard;
}

export const RotateShapAndRetrunboard=(currentShape,board)=>{
  const tempBoard =JSON.parse(JSON.stringify(board))
  const shapeObject=currentShape.shape.shape
  let shape = currentShape.shape.shape[currentShape.shapeFormIndex]
  const rowpossession = currentShape.rowpossession
  const coulmnPossession = currentShape.coulmnPossession
  const shapeColor = currentShape.shape.color;
  let shapeFormIndex = currentShape.shapeFormIndex;

    //removing the current shape from the tempBoard
    for(let column = 0; column < shape.length ; column++ ){
      for(let row = 0 ;row<shape[column].length;row++){
        if(tempBoard[coulmnPossession+column][19-rowpossession-row].color===shapeColor){
          tempBoard[coulmnPossession+column][19-rowpossession-row] = {isfull:false,color:"black"}
        }
      }
    }
  
  
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

  if (!currentShape.shape.color) return false //checking if the there is a shape
  const shape = currentShape.shape.shape[currentShape.shapeFormIndex]
  const rowpossession = currentShape.rowpossession
  const coulmnPossession = currentShape.coulmnPossession
  const boardStats = board.boardStats

  if (coulmnPossession===0)return false //checking if  shap is not at the left edge

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
  const boardStats = board.boardStats

    //finding the tallest coulmn so that we know the bottom limits to our shape
    let tallestCoulmn=0;
    for(let i =0;i<shape.length;i++){
      if(shape[i].length>tallestCoulmn){
        tallestCoulmn=shape[i].length
      }
    }


  if (rowpossession===0)return false //checking if the shap is not at the bottom edge
  for(let coulmn=0;coulmn<shape.length;coulmn++){
    if((boardStats[coulmnPossession+coulmn][19-rowpossession].color!==`black`)&&
    boardStats[coulmnPossession+coulmn][19-rowpossession+1].color!=='black')return false  //if there is not atleast one black cell in the last coulmn or the next to it return false
  }
  return true
};

export const checkIfShapeCanRotate = (currentShape, board) =>{

  if (!currentShape.shape.color) return false //checking if the there is a shape

  const tempBoard =JSON.parse(JSON.stringify(board.boardStats))
  const shapeObject=currentShape.shape.shape
  let shape = currentShape.shape.shape[currentShape.shapeFormIndex]
  const rowpossession = currentShape.rowpossession
  const coulmnPossession = currentShape.coulmnPossession
  const shapeColor = currentShape.shape.color;
  let shapeFormIndex = currentShape.shapeFormIndex;


  //removing the current shape from the tempBoard
  for(let column = 0; column < shape.length ; column++ ){
    for(let row = 0 ;row<shape[column].length;row++){
      if(tempBoard[coulmnPossession+column][19-rowpossession-row].color===shapeColor){
        tempBoard[coulmnPossession+column][19-rowpossession-row] = {isfull:false,color:"black"}
      }
    }
  }


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
      console.log(coulmnPossession+column,rowpossession+row)
      if(tempBoard[coulmnPossession+column]?.[19-rowpossession-row]?.color!=='black')return false
    }
  }
  return true
}