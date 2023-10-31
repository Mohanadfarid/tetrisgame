import React from "react";
import styles from "./boardColumn.module.css";
import Cell from "../cell/Cell";
const BoardColumn = ({ columnInfo }) => {
  return (
    <div className={`${styles.boardColmun}`}>
      {columnInfo.map((cellInfo, rowidx) => (
        <Cell
          key={rowidx}
          cellInfo={cellInfo}
          numberOfCells={20}
        />
      ))}
    </div>
  );
};

export default BoardColumn;
