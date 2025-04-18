import React from "react";
import { Skill } from "../../data/Data";

interface SkillsTableDataProps {
    startIndex: number;
    type: string;
    data: Skill[];
};

export type SkillsData = {
    startIndex: number;
    type: string;
    data: Skill[];
};

const SkillsTableData = ({
    startIndex,
    type,
    data
}: SkillsTableDataProps) => {
    var count = 0;

    const getProficiency = (rating): string => {
        if (rating >= 7) { return "Expert" }
        else if (rating >= 5) { return "Proficient" }
        else if (rating >= 3) { return "Advanced" }
        else if (rating >= 2) { return "Basic" }
        return "";
    };

    const getDuration = (months): string => {
        if (months < 12) { return  months !== 1 ? months + " months" : months + " month" }
        else { return months !== 12 ? months/12 + " years" : months/12 + " year" }
    };

    return (
        <>
            {/* TO DISPLAY TYPES IN A SEPERATE ROW FOR EACH GROUP FOR MOBILE ONLY */}
            {data.length > 0 && 
                <tr>
                    <td></td>
                    <td colSpan={4} className="flex hidden text-my_dark_blue font-bold max-sm:block">{type}</td>
                </tr>
            }

            {/* DATA FOR TABLE - LAST COL FOR TYPES IS HIDDEN WHEN MOBILE */}
            {data.map((skill, sKey) => {
                count = count++;
                return ((
                    <tr key={sKey} className={`border-t hover:bg-my_blue hover:text-white ${(startIndex + sKey) % 2 === 0 ? "bg-my_pink" : "bg-my_light_purple"} text-my_dark_blue`}>
                        <td className="p-2">{startIndex + sKey}</td>
                        <td className="p-2">{skill.name}</td>
                        <td className="p-2">{getProficiency(skill.ratings)}</td>
                        <td className="p-2">{getDuration(skill.months)}</td>
                        <td className="p-2 max-sm:hidden">{type}</td>
                    </tr>
                    ))}
                )
            }
         </>
    );
};

export default SkillsTableData;
