export function Button({text, buttonType, className}) {
// ButtonTypes
    // 'button-main-menu'

    return (
        <div className={`${className}`}>
            <button className={`${buttonType}`}>{text}</button>
        </div>
    )
}
