import './set-button.css'

type PropsType = {
    callback: () => void
    disable: boolean
}

export const SetButton = ({callback, disable}:PropsType) => {
    return (
        <button disabled={disable}
                onClick={callback}
                className={(disable)? "SetButton "+'DisableButton':"SetButton"}>
            set
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.75 4H27.1375C26.575 1.7 24.325 0 21.625 0C18.925 0 16.675 1.7 16.1125 4H0.25V6H16.1125C16.675 8.3 18.925 10 21.625 10C24.325 10 26.575 8.3 27.1375 6H31.75V4ZM21.625 8C19.7125 8 18.25 6.7 18.25 5C18.25 3.3 19.7125 2 21.625 2C23.5375 2 25 3.3 25 5C25 6.7 23.5375 8 21.625 8ZM0.25 20H4.8625C5.425 22.3 7.675 24 10.375 24C13.075 24 15.325 22.3 15.8875 20H31.75V18H15.8875C15.325 15.7 13.075 14 10.375 14C7.675 14 5.425 15.7 4.8625 18H0.25V20ZM10.375 16C12.2875 16 13.75 17.3 13.75 19C13.75 20.7 12.2875 22 10.375 22C8.4625 22 7 20.7 7 19C7 17.3 8.4625 16 10.375 16Z" fill="white"/>
            </svg>
        </button>
    )
}