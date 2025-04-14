import React, { ReactNode } from "react";
import Card, { CardComponent } from "./Card.tsx";
import { Link } from "react-router-dom";

type Title = {
    value: string;
    fontFamily?: string;
    predefinedColour?: string;
    customColourHex?: string;
    bold?: boolean;
    suffixLink?: SuffixLink;
}

type SuffixLink = {
    value: string;
    link: string;
    predefinedColour?: string;
    customColourHex?: string;
}
interface CardWithTitleProps {
    title: Title,
    card: CardComponent,
    children: React.ReactNode
}

const CardWithTitle = ({
    title: {
        value: titleValue,
        fontFamily,
        predefinedColour,
        customColourHex,
        bold,
        suffixLink
    },
    card: {
        predefinedBgColour,
        customBgColourHex
    },
    children
}: CardWithTitleProps) => {

    const getTitleClass = () => {
        let titleClass = "";
        if (fontFamily) { titleClass += ` font-family-${fontFamily}`}
        if (predefinedColour) { titleClass += ` text-${predefinedColour}`}
        if (!predefinedColour && customColourHex) { titleClass += ` text-[#${customColourHex}]`}
        if (bold) { titleClass += ` font-bold`}
        return titleClass;
    }

    const getSuffixClass = () => {
        if (!suffixLink) {
            return "";
        }
        
        let suffixClass = `font-family-${fontFamily}`;
        if (suffixLink.predefinedColour) { suffixClass += ` text-${suffixLink.predefinedColour}`}
        if (!suffixLink.predefinedColour && suffixLink.customColourHex) { suffixClass += ` text-[#${customColourHex}]`}
        return suffixClass;
    }

    return (
        <div>
            <div className="flex flex-wrap justify-between items-center">
                <p className={`text-2xl mb-8 ${getTitleClass()}`}>
                    {titleValue}
                </p>
                {suffixLink && 
                    <Link to={suffixLink.link}>
                        <p className={`text-xl mb-8 ${getSuffixClass()}`}>
                            {suffixLink.value}
                        </p>
                    </Link>
                }
            </div>
            
            <Card 
                predefinedBgColour={predefinedBgColour}
                customBgColourHex={customBgColourHex}
            >
                {children}
            </Card>
        </div>
    );
};

export default CardWithTitle;
