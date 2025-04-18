import React from "react";
import { getStyleClass } from "../utils/style-utils.tsx";

interface FlashMessageProps {
    message: string;
    style: FlashMessageStyle;
};


// STYLE TYPES
type FlashMessageStyle = {
    fontFamily: string;
    textColour: string;
    borderColour: string;
    bgColour: string;
    borderThickness: number;
};

const FlashMessage = ({
    message,
    style
}: FlashMessageProps) => {
    
    return (
        <div className={`p-4 text-l md:text-xl xl:text-2xl ${getStyleClass(style)}`}>
            {message}
        </div>
    );
};

export default FlashMessage;
