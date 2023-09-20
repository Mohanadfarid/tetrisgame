import React from 'react';
import styles from './cell.module.css'
const Cell = ({cellInfo}) => {
    return (
        <div className={`${styles.cell} ${styles[cellInfo.color]}`}>
        </div>
    );
}

export default Cell;
