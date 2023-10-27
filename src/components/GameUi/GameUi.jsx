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
        <div>
            <div>score:  {boardInfo.score}</div> 
            <div>speed:  {boardInfo.speedLevel/1000}s</div>
            <Controles paused={paused} setpaused={setpaused} />
            <Board paused={paused} setpaused={setpaused} nextShape={nextShape} setnextShape={setnextShape}/>
            <NextShape  nextShape={nextShape}/>
        </div>
    );
}

export default GameUi;
