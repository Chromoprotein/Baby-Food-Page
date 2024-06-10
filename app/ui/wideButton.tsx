import { ButtonProps } from "../lib/definitions";

export default function WideButton({name, action}: ButtonProps) {
    return (
        <button 
            type="button" 
            name={name} 
            className="rounded-full bg-gradient-to-r from-lime-500 to-yellow-500 hover:from-lime-600 hover:to-yellow-600 p-3 m-3 w-48 text-sm font-bold text-lime-800"
            onClick={action}
        >
            {name.toUpperCase()}
        </button>
    );
}