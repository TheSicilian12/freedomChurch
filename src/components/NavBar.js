import churchLogo from '../images/ChurchLogo.svg'
import hamburgerMenu from '../images/icons/hamburger-menu.svg'

export function NavBar() {
    return (
        <>
            <div class="navbar-container border">
                <div class="navbar-left">
                    <div class="homepage-navbar-left">
                        <img src={churchLogo} class="navbar-logo"/>
                    </div>
                </div>

                <div class="navbar-right border">
                    <div class="navbar-location-container border large-font">Freedom Church - Lima
                        <div class="navbar-location-options"></div>
                    </div>
                    <div><i class="fa fa-bars"></i></div>
                </div>
            </div>
        </>
    )
}
