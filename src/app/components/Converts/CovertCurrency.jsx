'use client'

import { useState, useEffect } from 'react'
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid'
import CurrencyInput from "../Inputs/CurrencyInput"
import Button from '../Buttons/Button'
import Modal from '../Modals/Modal'
import Spinner from '../Spinners/Spinner'
import { currencies } from '@/app/utils/currenciesList'
import { buttonEnums } from '@/app/utils/enums/buttonEnums'
import { useSelector, useDispatch } from 'react-redux'
import { exchange } from '@/lib/features/convertSlice'

function ConvertCurrency() {
    const [date, setDate] = useState('');
    const convertInfo = useSelector(state => state.convertInfo)
    const dispatch = useDispatch()

    function exchangeFromTo() {
        const tempFrom = convertInfo.from
        const tempTo = convertInfo.to

        dispatch(exchange({ tempFrom, tempTo }))
    }

    // @Hack: Use `useState` and `useEffect` to prevent the error of SSR not matching CSR due to the different rendering timing.
    useEffect(() => {
        setDate(new Date().toLocaleString())
    }, []);

    return (
        <>
            <div className="grid">
                <div className="
                    w-full flex justify-center py-5 text-base
                    md:justify-end
                ">
                    <p>Date: 
                        { convertInfo.timesmap === 0 ? date : new Date().toLocaleString(convertInfo.timesmap) }
                    </p>
                </div>
                <div className="
                    flex flex-col items-center flex-gap-[10px] px-5
                    md:flex-row md:px-0
                ">
                    <CurrencyInput options= {currencies} from={convertInfo.from} />
                    <ArrowsRightLeftIcon
                        className="rotate-90 md:rotate-0 w-[40px] h-[40px] hover:cursor-pointer"
                        onClick={exchangeFromTo}
                    />
                    <CurrencyInput options={currencies} to={convertInfo.to} />
                </div>
            </div>
            <div className="
                flex flex-col flex-gap-[20px] text-[24px]
                md:flex-row md:text-[30px] md:mt-[70px]
            ">
                <Button buttonEnum={buttonEnums.secondary}>Reset</Button>
                <Button buttonEnum={buttonEnums.primary}>Convert</Button>
            </div>
            {
                convertInfo.isLoading && 
                <Modal>
                    <Spinner />
                </Modal>
            }
        </>
    )
}

export default ConvertCurrency