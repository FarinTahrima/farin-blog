import React from "react";
import FlashMessage from "../reusable_components/FlashMessage.tsx";
import { DEFAULT_FONT_FAMILY } from "../utils/style-utils.tsx";

const ErrorPage = () => {
    return (
        <div>
            <div className="p-4">
                <FlashMessage
                    message={"Sorry, this page is not available. Please check the url or select from navbar."}
                    style={{
                        fontFamily: DEFAULT_FONT_FAMILY,
                        textColour:"red-700",
                        borderColour:"red-700",
                        bgColour:"red-100",
                        borderThickness: 2
                    }}
                />
            </div>
            
        </div>
    );
  };
  
  export default ErrorPage;