import React, {useState} from "react";
import CounterButton from "./counterButton";
import s from './counter.module.css'

type CounterOutputPropsType = {
    startValue: number
    count: number
    setCount: (count: number) => void
    maxValue: number
}

const CounterOutput: React.FC<CounterOutputPropsType> = (props) => {

    const incCountHandler = () => {
        props.setCount(props.count + 1)
    }

    const resetCountHandler = () => {
        props.setCount(0)
    }

    return (
        <div className={s.CounterOutput}>
            <span>{props.count}</span>
            <CounterButton
                name='Inc'
                disabled={props.maxValue === props.count}
                buttonCallback={incCountHandler}
            />
            <CounterButton
                name='Reset'
                disabled={props.count === 0}
                buttonCallback={resetCountHandler}
            />
        </div>
    )
}

export default CounterOutput