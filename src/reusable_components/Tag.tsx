import React from "react";
import { getStyleClass } from "../utils/style-utils.tsx";

interface TagProps {
    value: string;
    style: TagStyle;
};

// STYLE TYPES
type TagStyle = {
    fontFamily: string;
    textColour: string;
    bgColour: string;
};

const Tag = ({
    value,
    style
}: TagProps) => {

    return (
        <span className={`border px-2 font-bold rounded-lg ${style && getStyleClass(style)}`}>
            {value}
        </span>
    );
};

export default Tag;
