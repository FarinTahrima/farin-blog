import React, { useMemo } from "react";
import { mySkills, myWork, Skill } from "../../data/Data.tsx";

type SkillsTableData = {
    startIndex: number;
    type: string;
    data: Skill[];
}
const SkillsTableView = () => {
    
    // HELPERS
    const getData = (): SkillsTableData[] => {
        let startIndex = 1; // row no. where the first data of the new type will appear
        let data: SkillsTableData[] = [];
        for(let priority=5; priority>=1; priority--) {
            const filterBasedOnPriority = mySkills
                .filter(s => s.priority == priority)
                .sort((s1,s2) => s2.ratings - s1.ratings || s2.months - s1.months);
            data.push({
                type: getType(priority),
                data: filterBasedOnPriority,
                startIndex: startIndex
            });
            startIndex += filterBasedOnPriority.length;
        }
        return data;
    };
    
    const getType = (priority): string => {
        switch(priority) {
            case 5: return "Specialized";
            case 4: return "Experienced";
            case 3: return "Foundation";
            case 2: return "Good to Have";
            default: return "Extra Skills";
        }
    };

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

    // Using useMemo to memoize the filtered and sorted table
    const data = useMemo(() => getData(), [mySkills]);

    return (
        <div className="p-4 max-sm:p-0 xl:p-8">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg xl:text-3xl lg:text-2xl text-xl max-sm:text-[12px]">
                {/* TABLE HEADER */}
                <thead className="bg-my_dark_blue text-white">
                    <tr>
                    <th className="p-2 text-left font-medium">No.</th>
                    <th className="p-2 text-left font-medium">Skill</th>
                    <th className="p-2 text-left font-medium">Profiency</th>
                    <th className="p-2 text-left font-medium">Duration</th>
                    <th className="p-2 text-left font-medium max-sm:hidden">Type</th>
                    </tr>
                </thead>
              <tbody>
                
                {data.map((type, tKey) => {
                    var count = 0;
                    return (
                        <>
                            {/* TO DISPLAY TYPES IN A SEPERATE ROW FOR EACH GROUP FOR MOBILE ONLY */}
                            <tr key={tKey}>
                                <td></td>
                                <td colSpan={4} className="flex hidden text-my_dark_blue font-bold max-sm:block">{type.type}</td>
                            </tr>

                            {/* DATA FOR TABLE - LAST COL FOR TYPES IS HIDDEN WHEN MOBILE */}
                            {type.data.map((skill, sKey) => {
                                count = count++;
                                return ((
                                    <tr key={sKey} className={`border-t hover:bg-my_blue hover:text-white ${(type.startIndex + sKey) % 2 == 0 ? "bg-my_pink" : "bg-my_light_purple"} text-my_dark_blue`}>
                                        <td className="p-2">{type.startIndex + sKey}</td>
                                        <td className="p-2">{skill.name}</td>
                                        <td className="p-2">{getProficiency(skill.ratings)}</td>
                                        <td className="p-2">{getDuration(skill.months)}</td>
                                        <td className="p-2 max-sm:hidden">{getType(skill.priority)}</td>
                                    </tr>
                            ))}
                            )}
                        </>
                    )
                    
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
  };
  
  export default SkillsTableView;