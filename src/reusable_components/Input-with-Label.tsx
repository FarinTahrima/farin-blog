import React from "react";
import { getStyleClass } from "../utils/style-utils.tsx";

interface InputWithLabelProps {
    label: string;
    inputValue: string|number;
    labelStyle: LabelStyle;
    inputStyle: InputStyle;
    placeholderValue?: string;
    onInput(value: string|number): void;
};

// STYLE TYPES
export type LabelStyle = {
    fontFamily: string;
    textColour: string;
};

export type InputStyle = {
    fontFamily: string;
    textColour: string;
    bgColour: string;
    placeholderTextColour?: string;
    borderColour: string;
    borderThickness?: number;
    focusBorderColour?: string;
};

const InputWithLabel = ({
    label,
    inputValue,
    placeholderValue,
    inputStyle,
    labelStyle,
    onInput
}: InputWithLabelProps) => {
    return (
        <div className="flex flex-row max-sm:flex-col items-center max-sm:items-start mb-4 md:mb-2">
            <div className="2xl:flex-none lg:wd-full max-sm:wd-full">
                <label className={`${getStyleClass(labelStyle)} font-bold mb-1 md:mb-0 pr-4 text-lg md:text-base max-sm:text-base`}>
                    {label}
                </label>
            </div>
            <div className="w-full 2xl:text-lg items-center max-sm:mt-2 text-base max-sm:text-base">
                <input 
                    className={`${getStyleClass(inputStyle)} rounded w-full py-2 px-4 leading-tight focus:outline-none text-lg md:text-base max-sm:text-base`} 
                    value={inputValue}
                    onInput={(e) => onInput(e.currentTarget.value)}
                    placeholder={placeholderValue}
                />
            </div>
        </div>
    );
};

export default InputWithLabel;
