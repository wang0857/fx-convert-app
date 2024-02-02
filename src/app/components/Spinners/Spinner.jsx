import { ArrowPathIcon } from '@heroicons/react/24/solid'

function Spinner() {
    return (
        <div className="animate-spin">
            <ArrowPathIcon className="w-8 h-8 md:w-12 md:h-12" />
        </div>
    );
}

export default Spinner;