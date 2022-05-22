import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/counter";
import {IncrementButton} from "./components/increment-button/increment-button";
import {ResetButton} from "./components/reset-button/reset-button";

function App() {
    const [count, setCount] = useState(0)
    const max = 5;
    const min = 0;


    const increment = () => {
        setCount(count+1)
    }

    const reset = () => {
        setCount(0)
    }

    const disableReset = (count === min)
    const disableInc = (count === max)
    const disableCounter = !(count === max)

    return (
        <div className="App">
            <Counter disable={disableCounter} count={count}/>
            <div className={"ButtonsWrapper"}>
                <IncrementButton disable={disableInc} callback={increment}/>
                <ResetButton disable={disableReset} callback={reset}/>
            </div>
        </div>
    );
}

export default App;
