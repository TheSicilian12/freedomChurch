import { ContanctUs } from './ContanctUs';
import { InfoDrop } from '../components/InfoDrop';

export function Visit() {

    return (
        <div className="display-flex-col flex-vcenter m-50">
            <div className="display-flex-col flex-vcenter">
                <div className="xlarge-font font-bold m-30">Coming to Visit?</div>
                <div className="medium-font">We know visiting a church for the first time can be intimidating,</div>
                <div className="medium-font">and we want to make your visit at Freedom Church a great one!</div>
                <div className="medium-font m-30">If you would like to get in touch with someone, please fill out the contact form below.</div>
            </div>

            <div className="display-flex">
                <div className="display-flex-col  vw-35 experience-genInfo">
                    <InfoDrop header="WHAT SHOULD I WEAR?"
                        headerSize={"medium-font"}
                        content="We want church to be a place you feel comfortable so you won't find a dress code here. You'll see most people wearing jeans and t-shirts, but pollos and button ups are common too."
                        contentSize={"small-font"}
                        arrowSize={"fa-xs"}
                    />

                    <InfoDrop header="WHAT IS A TYPICAL SERVICE LIKE?"
                        headerSize={"medium-font"}
                        content="Typically around 10:30 AM, our service begins with some worship. After that we have prayer and announcements. We then have a small break where kids 12 and under are released to children's church. Everyone grabs donuts and coffee before coming back for the sermon. You'll see the teens all like to sit together in our front two rows! After the sermon, we close with prayer and then all get more donuts and coffee before heading home."
                        contentSize={"small-font"}
                        arrowSize={"fa-xs"}
                    />

                    <InfoDrop header="WHAT DO YOU HAVE FOR MY KIDS?"
                        headerSize={"medium-font"}
                        content="For kids ages 5 - 12, we have a childrens church! For kids younger than that, you'll find a nursery with plenty of toys, a tv, and speakers to listen to the main sermon."
                        contentSize={"small-font"}
                        arrowSize={"fa-xs"}
                    />

                    <InfoDrop header="WHERE DO I GO WHEN I ARRIVE?"
                        headerSize={"medium-font"}
                        content="The elevator leads up to the main lobby where we keep our donuts and coffee."
                        contentSize={"small-font"}
                        arrowSize={"fa-xs"}
                    />

                    <InfoDrop header="DO I NEED TO BE A MEMBER?"
                        headerSize={"medium-font"}
                        content="No, all are welcome to come and have fun. The only requirement is that you eat as many donuts as you want!"
                        contentSize={"small-font"}
                        arrowSize={"fa-xs"}
                    />
                </div>

                <div className="">
                    <ContanctUs />
                </div>
            </div>
        </div>
    )
}
