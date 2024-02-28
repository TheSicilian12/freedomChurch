export function GenInfo( {header, content, img, symbol, headerSize, contentSize, className}) {



    return(
        <div className={`${className}`}>
            <div className={`genInfo-header ${headerSize}`}>{header}</div>
            <div className={`genInfo-content ${contentSize}`}>{content}</div>
        </div>
    )
}
