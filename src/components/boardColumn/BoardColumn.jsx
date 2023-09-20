import React from 'react';
import styles from './boardColumn.module.css'
import Cell from '../cell/Cell';
const BoardColumn = ({columnInfo}) => {
    return (
        <div className={`${styles.boardColmun}`}>
            {
                columnInfo.map((cellInfo,idx)=>
                    <Cell key={idx} cellInfo={cellInfo}/>)
            }
        </div>
    );
}

export default BoardColumn;
