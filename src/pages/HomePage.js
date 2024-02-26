import { NavBar } from '../components/NavBar';
import { ContanctUs } from '../components/ContanctUs';
import { InfoDrop } from '../components/InfoDrop';
import { GenInfo } from '../components/GenInfo';

import homePageImg from '../images/freedomChurchHomepage.jpeg'

export function HomePage() {
    const infoDropHeader = "Header"
    const infoDropContent = "Content"

    const genInfoHeader = "We Are Glad You're Here"
    const genInfoContent = `We are a grace-based, Bible-based, Spirit-led, contemporary expression of love and hope for this generation. We invite you to come follow Jesus with us! Here at Freedom Church, we have a passion to see sinners set free and God's people transformed. We long to see lives changed, chains broken and God's people flourish in the gifts He has given them.`

    return (
        <>
            <NavBar />
            {/* <img src={homePageImg}
                class="homepage-header-img"/> */}
            <div class="homepage-header"></div>


            <GenInfo header={genInfoHeader}
                    content={genInfoContent}
                    headerSize="large-font font-bold"
                    contentSize="medium-font"/>

            <div className="margin-large">Home page</div>

            <div className="border">
                <ContanctUs />
            </div>

            <InfoDrop header={infoDropHeader}
                headerSize={"medium-font"}
                content={infoDropContent}
                contentSize={"small-font"}
                arrowSize={"fa-xs"}
                />
        </>
    )
}
