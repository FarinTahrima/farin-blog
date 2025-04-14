import React, { ReactNode } from "react";

interface CardProps {
    children?: React.ReactNode;
    predefinedBgColour?: string;
    customBgColourHex?: string;
}

export type CardComponent = {
    predefinedBgColour?: string;
    customBgColourHex?: string;
}

const Card = ({
    children,
    predefinedBgColour,
    customBgColourHex,
}: CardProps) => {
    const bgColorClass = predefinedBgColour 
        ? `bg-${predefinedBgColour}`
        : customBgColourHex 
            ? `bg-[#${customBgColourHex}]`
            : "bg-[#FFFFFF]";
    return (
        <div className={`${bgColorClass} p-4`}>
            {children}
        </div>
    );
};

export default Card;
