import { useState, useRef, useEffect } from 'react';
import SlideToggle from "react-slide-toggle";

export function InfoDrop() {
    const [infoVisible, setInfoVisible] = useState(false);
    const contentRef = useRef(null);
    const [underline, setUnderline] = useState(false);


    return (
        <>
            <SlideToggle
                collapsed
                duration={500}>
                {({ toggle, setCollapsibleElement }) => (
                    <div className={`my-collapsible `}>

                        <div className={`my-collapsible__toggle sliding-underline ${underline ? "clicked" : ""}`}
                            onClick={() => { toggle(); setUnderline(!underline); }}>
                            toggle
                        </div>

                        <div className="my-collapsible__content" ref={setCollapsibleElement}>
                            <div className="my-collapsible__content-inner">Collapsible content</div>
                        </div>
                    </div>
                )}
            </SlideToggle>
        </>
    );
}
