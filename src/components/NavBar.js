import churchLogo from '../images/ChurchLogo.svg'
import hamburgerMenu from '../images/icons/hamburger-menu.svg'

export function NavBar() {
    return (
        <>
            <div class="navbar-container border">
                <div class="navbar-left">
                    <div class="homepage-navbar-left">
                        <img src={churchLogo} />
                    </div>
                </div>

                <div class="navbar-right border">
                    <div class="navbar-location-container">Location
                        <div class="navbar-location-options"></div>

                    </div>
                    {/* <img src={hamburgerMenu} class="navbar-hamburger border"/> */}
                    <i class="fa fa-bars"></i>
                    Hello
                </div>
            </div>
        </>
    )
}
