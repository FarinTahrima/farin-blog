import React from "react";

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
    customBgColourHex
}: CardProps) => {

    const getCardClass = () => {
        let cardClass = "";
        if (predefinedBgColour) { cardClass += ` bg-${predefinedBgColour}` }
        else if (customBgColourHex) { cardClass += ` bg-[#${customBgColourHex}]` }
        else { cardClass += " bg-[#FFFFFF]" }
        return cardClass;
    }

    return (
        <div className={`${getCardClass()}`}>
            {children}
        </div>
    );
};

export default Card;
