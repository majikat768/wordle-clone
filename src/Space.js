import './app.css'
import { AppContext } from './App';
import { useContext } from 'react';

const Space = function (props) {
    const attempt = props.attempt;
    const space = props.space;
    const status  = props.status;

    const { board } = useContext(AppContext);
    const letter = board[attempt][space]
    let classes = `letter_container ${status} `

    return (
        <div className = {classes}>
            <div className = 'letter'>
                {letter}
            </div>
        </div>
    );
}

export default Space;