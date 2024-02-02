'use client'

import { buttonEnums } from '@/app/utils/enums/buttonEnums'
import { useDispatch, useSelector } from 'react-redux';
import { reset, fetchData } from '@/lib/features/convertSlice';

function Button({ buttonEnum, children }) {
    const convertInfo = useSelector(state => state.convertInfo)
    const dispatch = useDispatch()
    
    function buttonHandler() {
        if (children === 'Reset') {
            dispatch(reset())
        } else if (children === 'Convert') {
            dispatch(fetchData(convertInfo))
        }
    }
    
    return (
        <button
            type="button"
            className={`
                rounded-full
                bg-[--dark]
                px-10
                py-4
                relative
                transition-all
                duration-300
                ${buttonEnum === buttonEnums.primary ? 'button button-primary' : 'button'}
                ${buttonEnum === buttonEnums.secondary ? 'button button-secondary' : 'button'}
                ${buttonEnum === buttonEnums.tertiary ? 'button button-tertiary' : 'button'}
            `}
            onClick={buttonHandler}
        >
            { children }
        </button>
    );
}

export default Button;