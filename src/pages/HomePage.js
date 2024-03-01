import { useState, useRef, useEffect } from 'react';

import { NavBar } from '../components/NavBar';
import { ContanctUs } from '../components/ContanctUs';
import { InfoDrop } from '../components/InfoDrop';
import { GenInfo } from '../components/GenInfo';
import { Experience } from '../components/Experience';
import { Visit } from '../components/Visit';
import { CoverScreen } from '../components/CoverScreen';

import homePageImg from '../images/congregation.jpeg';

export function HomePage() {
    const [mainDisplay, setMainDisplay] = useState(true);

    return (
        <>
            <NavBar mainDisplay={mainDisplay} setMainDisplay={setMainDisplay}/>
            {!mainDisplay && <CoverScreen />}
            {mainDisplay && <div className="homepage-container display-flex-col">

                <div className="homepage-header"></div>

                <div className="homepage-first display-flex flex-even below-navBar">
                    <div className="homepage-welcome vw-40">
                        <GenInfo header="We Are Glad You're Here"
                            content={`We are a grace-based, Bible-based, Spirit-led, contemporary expression of love and hope for this generation. We invite you to come follow Jesus with us! Here at Freedom Church, we have a passion to see sinners set free and God's people transformed. We long to see lives changed, chains broken and God's people flourish in the gifts He has given them.`}
                            headerSize="xlarge-font font-bold"
                            contentSize="small-font"
                        />
                    </div>

                    <img src={homePageImg}
                        className="vw-35" />
                </div>

                <div className="homepage-second bg-color-main">
                    <Experience />
                </div>

                <div className="border">
                    <Visit />
                </div>
            </div>}
        </>
    )
}
