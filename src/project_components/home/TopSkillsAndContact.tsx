import React from "react";
import CardWithTitle from "../../reusable_components/Card-with-Title.tsx";
import { DEFAULT_FONT_COLOR, DEFAULT_FONT_FAMILY } from "../../utils/style-utils.tsx";


const TopSkillsAndContact = () => {
    return (
        <div className="grid lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-8 px-16 py-4 max-sm:p-4 max-sm:gap-4">
            <CardWithTitle
                    title={{
                        value: "My Top Skills",
                        titleStyle: {
                            fontFamily: DEFAULT_FONT_FAMILY,
                            textColour: DEFAULT_FONT_COLOR,
                            bold: true,
                        },
                        suffixLink: {
                            value: "See more skills",
                            link: "/skills",
                            style: {
                                textColour: "my_blue"
                            },
                            mobileStyle: {
                                bgColour: "my_blue"
                            }
                        },
                    }}
                    cardStyle={{
                        bgColour: "my_light_purple"
                    }}
                >
                        Top 3 Skills
            </CardWithTitle>
                
            <CardWithTitle
                title={{
                    value: "Words That Define Me",
                    titleStyle: {
                        fontFamily: DEFAULT_FONT_FAMILY,
                        textColour: DEFAULT_FONT_COLOR,
                        bold: true,
                    },
                }}
                cardStyle={{
                    bgColour: "#F5F5F5"
                }}
            >
                Word Cloud
            </CardWithTitle>

            <CardWithTitle
                title={{
                    value: "Contact Details",
                    titleStyle: {
                        fontFamily: DEFAULT_FONT_FAMILY,
                        textColour: DEFAULT_FONT_COLOR,
                        bold: true,
                    },
                }}
                cardStyle={{
                    bgColour: "my_pink"
                }}
            >
                Contact Details
            </CardWithTitle>
        </div>
    );
  };
  
export default TopSkillsAndContact;