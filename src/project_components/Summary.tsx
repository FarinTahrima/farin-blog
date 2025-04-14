import React from "react";
import RoundedImage from "../reusable_components/RoundedImage.tsx";
import myImage from "../data/images/my-image.jpg";
import '@fontsource/architects-daughter';
import { mySummary } from "../data/Data.tsx";

const Summary = () => {
    return (
        <div className="flex items-center max-sm:grid max-sm:grid-cols-1 grid-cols-2 justify-items-center p-4 md:p-8 lg:p-16 max-sm:gap-2 sm:gap-4 md:gap-8">
            <RoundedImage src={myImage} radius={200} alt={"Me"} />
            
            <div className="summary-txt text-my_dark_purple max-sm:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                <p>{mySummary}</p>
            </div>
        </div>
    );
  };
  
export default Summary;