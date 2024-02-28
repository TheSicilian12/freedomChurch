import { GenInfo } from '../components/GenInfo';


export function Experience() {

    return (
        <div className="experience-container display-flex">
            <div className="experience-mainInfo">
                <GenInfo header="Ways to Expereince Freedom Church"
                    headerSize="xlarge-font font-bold font-color-white"
                    content="There are several ways to get to know us better. Whatever your comfort level, there are opportunities for you to join in community and draw nearer to Jesus."
                    contentSize="xsmall-font font-color-white"/>
            </div>

            <div class="display-flex">
                <div>

                    <GenInfo header="Plan a visit"
                        headerSize="medium-font font-color-white"
                        content="We gather every weekend as a church to be inspired to follow Jesus. We would love for you to be our guest."
                        contentSize="xsmall-font font-color-second"
                        img="fa-solid fa-location-dot"
                        className="experience-genInfo"
                    />
                    <GenInfo header="Plan a visit"
                        headerSize="medium-font font-color-white"
                        content="We gather every weekend as a church to be inspired to follow Jesus. We would love for you to be our guest."
                        contentSize="xsmall-font font-color-second"
                        className="experience-genInfo"
                    />
                </div>
                <div>
                    <GenInfo header="Plan a visit"
                        headerSize="medium-font font-color-white"
                        content="We gather every weekend as a church to be inspired to follow Jesus. We would love for you to be our guest."
                        contentSize="xsmall-font font-color-second"
                        className="experience-genInfo"
                    />
                    <GenInfo header="Plan a visit"
                        headerSize="medium-font font-color-white"
                        content="We gather every weekend as a church to be inspired to follow Jesus. We would love for you to be our guest."
                        contentSize="xsmall-font font-color-second"
                        className="experience-genInfo"
                    />
                </div>
            </div>
        </div>
    )
}
