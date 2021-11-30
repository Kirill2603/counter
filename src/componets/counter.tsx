import React, {useState} from "react";

type CounterPropsType = {
    maxValue: number
    startValue: number
}


const Counter: React.FC<CounterPropsType> = ({startValue, maxValue}) => {

    const countClassName = startValue >= 5 ? "ResultRed" : "Result"

    const [counterValue, setCounterValue] = useState(startValue)

    return (
        <div className="Counter">
            <div className="ResultBlock">
                <div className={countClassName}>{counterValue}</div>
            </div>
            <div className='ButtonBlock'>
                <button className='Button'
                        disabled={counterValue === maxValue}
                        onClick={() => setCounterValue(counterValue+1)}>inc
                </button>
                <button className='Button'
                        disabled={counterValue == 0}
                        onClick={() => setCounterValue(startValue)}>reset
                </button>
            </div>
        </div>

    )
}

export default Counter