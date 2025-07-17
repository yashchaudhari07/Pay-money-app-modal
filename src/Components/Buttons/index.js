import "./buttons.scoped.css"

let SecondaryButton = (props) => {
    return (
        <button className="secondary-button" {...props} >{props.value}</button>
    )
}

let PrimaryButton = (props) => {
    return (
        <button className={`${props.disabled ? 'primary_disabled' : ''} primary-button`} {...props }> { props.value }</button >
    )
}
let InactiveButton = (props) => {
    return (
        <button className="inactive-button" {...props} >{props.value}</button>
    )
}

let Buttons = { SecondaryButton, PrimaryButton, InactiveButton }

export default Buttons