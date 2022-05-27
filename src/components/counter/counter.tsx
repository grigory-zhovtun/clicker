import './counter.css'

type PropsType = {
    count: number
    disable: boolean
    error: boolean
    action: boolean
}

export const Counter = ({count, disable, error, action}:PropsType) => {

    let classNames = '';

    classNames = (disable) ? 'Counter': 'Counter ' + 'CounterDisable'
    if (error) {
        classNames = 'Counter' + ' ErrorMessage'
    } else
    if (action) {
        classNames = 'Counter' + ' InviteMessage'
    }
    return (
        <div className={classNames}>
            {(error) ? 'Incorrect value!':
                (action) ? 'enter values and press "set"' :count}
        </div>
    )
}
