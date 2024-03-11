export function Button({text, buttonType}) {

    return (
        <div className="">
            <button className={`${buttonType}`}>{text}</button>
        </div>
    )
}
