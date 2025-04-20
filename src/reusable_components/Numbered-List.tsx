import React from "react";
import { getStyleClass } from "../utils/style-utils.tsx";

interface NumberedListProps {
    list: string[];
    style: NumberedListStyle;
};

// STYLE TYPES
export type NumberedListStyle = {
    fontFamily: string;
    textColour: string;
};

const NumberedList = ({
   list,
   style
}: NumberedListProps) => {
    let count = 0;
    return (
        <div>
            {list.map((item, key) => {
                count = count + 1;
                return (
                    <div key={key} className="flex justify-items-start gap-4 2xl:gap-8 m-4">
                        <div className="w-[70px] h-full rounded-lg overflow-hidden text-center relative">
                            <div
                                className={`w-10 h-10 2xl:w-16 2xl:h-16 rounded-full 
                                    inline-flex items-center justify-center 
                                    bg-white text-xl 2xl:text-2xl font-bold ${getStyleClass(style)}`}>
                                {count}
                            </div>
                        </div>
                        <div className="bg-white w-full px-4 py-2 2xl:py-4">
                            <span className={`text-align-left font-bold text-xl 2xl:text-2xl ${getStyleClass(style)}`}>
                                {item}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default NumberedList;
