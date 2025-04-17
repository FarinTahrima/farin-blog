import React from "react";
import Card from "../reusable_components/Card.tsx";
import SkillCard from "../project_components/skills/WorkCard.tsx";
import SkillsCardView from "../project_components/skills/SkillsCardView.tsx";
import SkillsTableView from "../project_components/skills/SkillsTableView.tsx";

const Skills = () => {
    const design1Url = "images/card-design-1.png";

    return (
        <div className="p-4 max-sm:p-2">
            {/* <SkillsCardView /> */}
            <SkillsTableView />
        </div>
    );
  };
  
  export default Skills;