import React from 'react';
import styles from "./nextShape.module.css";
const NextShape = ({nextShape}) => {
    return (
        <div className={`${styles.nextShapContainer}`}>
          {
            nextShape.shape.shape[nextShape.shapeFormIndex].map((columnInfo)=>{
              let tempColumnInfo =JSON.parse(JSON.stringify(columnInfo)).reverse()
              return <div className={`${styles.column}`}>
              {tempColumnInfo.map((cellInfo)=> <div style={{backgroundColor:`${cellInfo.color}`}} className={`${styles.cell}`}></div>
              )}</div>
            }
            )
          }
        </div> 
    );
}

export default NextShape;
