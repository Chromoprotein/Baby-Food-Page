import { InputProps } from "../lib/definitions";

export default function Input({name, placeholder, action, defaulty}: InputProps) {
    return (
        <div className="flex flex-col my-3">
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
                className="p-3 rounded-full border-2 border-lime-600 hover:shadow-lg" 
                onChange={action}
                defaultValue={defaulty}
            />
        </div>
    );
}