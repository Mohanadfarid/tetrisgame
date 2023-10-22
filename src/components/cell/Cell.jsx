import React from 'react';
import styles from './cell.module.css'
const Cell = ({cellInfo}) => {

    return (
        <div style={{border:`1px solid ${cellInfo.isactive?cellInfo.color:`grey`}`}} className={`${styles.cell} ${styles[cellInfo.color]} `}>
        </div>
    );
}

export default Cell;
