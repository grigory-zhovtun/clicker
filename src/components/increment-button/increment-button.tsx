import './../../App.css'

type PropsType = {
    callback: ()=>void
    disable: boolean
}

export const IncrementButton = (props:PropsType) => {
    return (
        <button disabled={props.disable}
                onClick={props.callback}
                className={(props.disable)? "Button "+'DisableButton':"Button" }>
                inc
        </button>
    )
}