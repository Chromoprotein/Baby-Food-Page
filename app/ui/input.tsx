import { InputProps } from "../lib/definitions";

export default function Input({name, placeholder}: InputProps) {
    return (
        <div className="flex flex-col m-3">
            <label 
                htmlFor={name} 
                className="mb-3 mx-3 text-sm font-bold text-lime-600"
            >
                {name.toUpperCase()}
            </label>

            <input 
                type="text" 
                name={name} 
                placeholder={placeholder} 
                className="p-3 rounded-full border-2 border-lime-600" 
            />
        </div>
    );
}