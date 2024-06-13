import { fetchFilteredBabyFoods } from "@/app/lib/data";
import WideMildButton from "../wideMildButton";
import { BsEmojiAngry } from "react-icons/bs";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { fetchTotalFilteredBabyFoods } from "@/app/lib/data";
import Pagination from "../Pagination";

export default async function AllFoodsCard({ query, category, currentPage } : { query: string; category: string; currentPage: number; }) {

    const userId = "410544b2-4001-4271-9855-fec4b6a6442a";
    const babyFoods = await fetchFilteredBabyFoods(userId, query, category, currentPage);

    const totalPages = await fetchTotalFilteredBabyFoods(userId, query, category);

    const foods = babyFoods.map((food, index) => {
    return <div 
        key={index} 
        className="bg-slate-50 m-3 p-5 border-l-2 border-lime-600 hover:bg-slate-100 min-w-96 max-w-96 min-h-24 hover:shadow-lg p-3 text-sm font-bold text-lime-800 flex flex-row justify-center items-center gap-4">
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
            {foods}

            <div className="text-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}