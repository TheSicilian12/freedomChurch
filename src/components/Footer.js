export function Footer() {

    return (
        <div className="display-flex-col flex-vcenter bg-color-main font-color-white">
            <div className="m-10">
                <div className="xlarge-font">Freedom Church</div>
                <div className="display-flex-col flex-vcenter">
                    <div className="medium-font">Two locations</div>
                    <div className="medium-font">One body</div>
                </div>
            </div>

            <div className="display-flex flex-even m-10">

                <div className="display-flex-col vw-50 flex-hcenter flex-vcenter border">
                    <div className="medium-font">Location 2</div>
                    <div className="small-font">Address</div>
                    <div className="small-font">Service Start Time</div>
                </div>

                <div className="display-flex-col vw-50 flex-hcenter flex-vcenter border">
                    <div className="medium-font">Ottawa, Ohio</div>
                    <div className="ml-10">
                        <div className="xsmall-font">133 N Court St</div>
                        <div className="xsmall-font">3rd Floor, 307C</div>
                        <div className="xsmall-font">Ottawa, OH 45875</div>
                    </div>

                    <div className="xsmall-font">Service: 10:30 AM</div>
                </div>
            </div>
        </div>
    )
}
