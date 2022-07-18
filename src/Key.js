import { useContext } from "react"
import { AppContext } from './App';

function Key(props) {
    const { disabled_letters } = useContext(AppContext);

    var className = "key_box";
    if(props.letter === 'Enter' || props.letter === 'Delete') {
        className += ' large_key_box';
    }
    if(disabled_letters.includes(props.letter)) {
        className += ' disabled';
    }
    const { HandleKey } = useContext(AppContext);

    return (
        <div className={className} onClick={() => HandleKey(props.letter)}>{props.letter}</div>
    )
}

export default Key