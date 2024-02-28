import { useState, useRef, useEffect } from 'react';
import SlideToggle from "react-slide-toggle";

export function InfoDrop({ header, content, headerSize, contentSize, arrowSize }) {
    const [infoVisible, setInfoVisible] = useState(false);
    const contentRef = useRef(null);
    const [underline, setUnderline] = useState(false);


    return (
        <div className="border v100">
            <SlideToggle
                collapsed
                duration={500}>
                {({ toggle, setCollapsibleElement }) => (

                    <div className={`info-drop-container`}>
                        <div className={`sliding-underline ${underline ? "clicked" : ""} ${headerSize}`}
                            onClick={() => { toggle(); setUnderline(!underline); }}>

                            <div className="info-drop-header-container">
                                <i className={`fa fa-chevron-right fa-xs ${arrowSize} ${underline ? "info-drop-arrow-down" : "info-drop-arrow-normal"}`}></i>
                                <div className="info-drop-header">{header}</div>
                            </div>
                        </div>

                        <div className="border v100" ref={setCollapsibleElement}>
                            <div className={`v100 ${contentSize}`}>
                                {content}
                            </div>
                        </div>
                    </div>
                )}
            </SlideToggle>
        </div>
    );
}
