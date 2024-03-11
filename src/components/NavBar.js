import { useState } from 'react';

import churchLogo from '../images/ChurchLogo.svg'

export function NavBar({ mainDisplay, setMainDisplay }) {
    const [display, setDisplay] = useState('display-none')
    const [location, setLocation] = useState('Choose Your Location')
    const [mainBackground, setMainBackground] = useState(true);

    const locationHover = () => {
        display === 'display-none' ? setDisplay('display') : setDisplay('display-none');
    }

    const locationLeaveHover = () => {
        setDisplay('display-none');
    }

    const locationSelector = (e) => {
        setLocation(e.target.textContent)
        locationLeaveHover();
    }

    const coverSelector = (e) => {
        setMainDisplay(!mainDisplay);
        setMainBackground(!mainBackground);
    }

    return (
        <>
            <div className={`navbar-container ${mainBackground ? "bg-navbar-container" : ""}`}>
                <div className="navbar-left">
                    <div className="navbar-logo-container">
                        <img src={churchLogo} className="navbar-logo" />
                    </div>
                </div>

                <div className="navbar-right">
                    {mainDisplay && <div className="navbar-location-container large-font font-color-white"
                        onMouseEnter={locationHover}
                        onMouseLeave={locationLeaveHover}
                    >{location}

                        <div className={`${display} navbar-locations-container`}>
                            <div className="navbar-location-options"
                                onClick={locationSelector}>Church Name - Location 1</div>
                            <div className="navbar-location-options"
                                onClick={locationSelector}>Church Name - Location 2</div>
                        </div>
                    </div>}

                    <div className="navbar-hamburger-container"
                        onClick={() => coverSelector()}>
                        <div className="navbar-hamburger-line"></div>
                        <div className="navbar-hamburger-line"></div>
                        <div className="navbar-hamburger-line"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
