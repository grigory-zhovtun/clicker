import './../../App.css'

type PropsType = {
    callback:()=>void
    disable: boolean
}

export const ResetButton = (props:PropsType) => {
    return (
        <button disabled={props.disable}
                onClick={props.callback}
                className={(props.disable)? "Button "+'DisableButton':"Button"}>
                reset
        </button>
    )
}