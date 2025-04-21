import React, { useState } from "react";
import { InputStyle, LabelStyle } from "../../../reusable_components/Input-with-Label.tsx";
import { DEFAULT_FONT_FAMILY } from "../../../utils/style-utils.tsx";
import CustomerViewPrefields from "./CustomerView-Prefields.tsx";
import CustomerViewCalculator from "./CustomerView-Calculator.tsx";

// PREDEFINED STYLES
export type CustomerViewPreFieldsType = {
    notionalAmount: number;
    setNotionalAmount(value: number): void;
    premiumAmount: number;
    setPremiumAmount(value: number): void;
    direction: "Buy" | "Sell";
    setDirection(value: "Buy"|"Sell"): void;
};

export const custViewLabelStyle: LabelStyle = {
    fontFamily: DEFAULT_FONT_FAMILY,
    textColour: "gray-700"
};

export const custViewInputStyle: InputStyle = {
    fontFamily: DEFAULT_FONT_FAMILY,
    textColour: "gray-700",
    bgColour: "my_gray",
    placeholderTextColour: "gray-500",
    borderColour: "gray-100",
    borderThickness: 4,
    focusBorderColour: "blue-300"
};

// CONTEXT FOR PRE FIELDS
export const CustomerViewContext = React.createContext({
    notionalAmount: 0,
    setNotionalAmount: (value) => {},
    premiumAmount: 0,
    setPremiumAmount: (value) => {},
    direction: "Buy",
    setDirection: (value) => {}
});

export type CustomerViewCalculation = {
    marginAmount: number;
    marginPercent: number;
    premiumAmount: number;
    premiumPercent: number;
}

const CustomerViewSimulation = () => {
    const [notionalAmount, setNotionalAmount] = useState<number>(0);
    const [premiumAmount, setPremiumAmount] = useState<number>(0);
    const [direction, setDirection] = useState<string>("Buy");

    const customerViewPrefields = {
        notionalAmount,
        setNotionalAmount,
        premiumAmount,
        setPremiumAmount,
        direction,
        setDirection
    };

    return (
        <CustomerViewContext.Provider value={customerViewPrefields}>
            <div className="border-4 p-4">
                <CustomerViewPrefields />
                <CustomerViewCalculator />
            </div>
        </CustomerViewContext.Provider>
    );
};

export default CustomerViewSimulation;
