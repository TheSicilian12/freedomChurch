import { NavBar } from '../components/NavBar';
import { ContanctUs } from '../components/ContanctUs';
import { InfoDrop } from '../components/InfoDrop';
import { GenInfo } from '../components/GenInfo';
import { Experience } from '../components/Experience';
import { Visit } from '../components/Visit';

import homePageImg from '../images/congregation.jpeg';

export function HomePage() {
    const infoDropHeader = "Header"
    const infoDropContent = "Content"

    const genInfoHeader = "We Are Glad You're Here"
    const genInfoContent = `We are a grace-based, Bible-based, Spirit-led, contemporary expression of love and hope for this generation. We invite you to come follow Jesus with us! Here at Freedom Church, we have a passion to see sinners set free and God's people transformed. We long to see lives changed, chains broken and God's people flourish in the gifts He has given them.`

    return (
        <div class="homepage-container display-flex-col">
            <div className="homepage-header"></div>
            <NavBar />

            <div className="homepage-first display-flex flex-even below-navBar">
                <div className="homepage-welcome vw-40">
                    <GenInfo header={genInfoHeader}
                        content={genInfoContent}
                        headerSize="xlarge-font font-bold"
                        contentSize="medium-font"
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

            <InfoDrop header={infoDropHeader}
                headerSize={"medium-font"}
                content={infoDropContent}
                contentSize={"small-font"}
                arrowSize={"fa-xs"}
            />
        </div>
    )
}
