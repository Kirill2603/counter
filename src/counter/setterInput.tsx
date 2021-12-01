import React, {ChangeEvent} from "react";
import CounterButton from "./counterButton";
import s from './counter.module.css'

type SetterInputPropsType = {
    maxValue: number
    startValue: number
    onSetValues: () => void
    setStartValue: (newValue: number) => void
    setMaxValue: (newValue: number) => void
}


const SetterInput: React.FC<SetterInputPropsType> = (props) => {

    const setMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        props.setMaxValue(+value)
    }

    const setStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        props.setStartValue(+value)
    }

    const setValuesHandler = () => {
        props.onSetValues()
    }

    return (
        <div className={s.SetterInput}>
            <p>max value:</p>
            <input
                onChange={setMaxHandler}
                value={props.maxValue}
                type="number" />
            <p>start value:</p>
            <input
                onChange={setStartHandler}
                type="number"
                value={props.startValue}
                />
            <CounterButton
                buttonCallback={setValuesHandler}
                name='Set' />
        </div>
    )
}

export default SetterInput