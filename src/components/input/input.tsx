import './input.css'
import {ChangeEvent, WheelEvent} from "react";

type PropsType = {
    getCount: (num: number) => void
    error: boolean
    currentValue: number
}

export const Input = ({getCount, error, currentValue}:PropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        getCount(+e.currentTarget.value)
    }

    const onWheelHandler = (e: WheelEvent) => {
        if (e.deltaY < 0) {
            currentValue ++
        } else {
            currentValue --
        }
    }

    return (
        <div>
            <input  value={+currentValue}
                    onChange={onChangeHandler}
                    onWheel={onWheelHandler}
                    className={error ? "Input" + " ErrorInput": "Input"} type={"number"}/>
        </div>
    )
}