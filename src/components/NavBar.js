import { useState } from 'react';

import churchLogo from '../images/ChurchLogo.svg'
import hamburgerMenu from '../images/icons/hamburger-menu.svg'

export function NavBar() {
    const [display, setDisplay] = useState('display-none')

    const locationHover = () => {
        display === 'display-none' ? setDisplay('display') : setDisplay('display-none');
    }


    return (
        <>
            <div class="navbar-container">
                <div class="navbar-left">
                    <div class="homepage-navbar-left">
                        <img src={churchLogo} class="navbar-logo"/>
                    </div>
                </div>

                <div class="navbar-right border">

                    <div class="navbar-location-container medium-font border" onMouseOver={locationHover} onMouseLeave={locationHover}>Choose Your Location</div>
                    <div class={`${display} navbar-locations-container`}>
                        <div class="navbar-location-options medium-font">Lima, Ohio</div>
                        <div class="navbar-location-options">Ottawa, Ohio</div>
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
