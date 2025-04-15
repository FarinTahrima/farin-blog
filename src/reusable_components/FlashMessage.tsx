import React, { ReactNode } from "react";

interface FlashMessageProps {
    message: string;
    messageFontFamily?: string;
    messageColor?: string;
    messageBgColor?: string;
    messageBorderColor?: string;
}

const FlashMessage = ({
    message,
    messageFontFamily,
    messageColor,
    messageBgColor,
    messageBorderColor,
}: FlashMessageProps) => {
    
    const getFlashMessageClass = () => {
        let flashMessageClass = "border p-4 text-l md:text-xl xl:text-2xl";
        if (messageBorderColor) { flashMessageClass += ` border-${messageBorderColor}`}
        if (messageFontFamily) { flashMessageClass += ` font-family-[${messageFontFamily}]`}
        if (messageColor) { flashMessageClass += ` text-${messageColor}`}
        if (messageBgColor) { flashMessageClass += ` bg-${messageBgColor}`}
        return flashMessageClass;
    }

    return (
        <div className={`${getFlashMessageClass()}`}>
            {message}
        </div>
    );
};

export default FlashMessage;
