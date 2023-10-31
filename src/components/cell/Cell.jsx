import React from 'react';
import styles from './cell.module.css'
const Cell = ({cellInfo,numberOfCells}) => {

    return (
        <div style={{border:`1px solid ${cellInfo.isactive?cellInfo.color:`grey`}`,height:`${100/numberOfCells}%`}} className={`${styles.cell} ${styles[cellInfo.color]} `}>
        </div>
    );
}

export default Cell;
