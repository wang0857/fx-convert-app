import Spinner from "../Spinners/Spinner";

function Modal({children}) {
    return (
        <div className="bg-[--background-panel] absolute top-0 bottom-0 left-0 right-0 z-100 flex justify-center items-center">
            { children }
        </div>
    );
}

export default Modal;