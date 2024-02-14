import { NavBar } from '../components/NavBar';
import { ContanctUs } from '../components/ContanctUs';
import { InfoDrop } from '../components/InfoDrop';

export function HomePage() {
    const infoDropHeader = "Header"
    const infoDropContent = "Content"

    return (
        <>
            <NavBar />
            <div className="margin-large">Home page</div>

            {/* <div className="border">
                <ContanctUs />
            </div> */}

            <InfoDrop header={infoDropHeader} content={infoDropContent}/>
        </>
    )
}
