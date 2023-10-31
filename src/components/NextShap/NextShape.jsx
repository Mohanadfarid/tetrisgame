import React from 'react';
import styles from "./nextShape.module.css";
import Cell from '../cell/Cell';
const NextShape = ({nextShape}) => {
    return (
        <div className={`${styles.nextShapContainer}`}>
          {
            nextShape.shape.shape[nextShape.shapeFormIndex].map((columnInfo,colIndex)=>{
              let tempColumnInfo =JSON.parse(JSON.stringify(columnInfo)).reverse()
              return <div style={{"width":`${100/4}%`}} className={`${styles.column}`} key={colIndex}>
              {tempColumnInfo.map((cellInfo,cellIndex)=> <Cell numberOfCells={tempColumnInfo.length+2} cellInfo={cellInfo}/>
              
              )}
              </div>
            }
            )
            
          }
        </div> 
    );
}

export default NextShape;
