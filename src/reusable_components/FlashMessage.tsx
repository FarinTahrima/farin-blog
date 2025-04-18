import React, { ReactNode } from "react";
import { CustomStyle, getStyleClass } from "../utils/style-utils.tsx";

interface FlashMessageProps {
    message: string;
    style?: CustomStyle;
}

const FlashMessage = ({
    message,
    style
}: FlashMessageProps) => {
    
    return (
        <div className={`p-4 text-l md:text-xl xl:text-2xl ${style && getStyleClass(style)}`}>
            {message}
        </div>
    );
};

export default FlashMessage;
