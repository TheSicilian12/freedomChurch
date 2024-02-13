import { useState, useRef, useEffect } from 'react';
import SlideToggle from "react-slide-toggle";

export function InfoDrop() {
    const [infoVisible, setInfoVisible] = useState(false);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(infoVisible ? contentRef.current.scrollHeight : 0);
        }
    }, [infoVisible]);

    console.log(contentHeight)

    const infoToggle = () => {
        setInfoVisible(!infoVisible);
    }

    return (
        <>
            <div className="info-header-container border" onClick={infoToggle}>
                <i className='fa fa-angle-down'></i>
                <div>Info Header</div>
            </div>

            <div className={`info-content-container ${infoVisible ? "visible" : "hidden"}`} style={{ maxHeight: contentHeight }}>
                <div ref={contentRef} className={`info-content ${infoVisible ? "visible" : "hidden"}`}>
                    Info Content
                </div>
            </div>
        </>
    );
}
