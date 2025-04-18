import React, { ReactNode } from "react";
import { CustomStyle, getStyleClass } from "../utils/style-utils.tsx";

interface TagProps {
    value: string;
    style?: CustomStyle
}

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
