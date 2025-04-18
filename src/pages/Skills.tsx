import React from "react";
import { DEFAULT_FONT_COLOR, DEFAULT_FONT_FAMILY } from "../utils/style-utils.tsx";
import SelectButtons from "../reusable_components/Select-Buttons.tsx";
import SkillsCardView from "../project_components/skills/SkillsCardView.tsx";
import SkillsTableView from "../project_components/skills/SkillsTableView.tsx";

const Skills = () => {
    return (
        <div className="p-4 max-sm:p-2">
          
            <div className="flex justify-between">
                <p className={`font-family-[${DEFAULT_FONT_FAMILY}] text-${DEFAULT_FONT_COLOR} text-3xl max-sm:text-2xl font-bold mb-2`}>
                    My Skills
                </p>
                <SelectButtons 
                    options={["Card", "Table"]}
                    selectedOption="Card"
                    defaultStyle={{
                        fontFamily: "Cambay",
                        bgColour: "white",
                        textColour: "my_dark_blue",
                        hoverBgColour: "my_blue",
                        hoverTextColour: "white",
                        borderColour: "my_pink",
                        borderThickness: 4
                    }}
                    selectStyle={{
                        bgColour: "my_dark_blue",
                        textColour: "white",   
                    }}
                />
               
               
            </div>
            <SkillsCardView />
        </div>
    );
  };

  export default Skills;