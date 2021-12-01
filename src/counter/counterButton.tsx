import React from "react";
import s from './counter.module.css'

type CounterButtonPropsType = {
    name: string
    buttonCallback?: () => void
    disabled?: boolean
}

const CounterButton: React.FC<CounterButtonPropsType> = (props) => {
  return (
      <div className={s.CounterButton}>
          <button
              disabled={props.disabled}
              onClick={props.buttonCallback}>
              {props.name}
          </button>
      </div>
  )
}

export default CounterButton