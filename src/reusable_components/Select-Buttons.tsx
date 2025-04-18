import React from "react";
import { CustomStyle, getStyleClass } from "../utils/style-utils.tsx";

interface SelectButtonProps {
    options: string[];
    selectedOption: string;
    defaultStyle?: CustomStyle;
    selectStyle?: CustomStyle;
}

const SelectButtons = ({
    options,
    selectedOption,
    defaultStyle,
    selectStyle
}: SelectButtonProps) => {

    return (
        <div className="inline-flex">
            {options.map((option, key) =>{
                const styleClass = option === selectedOption && selectStyle 
                    ? getStyleClass(selectStyle)
                    : defaultStyle
                        ? getStyleClass(defaultStyle)
                        : "";
                return (
                    <button key={key} className={`${styleClass} font-bold py-2 px-4 text-xl`}>
                       {option}
                   </button>
                )
            })}
        </div>
    );
};

export default SelectButtons;
