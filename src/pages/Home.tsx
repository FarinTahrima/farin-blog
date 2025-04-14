import React from "react";
import Navbar from "../project_components/Navbar.tsx";
import Summary from "../project_components/Summary.tsx";
import Card from "../reusable_components/Card.tsx";
import CardWithTitle from "../reusable_components/Card-with-Title.tsx";

const Home = () => {
    const DEFAULT_FONT_FAMILY = "Cambay";
    const DEFAULT_FONT_COLOR = "my_dark_purple";

    return (
        <div>
            <Navbar />
            <Summary />
            <div className="grid grid-cols-3 gap-8 p-16">
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
            </div>
        </div>
    );
  };
  
  export default Home;