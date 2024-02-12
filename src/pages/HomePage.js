import { NavBar } from '../components/NavBar';
import { ContanctUs } from '../components/ContanctUs';

export function HomePage() {
    return (
        <>
            <NavBar />
            <div className="margin-large">Home page</div>

            <div className="border">
                <ContanctUs />
            </div>
        </>
    )
}
