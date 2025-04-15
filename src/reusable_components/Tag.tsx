import React, { ReactNode } from "react";

interface TagProps {
    value: string;
    fontFamily?: string;
    textColor?: string;
    bgColor?: string;
    borderColor?: string;
}

const Tag = ({
    value,
    fontFamily,
    textColor,
    bgColor,
    borderColor,
}: TagProps) => {
    
    const getTagClass = () => {
        let tagClass = "border px-2 text-2xl max-sm:text-lg font-bold";
        if (borderColor) { tagClass += ` border-${borderColor}`}
        if (fontFamily) { tagClass += ` font-family-[${fontFamily}]`}
        if (textColor) { tagClass += ` text-${textColor}`}
        if (bgColor) { tagClass += ` bg-${bgColor}`}
        return tagClass;
    }

    return (
        <span className={`${getTagClass()}`}>
            {value}
        </span>
    );
};

export default Tag;
