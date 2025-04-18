export const DEFAULT_FONT_FAMILY = "Cambay";
export const DEFAULT_FONT_COLOR = "my_dark_purple";

type CustomStyle = {
    bgColour?: string;
    textColour?: string;
    borderColour?: string;
    hoverBgColour?: string;
    hoverTextColour?: string;
    fontFamily?: string;
    bold?: boolean;
    borderThickness?: number;
    placeholderTextColour?: string;
};

const getTailwindCSSColour = (color: string) => {
    return color.startsWith("#") ? `[${color}]`: color;
};

export const getStyleClass = ({
    bgColour,
    textColour,
    borderColour,
    hoverBgColour,
    hoverTextColour,
    fontFamily,
    bold,
    borderThickness,
    placeholderTextColour
}: CustomStyle) => {
    let styleClass = "";
    if (bgColour) { styleClass += ` bg-${getTailwindCSSColour(bgColour)}`}
    if (textColour) { styleClass += ` text-${getTailwindCSSColour(textColour)}`}
    if (borderThickness) { styleClass += ` border-${borderThickness}`}
    if (borderColour) { styleClass += styleClass.includes("border") 
        ? ` border-${getTailwindCSSColour(borderColour)}`
        : ` border border-${getTailwindCSSColour(borderColour)}`
    }
    if (hoverBgColour) { styleClass += ` hover:bg-${getTailwindCSSColour(hoverBgColour)}`}
    if (hoverTextColour) { styleClass += ` hover:text-${getTailwindCSSColour(hoverTextColour)}`}
    if (fontFamily) { styleClass += ` font-family-${getTailwindCSSColour(fontFamily)}`}
    if (bold) { styleClass += ` font-bold`}
    if (placeholderTextColour) { styleClass += ` placeholder:text-${getTailwindCSSColour(placeholderTextColour)}`}
    return styleClass;
};