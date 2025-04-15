import React from "react";
import Card from "../reusable_components/Card.tsx";
import RoundedImage from "../reusable_components/RoundedImage.tsx";
import Tag from "../reusable_components/Tag.tsx";
import { DEFAULT_FONT_FAMILY } from "../utils/utils.tsx";

const SkillCard = () => {
    const design1Url = "images/card-design-1.png";

    return (
        <div className="relative w-full max-w-md">
            {/* BACKGROUND CONTAINER */}
            <div
                className="w-full bg-cover bg-top p-4"
                style={{ backgroundImage: `url(${design1Url})` }}
            >
                {/* LOCATION IMAGE */}
                <div className="bg-white w-full flex justify-center">
                    <img
                        src={"images/location/NYP.jpg"}
                        className="w-1/2 h-auto"
                    />
                </div>

                {/* SKILLS INFORMATION */}
                <div className="mt-4 bg-[#F5F5F5] p-4">
                    {/* SKILLS ACQUIRED */}
                    <div>
                        <p className="font-family-[Cambay] text-my_dark_purple font-bold text-2xl max-sm:text-xl">
                            Skills Acquired
                        </p>
                        <div className="grid grid-cols-5 mt-2">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="grid justify-items-center gap-2 max-sm:gap-0">
                                <RoundedImage
                                    src={"images/skills/C++.png"}
                                    radius={30}
                                    alt={"C++"}
                                />
                                <p className="font-family-[Cambay] text-center text-my_blue font-bold text-xl max-sm:text-m">
                                    C++
                                </p>
                            </div>
                            ))}
                        </div>
                    </div>

                    {/* WORDS ABOUT ME FROM OTHERS */}
                    <div>
                        <p className="font-family-[Cambay] text-my_dark_purple font-bold text-2xl max-sm:text-xl mt-2">
                        Words about me from others
                        </p>
                        <div className="flex mt-2 gap-4">
                        <Tag
                            value={"kind"}
                            font-family={DEFAULT_FONT_FAMILY}
                            textColor={"my_dark_blue"}
                            bgColor={"my_pink"}
                        />
                        <Tag
                            value={"friendly"}
                            font-family={DEFAULT_FONT_FAMILY}
                            textColor={"my_dark_blue"}
                            bgColor={"my_pink"}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  };
  
  export default SkillCard;