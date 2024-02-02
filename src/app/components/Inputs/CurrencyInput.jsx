import Input from './Input'
import InputAutoComplete from "../AutoCompletes/InputAutoComplete";
import { roundedEnums } from '@/app/utils/enums/roundedEnums'

function CurrencyInput({ options, from, to }) {
    return (
        <div className="flex shadow-white rounded-full">
            <div className="flex rounded-l-full w-[10rem]">
                <InputAutoComplete
                    options={options}
                    rounded={roundedEnums.left}
                    from={from}
                    to={to}
                />
            </div>
            <Input rounded={roundedEnums.right} type="number" from={from} to={to} />
        </div>
    );
}

export default CurrencyInput;