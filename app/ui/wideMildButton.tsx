import { ButtonProps } from "../lib/definitions";

export default function WideMildButton({name}: ButtonProps) {
    return (
        <button 
            type="button" 
            name={name} 
            className="rounded-full bg-white border-2 border-lime-600 hover:shadow-lg p-3 m-3 w-48 h-12 text-sm font-bold text-lime-800"
        >
            {name.toUpperCase()}
        </button>
    );
}