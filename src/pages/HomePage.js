import { NavBar } from '../components/NavBar';
import { ContanctUs } from '../components/ContanctUs';

export function HomePage() {
    return (
        <>
            <div className="homepage-navbar"><NavBar /></div>
            <div className="margin-large">Home page</div>
            <ContanctUs />
        </>
    )
}
