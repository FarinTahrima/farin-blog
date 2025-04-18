import React from "react";
import { CustomStyle, getStyleClass } from "../utils/style-utils.tsx";

interface CardProps {
    children?: React.ReactNode;
    style?: CustomStyle
}

const Card = ({
    children,
    style
}: CardProps) => {

    return (
        <div className={`${style && getStyleClass(style)}`}>
            {children}
        </div>
    );
};

export default Card;
