import React from 'react';
import styles from "./nextShape.module.css";
const NextShape = ({nextShape}) => {
    return (
        <div className={`${styles.nextShapContainer}`}>
          {
            nextShape.shape.shape[nextShape.shapeFormIndex].map((columnInfo,colIndex)=>{
              let tempColumnInfo =JSON.parse(JSON.stringify(columnInfo)).reverse()
              return <div className={`${styles.column}`} key={colIndex}>
              {tempColumnInfo.map((cellInfo,cellIndex)=> <div style={{backgroundColor:`${cellInfo.color}`}} className={`${styles.cell}`} key={cellIndex}></div>
              )}</div>
            }
            )
          }
        </div> 
    );
}

export default NextShape;
