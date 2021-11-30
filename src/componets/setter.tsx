import React from "react";


type SetterPropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setCounterValue: () => void
}

const Setter: React.FC<SetterPropsType> = (
    {
        maxValue,
        startValue,
        setCounterValue
    }) => {
    return (
        <div className="Setter">
            <div className="SetterInputs">
                <div className="InputElement">
                    <span>max value:</span>
                    <div>
                        <input type={"number"} value={maxValue}/>
                    </div>
                </div>

                <div className="InputElement">
                    <span>start value:</span>
                    <div>
                        <input type={"number"}value={startValue}/>
                    </div>
                </div>
            </div>
            <div className="ButtonBlock">
                <button
                    onClick={() => setCounterValue()}
                    className="Button">Set</button>
            </div>
        </div>
    )
}

export default Setter