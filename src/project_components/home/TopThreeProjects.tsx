import React from "react";
import CardWithTitle from "../../reusable_components/Card-with-Title.tsx";
import { DEFAULT_FONT_COLOR, DEFAULT_FONT_FAMILY } from "../../utils/utils.tsx";
import { myProjects } from "../../data/Data.tsx";
import Card from "../../reusable_components/Card.tsx";
import FlashMessage from "../../reusable_components/FlashMessage.tsx";

const TopThreeProjects = () => {
    return (
        <div className="px-16 py-8 max-sm:p-4">
            <CardWithTitle
                    title={{
                        value: "My Top Projects",
                        fontFamily: DEFAULT_FONT_FAMILY,
                        predefinedColour: DEFAULT_FONT_COLOR,
                        bold: true,
                        suffixLink: {
                            value: "See more projects",
                            link: "/projects",
                            predefinedColour: "my_blue"
                        }
                    }}
                    card={{
                       predefinedBgColour: "white"
                    }}
                >
                        <div>
                            <FlashMessage
                                message={"Click on a card to try some of the simulated features in a project"}
                                font-family={DEFAULT_FONT_FAMILY}
                                messageColor={"gray-700"}
                                messageBorderColor={"gray-700"}
                                messageBgColor={"gray-100"}
                            />
                            <div className="grid lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-8 lg:p-0 max-sm:gap-4 mt-4">
                                {myProjects.filter(p => p.top3).map((item, key) => (
                                    <Card predefinedBgColour={key % 2 == 1 ? "my_pink": "my_light_purple"}>
                                        <div className="p-4">
                                            <p>{item.title}</p>
                                            <p>{item.location}</p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                       
                </CardWithTitle>
        </div>
    );
  };
  
export default TopThreeProjects;