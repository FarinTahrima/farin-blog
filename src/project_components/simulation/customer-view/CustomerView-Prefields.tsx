import React, { useEffect } from "react";
import InputWithLabel from "../../../reusable_components/Input-with-Label.tsx";
import { getStyleClass } from "../../../utils/style-utils.tsx";
import TextWithLabel from "../../../reusable_components/Text-with-Label.tsx";
import SelectButtons from "../../../reusable_components/Select-Buttons.tsx";
import { CustomerViewContext, custViewInputStyle, custViewLabelStyle } from "./CustomerViewSimulation.tsx";

const CustomerViewPrefields = () => {
    const {
        notionalAmount,
        setNotionalAmount,
        premiumAmount,
        setPremiumAmount,
        direction,
        setDirection
    } = React.useContext(CustomerViewContext);

    // Update premium with random numbers every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (notionalAmount !== 0) {
                setPremiumAmount(getPremiumAmount(notionalAmount));
            }
        }, 5000);
    
        return () => clearInterval(intervalId);
    }, [notionalAmount, setPremiumAmount]);
    
    
    // HELPERS
    const updateNotionalAmount = (value: number) => {
        setNotionalAmount(value);
        // premium range according to notional
        if (value > 0) {
            setPremiumAmount(getPremiumAmount(value));
        } else {
            setPremiumAmount(0);
        }
    };
 
    const getPremiumAmount = (notional: number): number => {
        return (Math.random() * notional)/1000;
    };

    return (
        <div>
            {/* REQUIRED FIELDS FOR CALCULATION */}
            <div className="grid grid-cols-1 xl:grid-cols-2 max-sm:grid-cols-1 gap-4 2xl:px-8 2xl:py-4 px-4 py-2">
                <InputWithLabel 
                    label={"Notional Amount"}
                    inputValue={notionalAmount}
                    onInput={(value: number) => updateNotionalAmount(value)}
                    placeholderValue="E.g 1000"
                    labelStyle={custViewLabelStyle}
                    inputStyle={custViewInputStyle}
                />
                <TextWithLabel 
                    label={"Premium Amount"}
                    value={premiumAmount.toFixed(2)}
                    style={custViewLabelStyle}
                />
            </div>

            {/* DIRECTION */}
            <div className="flex flex-row max-sm:flex-col items-center max-sm:items-start 2xl:px-8 2xl:py-4 px-4 py-2">
                <div className="flex-none">
                    <label className={`${getStyleClass(custViewLabelStyle)} font-bold mb-1 md:mb-0 pr-4`}>
                        Direction
                    </label>
                </div>
                <div className="w-full items-center max-sm:mt-2">
                    <SelectButtons
                        options={["Buy", "Sell"]}
                        selectedOption={direction}
                        defaultStyle={{
                            fontFamily: "Cambay",
                            bgColour: "white",
                            textColour: "blue-500",
                            hoverBgColour: "my_blue",
                            hoverTextColour: "white",
                            borderColour: "my_blue",
                            borderThickness: 4
                        }}
                        selectStyle={{
                            bgColour: "blue-500",
                            textColour: "white",   
                        }}
                        onSelect={(direction) => setDirection(direction)}
                    />   
                </div>
            </div>
        </div>
    );
};

export default CustomerViewPrefields;
