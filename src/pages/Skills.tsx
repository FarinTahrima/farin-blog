import React from "react";
import Card from "../reusable_components/Card.tsx";
import SkillCard from "../project_components/SkillCard.tsx";

const Skills = () => {
    const design1Url = "images/card-design-1.png";

    return (
        <div className="p-4">
            <div className="grid justify-items-center lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 lg:p-0 max-sm:gap-4 mt-4">
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
            </div>
        </div>
    );
  };
  
  export default Skills;