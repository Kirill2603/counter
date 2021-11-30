import React, {useState} from 'react';
import './App.css';
import Counter from "./componets/counter";
import Setter from "./componets/setter";

function App() {

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)

    function setCounterValue () {
        setStartValue(startValue)
        setMaxValue(maxValue)
    }

    return (
        <div className="App">
            <Setter
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                setCounterValue={setCounterValue}
                startValue={startValue}
                maxValue={maxValue}/>

            <Counter
                startValue={startValue}
                maxValue={maxValue}/>
        </div>
    );
}

export default App;
