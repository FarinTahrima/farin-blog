import React from "react";
import RoundedImage from "../../reusable_components/RoundedImage.tsx";
import Tag from "../../reusable_components/Tag.tsx";
import { DEFAULT_FONT_COLOR, DEFAULT_FONT_FAMILY } from "../../utils/utils.tsx";
import { Education, mySkills } from "../../data/Data.tsx";

interface EducationCardProps {
    designNumber: number;
    education: Education;
};

const EducationCard = ({
    designNumber,
    education: {
        location: {
            imageUrl,
            bgColor
        },
        course,
        skills,
        achievements
    }
}: EducationCardProps) => {
    const designUrl = `images/card-design-${designNumber}.png`;
    const bgColorClass = bgColor.startsWith("#") ? `bg-[${bgColor}]` : `bg-${bgColor}`;
    const fontColorClass = designNumber === 1 ? `text-${DEFAULT_FONT_COLOR}` : "text-my_blue";
    return (
        <div className="relative w-full">
            {/* BACKGROUND CONTAINER */}
            <div
                className="w-full bg-cover bg-top p-4"
                style={{ backgroundImage: `url(${designUrl})` }}
            >
                {/* LOCATION IMAGE */}
                <div className={`${bgColorClass} w-full flex justify-center`}>
                    <img
                        src={`images/location/${imageUrl}`}
                        className="w-1/2 h-auto"
                    />
                </div>

                {/* WORK INFORMATION */}
                <div className={`font-family-[${DEFAULT_FONT_FAMILY}] ${fontColorClass} mt-4 bg-[#F5F5F5] p-4`}>
                    {/* SKILLS ACQUIRED */}
                    <div>
                        <p className="font-bold text-2xl max-sm:text-xl">
                            {course}
                        </p>
                        
                        <p className="font-bold text-2xl max-sm:text-xl mt-4">
                            Skills Acquired
                        </p>
                        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-3 mt-2 justify-items-center">
                            {skills.map((skill, key) => {
                                const skilInfo = mySkills.find((s => s.name === skill));
                                return (
                                    <div key={key} className="grid justify-items-center mt-2">
                                        <RoundedImage
                                            src={`images/skills/${skilInfo?.imageUrl}`}
                                            radius={30}
                                            alt={skilInfo?.name}
                                        />
                                        <p className="text-my_dark_blue text-center 2xl:text-2xl xl:text-xl max-sm:text-m">
                                            {skilInfo?.name}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* WORDS ABOUT ME FROM OTHERS */}
                    <div>
                        <p className="font-bold text-2xl max-sm:text-xl mt-2">
                            Achivements
                        </p>
                        <div className="flex flex-wrap mt-2 2xl:text-2xl xl:text-xl lg:text-base max-sm:text-base text-my_dark_blue">
                            
                                {achievements.map((achievement, key) => (
                                    <li>{achievement}</li>
                                ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default EducationCard;