import { CaterpillarButtonProps } from "../lib/definitions";
import clsx from 'clsx';

export default function CaterpillarButton({options, label}: CaterpillarButtonProps) {

    const optionsLength = options.length - 1;
    const caterpillarButtons = options.map((option, index) => {
        return (
            <button 
                key={index} 
                className={clsx('bg-amber-300 py-3 px-4 hover:bg-amber-500 text-sm font-bold text-lime-800',
                {'rounded-l-full': index === 0},
                {'rounded-r-full': index === optionsLength },
                )}
            >
                {option}
            </button>
        )
    })

    return (
        <div className="p-3">
            <p className="text-sm font-bold text-lime-800 p-3">{label}</p>
            {caterpillarButtons}
        </div>
    );
}