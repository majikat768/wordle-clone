import React from 'react';
import Space from './Space'
import { useContext } from 'react';
import { AppContext } from './App';

const Board = function (props) {

    const { board, attempt, word, gameover } = useContext(AppContext);
    const rows = [];

    for (let i = 0; i < 6; i += 1) {
        let row = [];
        let w = word.slice();
        let statuses = ['wrong','wrong','wrong','wrong','wrong'];
        for(let j = 0; j < 5; j += 1) {
            if(w[j] === board[i][j]) {
                statuses[j] = 'correct';
                w = w.replace(board[i][j],'.');
            }
        }
        for(let j = 0; j < 5; j += 1) {
            if(statuses[j] !== 'correct' && w.includes(board[i][j])) {
                statuses[j] = 'almost';
                w = w.replace(board[i][j],'.');
            }
        }

        for (let j = 0; j < 5; j += 1) {
            let status;
            if(i > attempt) {
                if(gameover) {
                    status = 'done';
                }
                else {
                    status = 'none';
                }
            }
            else if(i === attempt) {
                if(gameover) {
                    status = 'done';
                }
                else {
                    status = 'current';
                }
            }
            else if(i < attempt) {
                status = statuses[j];
            }
            row.push(
                <Space
                attempt = {i}
                space = {j}
                status = {status}
                key = {[i, j]}
                />
            )
        }
        rows.push(row)
    }


    return (
        <div className='board'>
            {rows.map((row) => <div className='guess'>{row}</div>)}
        </div>
    )
}

export default Board;
