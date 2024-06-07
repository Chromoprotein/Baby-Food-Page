import { fetchBabyFoods } from "@/app/lib/data";
import WideMildButton from "../wideMildButton";
import { BsEmojiAngry } from "react-icons/bs";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";

export default async function AllFoodsCard() {

    const babyFoods = await fetchBabyFoods("410544b2-4001-4271-9855-fec4b6a6442a");

    const foods = babyFoods.map((food, index) => {
    return <div 
        key={index} 
        className="bg-slate-50 m-3 p-5 border-l-2 border-lime-600 hover:bg-slate-100 w-96 hover:shadow-lg w-full p-3 text-sm font-bold text-lime-800 flex flex-row justify-center items-center gap-4">
            {food.name.toUpperCase()}
            <div className="flex flex-row gap-3">
                <button type="button"><BsEmojiHeartEyes size="2em" color="grey" /></button>
                <button type="button"><BsEmojiSmile size="2em" color="grey" /></button>
                <button type="button"><BsEmojiAngry size="2em" color="grey" /></button>
            </div>
    </div>
    })

    return (
        <div className="m-4">
            <div>{foods}</div>

            <div className="text-center">
                <WideMildButton name="More ideas" />
            </div>
        </div>
    );
}