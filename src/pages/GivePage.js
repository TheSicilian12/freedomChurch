import React from 'react';

import { GenInfo } from '../components/GenInfo';
import { Button } from '../components/Button';

import titheImg from '../images/tithe.jpeg';

export function GivePage() {
    return (
        <>
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

            <div>
                <div>
                    <GenInfo header="Give to Freedom Church"
                        content={`Thank you for your generosity and support. We use what God has given us to share the good news of Jesus Christ and to disciple believers.`}
                        headerSize="xlarge-font font-bold"
                        contentSize="small-font"
                    />
                    <Button text="GIVE ONLINE" buttonType="button-give"/>
                </div>
                <img src={titheImg} />
            </div>
        </>
    )
}
