import { useState } from 'react';

export function InfoDrop() {
    const [infoVisible, setInfoVisible] = useState(false);

    const infoToggle = () => {
        setInfoVisible(!infoVisible);
    }

    return (
        <>
            <div className="border"
                onClick={infoToggle}>
                <i className="fa fa-angle-down"></i>
                <div>Info Header</div>
            </div>

            <div className={`info-content ${infoVisible ? "visible" : "hidden"}`}>Info Content</div>
        </>
    )
}
