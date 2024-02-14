import { useState, useRef, useEffect } from 'react';
import SlideToggle from "react-slide-toggle";

export function InfoDrop({ header, content, headerSize, contentSize, arrowSize }) {
    const [infoVisible, setInfoVisible] = useState(false);
    const contentRef = useRef(null);
    const [underline, setUnderline] = useState(false);


    return (
        <>
            <SlideToggle
                collapsed
                duration={500}>
                {({ toggle, setCollapsibleElement }) => (

                    <div className={`my-collapsible info-drop-container`}>
                        <div className={`my-collapsible__toggle
                                        sliding-underline ${underline ? "clicked" : ""} ${headerSize}`}
                            onClick={() => { toggle(); setUnderline(!underline); }}>

                            <div className="info-drop-header-container">
                                <i class={`fa fa-chevron-right fa-xs ${arrowSize}`}></i>
                                <div className="info-drop-header">{header}</div>
                            </div>
                        </div>

                        <div className="my-collapsible__content" ref={setCollapsibleElement}>
                            <div className={`my-collapsible__content-inner ${contentSize}`}>
                                {content}
                            </div>
                        </div>
                    </div>
                )}
            </SlideToggle>
        </>
    );
}
