import { RadioButtonProps } from "../lib/definitions";

export default function EmojiRadio({id, name, value, emoji, defaultChecked = false}: RadioButtonProps) {

    return (
        <div className="flex items-center">
            <input type="radio" id={`${id}${value}`} name={name} value={value} className="sr-only" defaultChecked={defaultChecked}/>
            <label htmlFor={`${id}${value}`} className="cursor-pointer">
                <span className="emoji-radio text-2xl">{emoji}</span>
            </label>
        </div>
    );
}