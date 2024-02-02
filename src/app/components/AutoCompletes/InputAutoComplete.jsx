'use client'

import { useState } from "react";
import Input from "../Inputs/Input";
import FilterPanel from "../Panels/FilterPanel";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { positionEnums } from "@/app/utils/enums/positionEnums";


function InputAutoComplete({ options, rounded, from, to }) {
    
    const [expand, setExpand] = useState(false);
    const [currency, setCurrency] = useState(''); // The currency is a keyword used for filtering options.

    function expandPanelHandler(inputedCurrency, expanded) {
        setCurrency(inputedCurrency)
        setExpand(expanded)
    }

    function expandPanelAll() {
        setExpand(!expand)
    }

    function foldPanel() {
        setExpand(false)
    }

    return (
        <div className="w-full relative flex">
            <Input
                rounded={rounded}
                type="text"
                defaultValue={from ? from : to}
                expandPanelHandler={expandPanelHandler}
                from={from}
                to={to}
            />
            <button className="p-1 bg-[--background-input] h-full" onClick={expandPanelAll}>
                { expand ? <ChevronUpIcon className="w-[15px] h-[15px] stroke-white stroke-2" /> :
                           <ChevronDownIcon className="w-[15px] h-[15px] stroke-white stroke-2" />
                }
            </button>
            <FilterPanel
                options={options}
                expand={expand}
                position={positionEnums.bottom}
                currency={currency}
                from={from}
                to={to}
                foldPanel={foldPanel}
            />
        </div>
    );
}

export default InputAutoComplete;