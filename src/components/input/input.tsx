import './input.css'
import {ChangeEvent} from "react";

type PropsType = {
    getCount: (num: number) => void
    error: boolean
    currentValue: number
}

export const Input = ({getCount, error, currentValue}:PropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        getCount(+e.currentTarget.value)
    }

    return (
        <div>
            <input  value={+currentValue}
                    onChange={onChangeHandler}
                    className={error ? "Input" + " ErrorInput": "Input"} type={"number"}/>
        </div>
    )
}