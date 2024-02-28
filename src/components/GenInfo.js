export function GenInfo( {header, content, img, symbol, headerSize, contentSize, className}) {



    return(
        <div className={`${className}`}>
            {/* <i class={`${img}`}></i> */}
            <i class="fa-solid fa-location-dot"></i>
            {/* <i className={`fa fa-chevron-right fa-xs`} ></i> */}
            <div className={`genInfo-header ${headerSize}`}>{header}</div>
            <div className={`genInfo-content ${contentSize}`}>{content}</div>
        </div>
    )
}
