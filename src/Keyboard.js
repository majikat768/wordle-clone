import Key from './Key'

function Keyboard(props) {
    const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
            <Key letter={key} key={key} />
    ));
    const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
            <Key letter={key} key={key} />
    ));
    const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
            <Key letter={key} key={key} />
    ));
    const row4 = ['Enter','Delete'].map((key) => (
        <Key letter={key} key={key} />
    ));


    return (
        <div className='keyboard_box'>
            <div className='row' key='row1'>
                {row1}
            </div>
            <div className='row' key='row2'>
                {row2}
            </div>
            <div className='row' key='row3'>
                {row3}
            </div>
            <div className='row' key='row4'>
                {row4}
            </div>
        </div>
    )
}

export default Keyboard;