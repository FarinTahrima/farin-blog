import React, { useCallback, useEffect, useState } from "react";
import InputWithLabel from "../../../reusable_components/Input-with-Label.tsx";
import TextWithLabel from "../../../reusable_components/Text-with-Label.tsx";
import { CustomerViewContext, custViewInputStyle, custViewLabelStyle } from "./CustomerViewSimulation.tsx";


const CustomerViewCalculator = () => {
    const {
            notionalAmount,
            premiumAmount,
            direction,
        } = React.useContext(CustomerViewContext);

    const [marginAmount, setMarginAmount] = useState<number>(0);
    const [marginPercent, setMarginPercent] = useState<number>(0);
    const [customerViewAmount, setCustomerViewAmount] = useState<number>(0);
    const [customerViewPercent, setCustomerViewPercent] = useState<number>(0);

    // Update customer view amount and premium on update
    const updateCustomerView = useCallback(({
        marginAmount,
        marginPercent,
        premiumAmount,
        direction
    }) => {
        const premiumPercent = getPercent(notionalAmount, premiumAmount);
        if (marginAmount === "" || marginPercent === "" || marginAmount === 0 || marginPercent === 0) {
            setCustomerViewAmount(0);
            setCustomerViewPercent(0);
        } else {
            switch (direction) {
                case "Buy":
                    setCustomerViewAmount(premiumAmount - parseFloat(marginAmount));
                    setCustomerViewPercent(premiumPercent - parseFloat(marginPercent));
                    break;
                case "Sell":
                    setCustomerViewAmount(premiumAmount + parseFloat(marginAmount));
                    setCustomerViewPercent(premiumPercent + parseFloat(marginPercent));
                    break;
                default:
                    setCustomerViewAmount(premiumAmount - parseFloat(marginAmount));
                    setCustomerViewPercent(premiumPercent - parseFloat(marginPercent));
                    break;
            }  
        }
    }, [notionalAmount, setCustomerViewAmount, setCustomerViewPercent]);

    useEffect(() => {
        updateCustomerView({
            marginAmount,
            marginPercent,
            premiumAmount,
            direction
        });
    }, [marginAmount, marginPercent, notionalAmount, premiumAmount, direction, updateCustomerView]);
    
    // HELPERS
    const updateMarginAmount = (value: number) => {
        setMarginAmount(value);
        setMarginPercent(getPercent(notionalAmount, value));
    };

    const updateMarginPercent = (value: number) => {
        setMarginPercent(value);
        setMarginAmount(getAmount(notionalAmount, value));
    };

    const getAmount = (notional: number, percent: number): number => {
        return parseFloat((notional * (percent/100)).toFixed(2));
    };

    const getPercent = (notional: number, amount: number): number => {
        if(notional <= 0) return 0;
        return parseFloat(((amount/notional) * 100).toFixed(4));
    };

   
    return (
        <div>
            <p className="p-4 bg-blue-100 font-bold max-sm:text-base my-2">
                Customer View Simulation
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 max-sm:grid-cols-1 gap-4 2xl:px-8 2xl:py-4 px-4 py-2">
                {/* MARGIN AMOUNT INPUT */}
                <InputWithLabel 
                    label={"Margin Amount"}
                    inputValue={marginAmount}
                    onInput={(value: number) => updateMarginAmount(value)}
                    placeholderValue="E.g 1000"
                    labelStyle={custViewLabelStyle}
                    inputStyle={custViewInputStyle}
                />

                {/* MARGIN PERCENT INPUT */}
                <InputWithLabel 
                    label={"Margin Percent"}
                    inputValue={marginPercent}
                    onInput={(value: number) => updateMarginPercent(value)}
                    placeholderValue="E.g 1000"
                    labelStyle={custViewLabelStyle}
                    inputStyle={custViewInputStyle}
                />

                {/* CUSTOMER VIEW AMOUNT */}
                <TextWithLabel 
                    label={"Cust. View Amount"}
                    value={customerViewAmount.toFixed(2)}
                    style={custViewLabelStyle}
                />

                {/* CUSTOMER VIEW PERCENT */}
                <TextWithLabel 
                    label={"Cust. View Percent"}
                    value={customerViewPercent.toFixed(4)}
                    style={custViewLabelStyle}
                />
            </div>
        </div>
    );
};

export default CustomerViewCalculator;
