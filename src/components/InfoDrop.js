import { useState, useRef, useEffect } from 'react';
import SlideToggle from "react-slide-toggle";

export function InfoDrop() {
    const [infoVisible, setInfoVisible] = useState(false);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);


    return (
        <>
            <SlideToggle
                collapsed
                duration={500}>
                {({ toggle, setCollapsibleElement }) => (
                    <div className="my-collapsible">
                        <button className="my-collapsible__toggle" onClick={toggle}>
                            toggle
                        </button>
                        <div className="my-collapsible__content" ref={setCollapsibleElement}>
                            <div className="my-collapsible__content-inner">Collapsible content</div>
                        </div>
                    </div>
                )}
            </SlideToggle>
        </>
    );
}
