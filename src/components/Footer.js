export function Footer() {

    return (
        <div className="display-flex-col flex-vcenter">
            <div className="border">
                <div className="xlarge-font">Freedom Church</div>
                <div className="medium-font">Two locations</div>
                <div className="medium-font">One body</div>
            </div>

            <div className="display-flex">
                <div>
                    <div className="medium-font">Location 1</div>
                    <div className="small-font">Address</div>
                    <div className="small-font">Service Start Time</div>
                </div>

                <div>
                    <div className="medium-font">Location 2</div>
                    <div>Address</div>
                    <div className="small-font">Service Start Time</div>
                </div>
            </div>
        </div>
    )
}
