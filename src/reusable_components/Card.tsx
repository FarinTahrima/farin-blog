import React from "react";
import { getStyleClass } from "../utils/style-utils.tsx";

interface CardProps {
    children: React.ReactNode;
    style: CardStyle;
};

// STYLE TYPES
export type CardStyle = {
    bgColour: string;
};

const Card = ({
    children,
    style
}: CardProps) => {

    return (
        <div className={`${getStyleClass(style)}`}>
            {children}
        </div>
    );
};

export default Card;
