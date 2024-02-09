import churchLogo from '../images/ChurchLogo.svg'

export function NavBar() {
    return (
        <>
            <div class="navbar-container">
                <div class="navbar-left">
                    <div class="homepage-navbar-left">
                        <img src={churchLogo} />
                    </div>
                </div>

                <div>
                    <div class="navbar-location-container"></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}
