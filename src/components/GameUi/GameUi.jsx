import styles from "./gameUi.module.css";
import React, { useState } from 'react';
import Board from '../Board/Board';
import NextShape from '../NextShap/NextShape';
import { createShapObject } from '../../utils/helpers/generalHelpers';
import { randomShapeGenerator } from '../../features/currentShape/shapes';
import { useSelector } from 'react-redux';
import Controles from '../Controles/Controles';


const GameUi = () => {
    const [nextShape, setnextShape] = useState(createShapObject(randomShapeGenerator()));
    const [paused, setpaused] = useState(true);
    const boardInfo = useSelector((state) => state.board);

    return (
        <div className={styles.ui}>
            <h1 className={styles.title}>TETRIS GAME!</h1>
            <div className={styles.board}><Board paused={paused} setpaused={setpaused} nextShape={nextShape} setnextShape={setnextShape}/></div>
            <div className={styles.nextshape}><NextShape  nextShape={nextShape}/></div>
            <div className={styles.gameInfo}>
            <div ><span className={styles.name}>score</span>  <div className={styles.value}>{boardInfo.score}</div></div> 
            <div ><span className={styles.name}>speed</span>  <div className={styles.value}>{boardInfo.speedLevel/1000}s</div></div>
            </div>
            <button className={styles.pause} onClick={() => setpaused(!paused)}>{paused ? `resume` : `pause`}</button>
            <div className={styles.controles}><Controles/></div>
            </div>
    );
}

export default GameUi;
