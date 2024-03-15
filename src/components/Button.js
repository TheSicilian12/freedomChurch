export function Button({text, buttonType}) {
// ButtonTypes
    // 'button-main-menu'
    
    return (
        <div className="">
            <button className={`${buttonType}`}>{text}</button>
        </div>
    )
}
