'use client'

import { useRef, useEffect } from "react";
import { roundedEnums } from "@/app/utils/enums/roundedEnums";
import { useDispatch, useSelector } from "react-redux";
import { setAmount } from "@/lib/features/convertSlice";

function Input({ type, rounded, defaultValue, expandPanelHandler, from, to }) {
    const inputRef = useRef()

    const convertInfo = useSelector(state => state.convertInfo)
    const dispatch = useDispatch()

    function inputHandler(e) {
        if(type === 'text') {
            // Handle the filtered keywords and the panel expanding
            if(e.target.value === '') {
                expandPanelHandler('', false)
            } else {
                expandPanelHandler(e.target.value, true)
            }
        } else if (type === 'number' && from) {
            if (e.target.value === '') {
                dispatch(setAmount(0))
            } else {
                dispatch(setAmount(parseFloat(e.target.value)))
            }
        }
    }
    
    useEffect(() => {
        // Change the input value after clicking on the option
        if (type === 'text') {
            if (from) {
                inputRef.current.value = convertInfo.from
            } else {
                inputRef.current.value = convertInfo.to
            }
        } else if (type === 'number') {
            if (from) {
                inputRef.current.value = convertInfo.fromAmount
            } else {
                // Show the converted amount
                inputRef.current.value = convertInfo.toAmount
            }
        }
    }, [convertInfo]);

    return (
        <input
            ref={inputRef}
            type={type}
            className={`
                bg-[--background-input]
                h-full
                w-full
                px-4
                py-2
                text-[28px]
                box-border
                ${rounded === roundedEnums.all ? 'rounded-full' : ''}
                ${rounded === roundedEnums.left ? 'rounded-l-full' : ''}
                ${rounded === roundedEnums.right ? 'rounded-r-full' : ''}
            `}
            defaultValue={defaultValue}
            onChange={inputHandler}
        />
    );
}

export default Input;