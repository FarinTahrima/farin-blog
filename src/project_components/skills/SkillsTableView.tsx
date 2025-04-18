import React, { useCallback, useMemo, useState } from "react";
import { mySkills } from "../../data/Data.tsx";
import SearchBar from "../../reusable_components/SearchBar.tsx";
import SkillsTableData, { SkillsData } from "./SkillsTableData.tsx";


const SkillsTableView = () => {
    const [ searchTerm, setSearchTerm ] = useState<string>("");

    // HELPERS
    const getData = useCallback((): SkillsData[] => {
        let startIndex = 1; // row no. where the first data of the new type will appear
        let data: SkillsData[] = [];
        for(let priority=5; priority>=1; priority--) {
            const filterBasedOnPriority = mySkills
                .filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .filter(s => s.priority === priority)
                .sort((s1,s2) => s2.ratings - s1.ratings || s2.months - s1.months);
            data.push({
                type: getType(priority),
                data: filterBasedOnPriority,
                startIndex: startIndex
            });
            startIndex += filterBasedOnPriority.length;
        }
        return data;
    }, [searchTerm]);
    
    const getType = (priority): string => {
        switch(priority) {
            case 5: return "Specialized";
            case 4: return "Experienced";
            case 3: return "Foundation";
            case 2: return "Good to Have";
            default: return "Extra Skills";
        }
    };

    const data = useMemo(() => {
        return getData();
    }, [getData]);

    return (
        <div className="p-4 max-sm:p-0 xl:p-8">
            <SearchBar
                searchIconColourHex="#6B4E71"
                style={{
                    borderColour: "my_dark_purple",
                    textColour: "my_dark_blue",
                    placeholderTextColour: "my_light_purple"
                }}
                onSearch={(text) => setSearchTerm(text)}
            />
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
                    {data.map((type, tKey) =>
                        <SkillsTableData 
                            key={tKey}
                            type={type.type}
                            data={type.data}
                            startIndex={type.startIndex}
                        />
                    )}
                </tbody>
                </table>
            </div>
            </div>
      );
  };
  
  export default SkillsTableView;