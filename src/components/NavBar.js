import { useState } from 'react';

import churchLogo from '../images/ChurchLogo.svg'
import hamburgerMenu from '../images/icons/hamburger-menu.svg'

export function NavBar() {
    const [display, setDisplay] = useState('display-none')

    const locationHover = () => {
        display === 'display-none' ? setDisplay('display') : setDisplay('display-none');
    }

    const locationLeaveHover = (event) => {
       setDisplay('display-none');
    }

    return (
        <>
            <div class="navbar-container">
                <div class="navbar-left">
                    <div class="homepage-navbar-left">
                        <img src={churchLogo} class="navbar-logo" />
                    </div>
                </div>

                <div class="navbar-right">

                    <div class="navbar-location-container medium-font border"
                        onMouseEnter={locationHover}
                        onMouseLeave={locationLeaveHover}
                        >
                            Choose Your Location

                        <div class={`${display} navbar-locations-container border`}>
                            <div class="navbar-location-options">Location 1</div>
                            <div class="navbar-location-options">Location 2</div>
                        </div>
                    </div>

                    <div class="navbar-hamburger-container">
                        <div class="navbar-hamburger-line"></div>
                        <div class="navbar-hamburger-line"></div>
                        <div class="navbar-hamburger-line"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
