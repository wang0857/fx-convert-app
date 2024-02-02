'use client'

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFrom, setTo } from "@/lib/features/convertSlice";
import { positionEnums } from "@/app/utils/enums/positionEnums";

function FilterPanel({ options, expand, position, currency, from, to, foldPanel }) {
    const [filteredList, setFilteredList] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        setFilteredList(
            options.filter(option => option.includes(currency.toUpperCase())) 
        )
    }, [currency])

    function currencySymbolHandler(e) {
        if (from) {
            dispatch(setFrom(e.target.textContent))
            foldPanel()
        } else if (to) {
            dispatch(setTo(e.target.textContent))
            foldPanel()
        }
    }

    return (
        <div
            className={`
                absolute
                md:bg-[--background-input]
                bg-[--background-panel-mobile]
                p-2 mt-1
                rounded-2xl
                shadow-black
                w-full
                z-[99]
                ${expand ? 'block' : 'hidden'}
                ${position === positionEnums.bottom ? 'top-[70px] left-0' : ''}
                ${position === positionEnums.top ? 'bottom-[70px] left-0' : ''}
            `}
        >
            <ul className="flex flex-col list-none max-h-[200px] overflow-y-auto filter-panel-list">
                {
                    filteredList.length === 0 ? <li>No Results.</li> : 
                    filteredList.map(item =>
                        <li 
                            key={item}
                            className="px-0 py-2 text-base text-center rounded-xl transition-all duration-300
                                       hover:cursor-pointer hover:bg-[--background-input-hover]
                                       focus:outline outline-offset-2 outline-1
                            "
                            onClick={currencySymbolHandler}
                        >
                            {item}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default FilterPanel;