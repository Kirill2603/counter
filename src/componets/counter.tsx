import React, {useState} from "react";

const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const countClassName = count >= 5 ? "ResultRed" : "Result"

    return (
        <div className="Counter">
            <div className="ResultBlock">
                <div className={countClassName}>{count}</div>
            </div>
            <div className='ButtonBlock'>
                <button className='Button'
                        disabled={count === 5}
                        onClick={() => setCount(count + 1)}>inc
                </button>
                <button className='Button'
                        disabled={count === 0}
                        onClick={() => setCount(0)}>reset
                </button>
            </div>
        </div>

    )
}

export default Counter