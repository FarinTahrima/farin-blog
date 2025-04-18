import React from "react";
import Card, { CardStyle } from "./Card.tsx";
import { Link } from "react-router-dom";
import { getStyleClass } from "../utils/style-utils.tsx";

interface CardWithTitleProps {
    title: Title,
    children: React.ReactNode,
    cardStyle: CardStyle,
};

// TYPES
type Title = {
    value: string;
    titleStyle: TitleStyle;
    suffixLink?: SuffixLink;
};

type SuffixLink = {
    value: string;
    link: string;
    style: SuffixLinkStyle;
    mobileStyle: SuffixLinkMobileStyle;
};

// STYLE TYPES
type TitleStyle = {
    fontFamily: string;
    textColour: string;
    bold: boolean;
};

type SuffixLinkStyle = {
    textColour: string;
};

type SuffixLinkMobileStyle = {
    bgColour: string;
};

const CardWithTitle = ({
    title: {
        value,
        titleStyle,
        suffixLink
    },
    children,
    cardStyle
}: CardWithTitleProps) => {
    return (
        <div>
            <div className="flex flex-wrap justify-between items-center">
                <p className={`text-2xl mb-8 ${getStyleClass(titleStyle)}`}>
                    {value}
                </p>
                {/* SUFFIX LINK FOR NON-MOBILE */}
                {suffixLink && 
                    <Link to={suffixLink.link}>
                        <p className={`text-xl mb-8 ${suffixLink.style && getStyleClass(suffixLink.style)} max-sm:hidden`}>
                            {suffixLink.value}
                        </p>
                    </Link>
                }
            </div>
            
            <Card style={cardStyle}>
                {children}
            </Card>
            
            {/* SUFFIX LINK FOR MOBILE - will be placed below for responsiveness */}
            {suffixLink && 
                <div className="max-sm:flex sm:hidden justify-center pt-4">
                   <Link to={suffixLink.link}>
                        <button className={`${suffixLink.mobileStyle && getStyleClass(suffixLink.mobileStyle)} text-white font-bold py-2 px-4 rounded-full`}>
                            {suffixLink.value}
                        </button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default CardWithTitle;
