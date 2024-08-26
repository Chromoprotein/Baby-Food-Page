import { ButtonProps } from "../lib/definitions";

export default function WideButton({name, action, isDisabled = false, type = "button"}: ButtonProps) {

    const buttonColor = isDisabled ? "bg-slate-200" : "bg-gradient-to-r from-lime-500 to-yellow-500 hover:from-lime-600 hover:to-yellow-600";

    return (
        <button 
            type={type}
            name={name} 
            className={`rounded-full ${buttonColor} p-3 m-3 w-48 text-sm font-bold text-lime-800`}
            onClick={action}
            disabled={isDisabled}
        >
            {name.toUpperCase()}
        </button>
    );
}