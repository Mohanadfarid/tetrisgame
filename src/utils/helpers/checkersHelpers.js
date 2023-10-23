import { removeShapfromBoard } from "./generalHelpers";

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

  export const checkIfShapCanBeInserted =(currentShape, board)=>{
    const shape = currentShape.shape.shape[currentShape.shapeFormIndex]
    const rowpossession = currentShape.rowpossession
    const coulmnPossession = currentShape.coulmnPossession
    const boardStats = board.boardStats

    for(let coulmn=shape.length-1;coulmn>=0;coulmn--){
      for(let row=0;row<shape[coulmn].length;row++){
        if(shape[coulmn][row].isactive===true){ // only checking the shape's active cells
          if(boardStats[coulmnPossession+coulmn][19-rowpossession-row].color!=='black')return false //checking if the shap n
        }
      }
    }
    return true
  }