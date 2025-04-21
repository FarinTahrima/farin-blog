import React from "react";
import { getStyleClass } from "../utils/style-utils.tsx";
import { LabelStyle } from "./Input-with-Label.tsx";

interface InputWithLabelProps {
    label: string;
    value: string|number;
    style: LabelStyle;
};

const TextWithLabel = ({
    label,
    value,
    style
}: InputWithLabelProps) => {
    return (
        <div className="flex flex-row max-sm:flex-col items-center max-sm:items-start mb-4 md:mb-2">
            <div className="2xl:flex-none lg:wd-full max-sm:wd-full">
                <label className={`${getStyleClass(style)} font-bold mb-1 md:mb-0 pr-4 text-lg md:text-base max-sm:text-base`}>
                    {label}
                </label>
            </div>
            <div className="w-full 2xl:text-lg items-center max-sm:mt-2 text-base max-sm:text-base">
                <p>{value}</p>
            </div>
        </div>
    );
};

export default TextWithLabel;
