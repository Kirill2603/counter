import React, {useState} from 'react';
import './App.css';

function App() {

    const [count, setCount] = useState<number>(0)

    let result
    if (count === 5) {
        result = <div className='ResultRed'>{count}</div>
    } else {
        result = <div className='Result'>{count}</div>
    }

    return (
        <div className="App">
            <div className="ResultBlock">
                <div>{result}</div>
            </div>
            <div className='ButtonBlock'>
                <button className='ButtonInc'
                        disabled={count === 5}
                        onClick={() => setCount(count + 1)}>inc
                </button>
                <button className='ButtonReset'
                        disabled={count === 0}
                        onClick={() => setCount(0)}>reset
                </button>
            </div>
        </div>
    );
}

export default App;
