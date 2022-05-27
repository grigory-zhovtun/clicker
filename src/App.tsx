import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/counter";
import {IncrementButton} from "./components/increment-button/increment-button";
import {ResetButton} from "./components/reset-button/reset-button";
import {SetButton} from "./components/set-button/set-button";
import {Input} from "./components/input/input";

function App() {
    const [count, setCount] = useState(0)
    let [min, setMin] = useState(0)
    let [max, setMax] = useState(5)
    let [action, setAction] = useState(false)

    const increment = () => {
        setCount(count+1)
    }

    const reset = () => {
        setCount(min)
    }

    const setButtonHandler = () => {
        setCount(min)
        localStorage.setItem('min', JSON.stringify(min))
        localStorage.setItem('max', JSON.stringify(max))
        setAction(false)
    }

    const disableSet = min < 0 || min >= max
    const disableReset = (count === min) || disableSet
    const disableInc = (count === max) || disableSet
    const disableCounter = !(count === max)

    useEffect( () => {
        const temp = localStorage.getItem('min')
        if (temp) {
            const num = JSON.parse(temp)
            setMin(+num)
            setCount(+num)
        }
    }, [])

    useEffect( () => {
        const temp = localStorage.getItem('max')
        if (temp) {
            const num = JSON.parse(temp)
            setMax(+num)
        }
    }, [])

    const getMin = (minNum: number) => {
        setMin(minNum)
        setAction(true)
    }

    const getMax = (maxNum: number) => {
        setMax(maxNum)
        setAction(true)
    }

    return (
        <div className="App">
            <Counter action={action}
                     error={disableSet}
                     disable={disableCounter}
                     count={count}/>

            <div className={"ButtonsWrapper"}>
                <div className={"InputsWrapper"}>
                    <div className={"MinInput"}>
                        <div className={"Labels"}>min</div>
                        <div>
                            <Input  currentValue={min}
                                    error={disableSet}
                                    getCount={getMin}/>
                        </div>
                    </div>
                    <div className={"MaxInput"}>
                        <div className={"Labels"}>max</div>
                        <div>
                            <Input  currentValue={max}
                                    error={disableSet}
                                    getCount={getMax}/>
                        </div>
                    </div>
                </div>
                <div>
                    <SetButton disable={disableSet} callback={setButtonHandler}/>
                </div>
                <div className={"IncrDecrButtons"}>
                    <div className={"IncrementButton"}>
                        <IncrementButton disable={disableInc} callback={increment}/>
                    </div>
                    <div>
                        <ResetButton disable={disableReset} callback={reset}/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
