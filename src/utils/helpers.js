export const addShapeToBoardAndReturnboard =(curretShape,board)=>{
// to do fix a bug here! (the shapes are reversed!)
    const NewBoard=[...board]
    for (let column = 0; column < curretShape.shape.length; column++) {
        for (let row = 0; row < curretShape.shape[column].length; row++) {
            NewBoard[curretShape.coulmnPossession+column][19-curretShape.rowpossession-row]=curretShape.shape[column][row]
       }
      }
      console.log(NewBoard)
      return NewBoard
}

// a function to retrun the complete shape object to fit in the current shape slice
export const createShapObject =({shape,position})=>{
    const shapeObject={shape,rowpossession:19,coulmnPossession:position,isActive:false}
    shapeObject.isActive = true;
    
    let maxRowHight=0
    for (let coulmnIndex = 0; coulmnIndex < shapeObject.shape.length; coulmnIndex++) {
      if (shapeObject.shape[coulmnIndex].length > maxRowHight) {
        maxRowHight = shapeObject.shape[coulmnIndex].length;
      }
    }
    shapeObject.rowpossession=20-maxRowHight
    return shapeObject
}