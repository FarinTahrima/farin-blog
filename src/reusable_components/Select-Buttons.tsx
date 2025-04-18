import React from "react";
import { getStyleClass } from "../utils/style-utils.tsx";

interface SelectButtonProps {
    options: string[];
    selectedOption: string;
    defaultStyle: DefaultButtonStyle;
    selectStyle: SelectedButtonStyle;
};

// STYLE TYPES
type DefaultButtonStyle = {
    bgColour: string;
    textColour: string;
    fontFamily: string;
    hoverBgColour: string;
    hoverTextColour: string;
    borderColour: string;
    borderThickness: number;
};

type SelectedButtonStyle = {
    bgColour: string;
    textColour: string;
};

const SelectButtons = ({
    options,
    selectedOption,
    defaultStyle,
    selectStyle
}: SelectButtonProps) => {

    return (
        <div className="inline-flex">
            {options.map((option, key) =>{
                const styleClass = option === selectedOption
                    ? getStyleClass(selectStyle)
                    : getStyleClass(defaultStyle);
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
