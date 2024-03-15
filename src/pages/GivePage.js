import React from 'react';

import { NavBar } from '../components/NavBar';
import { GenInfo } from '../components/GenInfo';
import { Button } from '../components/Button';

import titheImg from '../images/tithe.jpeg';

export function GivePage() {
    return (
        <>
        <NavBar />
            {/* <div>
                <div>3 Simple and Safe Ways to Give</div>
                <div>
                    <div>Give on Sunday</div>
                    <div>Place your offering in our tithe box.</div>
                </div>
                <div>
                    <div>Give Online</div>
                    <div>Our giving platform is safe and secure.</div>
                </div>
                <div>
                    <div>Give by Mail</div>
                    <div>Please send your offering to any of our locations.</div>
                </div>
            </div> */}

            <div className="border bg-color-black font-color-white">

                <div className="display-flex flex-hcenter m-10per">
                    <div className="vw-50">
                        <GenInfo header="Give to Freedom Church"
                            content={`Thank you for your generosity and support. We use what God has given us to share the good news of Jesus Christ and to disciple believers.`}
                            headerSize="xlarge-font font-bold"
                            contentSize="small-font"
                        />
                        <Button text="GIVE ONLINE" buttonType="button-give" />
                    </div>

                    <img src={titheImg}
                        className="vw-35 h-auto" />
                </div>
            </div>
        </>
    )
}
