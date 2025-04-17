import React from "react";
import { DEFAULT_FONT_COLOR, DEFAULT_FONT_FAMILY } from "../../utils/utils.tsx";
import WorkCard from "./WorkCard.tsx";
import { myWork } from "../../data/Data.tsx";

const SkillsCardView = () => {
    return (
        <div>
            <p className={`font-family-[${DEFAULT_FONT_FAMILY}] text-${DEFAULT_FONT_COLOR} text-3xl font-bold mt-4 p-4`}>
                Work Experience
            </p>
            <div className="grid justify-items-center 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 lg:p-0 max-sm:gap-4 mt-4">
                {myWork.map((work, key) => (
                    <WorkCard
                        key={key}
                        designNumber={key % 2 + 1}
                        work={work}
                    />)
                )}
            </div>
        </div>

    );
  };
  
  export default SkillsCardView;