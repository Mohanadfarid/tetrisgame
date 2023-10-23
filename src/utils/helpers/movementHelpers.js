import { removeShapfromBoard } from "./generalHelpers";

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
  