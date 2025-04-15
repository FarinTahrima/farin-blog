import React from "react";
import Card from "../reusable_components/Card.tsx";
import RoundedImage from "../reusable_components/RoundedImage.tsx";

const SkillCard = () => {
    const design1Url = "images/card-design-1.png";

    return (
        <div className="relative w-full max-w-md">
            {/* DESIGN OF CARD */}
            <img
                src={design1Url}
                className="w-full h-auto"
            />

            {/* CARD CONTENT */}
            <div className="absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 p-4">
                {/* LOCATION IMAGE */}
                <div className="bg-white w-full flex justify-center">
                    <img
                        src={"images/location/NYP.jpg"}
                    />
                </div>

                {/* SKILLS INFORMATION */}
                <div className="mt-4 bg-[#F5F5F5] p-4">
                   <div>
                        <p className="font-family-[Cambay] text-my_dark_purple font-bold text-2xl">
                            Skills Acquired
                        </p>
                        <div className="grid grid-cols-5 mt-2">
                            <div className="grid justify-items-center gap-2">
                                <RoundedImage
                                    src={"images/skills/C++.png"}
                                    radius={30}
                                    alt={"C++"}
                                />
                               <p className="font-family-[Cambay] text-center text-my_blue font-bold text-xl">C++</p>
                           </div>
                           <div className="grid justify-items-center gap-2">
                                <RoundedImage
                                    src={"images/skills/C++.png"}
                                    radius={30}
                                    alt={"C++"}
                                />
                               <p className="font-family-[Cambay] text-center text-my_blue font-bold text-xl">C++</p>
                           </div>
                        </div>
                   </div>
                   <div>
                        <p className="font-family-[Cambay] text-my_dark_purple font-bold text-2xl mt-2">
                            Words about me from others
                        </p>
                   </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default SkillCard;