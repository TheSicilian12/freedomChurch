import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "./Button.js"

export function MainMenu() {
    const navigate = useNavigate();

    const redirectGive = () => {
        navigate('/give')
    }

    return (
        <div className="pt-125 font-color-white display-flex flex-between">

            <div className="main-menu-grid vw-50 vh-70 ml-75">
                <div className="">
                    <div className="large-font m-10">About</div>
                    <div className="cursor-pointer">
                        <div className="xsmall-font m-10 underline-hover">Mission & Vision</div>
                        <div className="xsmall-font m-10 underline-hover">Leadership</div>
                        <div className="xsmall-font m-10 underline-hover">Location</div>
                    </div>
                </div>

                <div>
                    <div className="large-font m-10">Watch</div>
                    <div className="cursor-pointer">
                        <div className="xsmall-font m-10 underline-hover">Past Sermons</div>
                        <div className="xsmall-font m-10 underline-hover">Watch Live</div>
                    </div>
                </div>

                <div>
                    <div className="large-font m-10">Get Involved</div>
                    <div className="cursor-pointer">
                        <div className="xsmall-font m-10 underline-hover">Worship Team</div>
                        <div className="xsmall-font m-10 underline-hover">Tech Team</div>
                        <div className="xsmall-font m-10 underline-hover">Children's Ministry</div>
                    </div>
                </div>

                <div>
                    <div className="large-font m-10">Connect</div>
                    <div className="cursor-pointer">
                        <div className="xsmall-font m-10 underline-hover">Kids</div>
                        <div className="xsmall-font m-10 underline-hover">Young Adults</div>
                        <div className="xsmall-font m-10 underline-hover">Adult Bible Studies</div>
                    </div>
                </div>

                <div>
                    <div className="large-font m-10">Ministries</div>
                    <div className="cursor-pointer">
                        <div className="xsmall-font m-10 underline-hover">Appalachia</div>
                        <div className="xsmall-font m-10 underline-hover">Belize</div>
                    </div>
                </div>

                <div>
                    <div className="large-font m-10">Resources</div>
                    <div className="cursor-pointer">
                        <div className="xsmall-font m-10 underline-hover">Calendar</div>
                        <div className="xsmall-font m-10 underline-hover">Announcements</div>
                        <div className="xsmall-font m-10 underline-hover">Prayer</div>
                    </div>
                </div>
            </div>

            <div className="vw-20 mr-75">
                <div className="mb-20"><Button text={'CONTACT US'} buttonType={'button-main-menu'} /></div>
                <div className="mb-20"><Button text={'GET PRAYER'} buttonType={'button-main-menu'} /></div>
                <div className="mb-20"><Button text={'GIVE ONLINE'}
                    buttonType={'button-main-menu'}
                    onClick={redirectGive}/></div>
                <div className="mb-20"><Button text={'OUR LOCATION'} buttonType={'button-main-menu'} /></div>
            </div>

        </div>
    )
}
