export function GenInfo( {header, content, img, symbol, headerSize, contentSize}) {



    return(
        <>
            <div>General Info</div>

            <div class={`genInfo-header ${headerSize}`}>{header}</div>
            <div class={`genInfo-content ${contentSize}`}>{content}</div>

        </>
    )
}
