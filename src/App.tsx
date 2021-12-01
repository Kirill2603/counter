import React, {ChangeEvent, useState} from 'react';
import './App.css';
import s from './counter/counter.module.css'
import SetterInput from "./counter/setterInput";
import CounterOutput from "./counter/counterOutput";


function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [count, setCount] = useState<number>(startValue)

    const onSetValues = () => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCount(startValue)
    }

    return (
        <div className={s.App}>
            <SetterInput
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                onSetValues={onSetValues}
                startValue={startValue}
                maxValue={maxValue}/>
            <CounterOutput
                maxValue={maxValue}
                count={count}
                setCount={setCount}
                startValue={startValue} />
        </div>
    );
}

export default App;
