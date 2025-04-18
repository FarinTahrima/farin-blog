import React from "react";
import { getStyleClass } from "../utils/style-utils.tsx";

interface SearchBarProps {
    searchIconColourHex: string;
    style: SearchBarStyle;
    onSearch: (text: string) => void;
};

type SearchBarStyle = {
    borderColour: string;
    textColour: string;
    placeholderTextColour: string;
};

const SearchBar = ({
    searchIconColourHex,
    style: {
        borderColour,
        textColour,
        placeholderTextColour
    },
    onSearch
}: SearchBarProps) => {
    return (
        <div className="mt-4">
            <div className={`relative mb-4 flex w-full flex-wrap items-stretch rounded ${getStyleClass({borderColour, textColour})}`}>
                {/* <!--Search icon--> */}
                <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700"
                  id="basic-addon2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill={searchIconColourHex}
                        className="h-10 w-10 max-sm:h-6 max-sm:w-6">
                        <path
                            fillRule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clipRule="evenodd" />
                    </svg>
                </span>
                <input
                    type="search"
                    className={`relative ${getStyleClass({placeholderTextColour})} m-0 block flex-auto  bg-clip-padding px-3 py-[0.25rem] text-2xl max-sm:text-lg leading-[1.6] outline-none transition duration-200 ease-in-out focus:outline-none`}
                    placeholder="Search"
                    onInput={(e) => onSearch(e.currentTarget.value)}
                />
          </div>
      </div>
    );
};

export default SearchBar;



