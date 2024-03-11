import { useState } from "react";

import { Button } from "./Button.js"

export function MainMenu() {

    return (
        <div className="pt-125 font-color-white display-flex">

            <div className="main-menu-grid vw-70 vh-70 ml-50">
                <div className="">
                    <div className="large-font m-10">About</div>
                    <div className="cursor-pointer">
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                    </div>
                </div>

                <div>
                    <div className="large-font m-10">About</div>
                    <div className="cursor-pointer">
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                    </div>
                </div>

                <div>
                    <div className="large-font m-10">About</div>
                    <div className="cursor-pointer">
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                    </div>
                </div>

                <div>
                    <div className="large-font m-10">About</div>
                    <div className="cursor-pointer">
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                    </div>
                </div>

                <div>
                    <div className="large-font m-10">About</div>
                    <div className="cursor-pointer">
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                    </div>
                </div>

                <div>
                    <div className="large-font m-10">About</div>
                    <div className="cursor-pointer">
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                        <div className="xsmall-font m-10 underline-hover">Mission and Vision</div>
                    </div>
                </div>
            </div>

            <div className="vw-20">
                <div className="mb-20"><Button text={'Hello'} buttonType={'button-main-menu'}/></div>
                <div className="mb-20"><Button text={'Hello'} buttonType={'button-main-menu'}/></div>
                <div className="mb-20"><Button text={'Hello'} buttonType={'button-main-menu'}/></div>
                <div className="mb-20"><Button text={'Hello'} buttonType={'button-main-menu'}/></div>
            </div>

        </div>
    )
}
