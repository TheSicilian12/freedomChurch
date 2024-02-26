export function GenInfo( {header, content, img, symbol, headerSize, contentSize}) {



    return(
        <>
            <div className={`genInfo-header ${headerSize}`}>{header}</div>
            <div className={`genInfo-content ${contentSize}`}>{content}</div>
        </>
    )
}
