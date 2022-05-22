import './counter.css'

type PropsType = {
    count: number
    disable: boolean
}

export const Counter = ({count, disable}:PropsType) => {
    return (
        <div className={(disable)? 'Counter': 'Counter ' + 'CounterDisable'}>
            {count}
        </div>
    )
}
