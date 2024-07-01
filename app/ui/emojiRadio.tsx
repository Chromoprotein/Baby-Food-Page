import { RadioButtonProps } from "../lib/definitions";

export default function EmojiRadio({food, value, emoji, defaultChecked = false}: RadioButtonProps) {

    return (
        <div className="flex items-center">
            <input 
                type="radio" 
                id={`${food} ${value}`} // e.g. carrot puree love
                name="opinion"
                value={value} 
                className="sr-only" 
                defaultChecked={defaultChecked}
            />
            <label 
                htmlFor={`${food} ${value}`} 
                className="cursor-pointer"
            >
                <span className="emoji-radio text-2xl">{emoji}</span>
            </label>
        </div>
    );
}