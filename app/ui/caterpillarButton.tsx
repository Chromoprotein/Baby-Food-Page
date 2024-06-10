import { CaterpillarButtonProps } from "../lib/definitions";
import clsx from 'clsx';

export default function CaterpillarButton({options, label, selectedOption, action, defaulty}: CaterpillarButtonProps) {

    const optionsLength = options.length - 1;
    const caterpillarButtons = options.map((option, index) => {
        return (
            <button 
                key={index}
                name={label}
                value={option}
                onClick={action}
                className={clsx('py-3 px-4 text-sm font-bold text-lime-800',
                {'rounded-l-full': index === 0},
                {'rounded-r-full': index === optionsLength },
                {'bg-green-300': defaulty === option},
                {'hover:bg-amber-700': defaulty === option},
                {'hover:bg-amber-500': defaulty !== option},
                {'bg-amber-300': defaulty !== option}
                )}
                defaultValue={defaulty}
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