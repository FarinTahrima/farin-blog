import React from "react";
import CardWithTitle from "../reusable_components/Card-with-Title.tsx";
import { DEFAULT_FONT_COLOR, DEFAULT_FONT_FAMILY } from "../utils/utils.tsx";


const TopSkillsAndContact = () => {
    return (
        <div className="grid lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-8 px-16 py-4 max-sm:p-4 max-sm:gap-4">
            <CardWithTitle
                    title={{
                        value: "My Top Skills",
                        fontFamily: DEFAULT_FONT_FAMILY,
                        predefinedColour: DEFAULT_FONT_COLOR,
                        bold: true,
                        suffixLink: {
                            value: "See more skills",
                            link: "/skills",
                            predefinedColour: "my_blue"
                        }
                    }}
                    card={{
                        predefinedBgColour: "my_light_purple"
                    }}
                >
                        Top 3 Skills
            </CardWithTitle>
                
            <CardWithTitle
                title={{
                    value: "Words That Define Me",
                    fontFamily: DEFAULT_FONT_FAMILY,
                    predefinedColour: DEFAULT_FONT_COLOR,
                    bold: true,
                }}
                card={{
                    customBgColourHex: "F5F5F5"
                }}
            >
                Word Cloud
            </CardWithTitle>

            <CardWithTitle
                title={{
                    value: "Contact Details",
                    fontFamily: DEFAULT_FONT_FAMILY,
                    predefinedColour: DEFAULT_FONT_COLOR,
                    bold: true,
                }}
                card={{
                    predefinedBgColour: "my_pink"
                }}
            >
                Contact Details
            </CardWithTitle>
        </div>
    );
  };
  
export default TopSkillsAndContact;