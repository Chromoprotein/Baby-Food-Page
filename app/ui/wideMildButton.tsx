import { ButtonProps } from "../lib/definitions";
import Link from "next/link";

export default function WideMildButton({name, action, href, isDisabled}: ButtonProps) {
    return (
        <>
        {isDisabled ? (
            <button 
                type="button" 
                name={name} 
                className="rounded-full bg-white border-2 border-slate-600 p-3 m-3 w-48 h-12 text-sm font-bold text-lime-800"
                onClick={action}
            >
                {name.toUpperCase()}
            </button>
        ) : (
            <Link href={href}>
                <button 
                    type="button" 
                    name={name} 
                    className="rounded-full bg-white border-2 border-lime-600 hover:shadow-lg p-3 m-3 w-48 h-12 text-sm font-bold text-lime-800"
                    onClick={action}
                >
                    {name.toUpperCase()}
                </button>
            </Link>
        )}
        </>
    );
}