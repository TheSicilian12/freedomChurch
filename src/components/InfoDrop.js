import { useState, useRef, useEffect } from 'react';
import SlideToggle from "react-slide-toggle";

export function InfoDrop({header, content, headerSize, contentSize}) {
    const [infoVisible, setInfoVisible] = useState(false);
    const contentRef = useRef(null);
    const [underline, setUnderline] = useState(false);


    return (
        <>
            <SlideToggle
                collapsed
                duration={500}>
                {({ toggle, setCollapsibleElement }) => (

                    <div className={`my-collapsible info-drop-container border`}>
                        <div className={`my-collapsible__toggle sliding-underline ${underline ? "clicked" : ""} ${headerSize}`}
                            onClick={() => { toggle(); setUnderline(!underline); }}>
                            {header}
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
