import { fetchFilteredBabyFoods } from "@/app/lib/data";
import { fetchTotalFilteredBabyFoods } from "@/app/lib/data";
import Pagination from "../Pagination";
import FoodLogForm from "./foodLogForm";

export default async function AllFoodsCard({ query, category, stage, currentPage, userId } : { query: string; category: string; stage: number | null; currentPage: number; userId: string; }) {

    const babyFoods = await fetchFilteredBabyFoods(userId, query, category, stage, currentPage);

    const totalPages = await fetchTotalFilteredBabyFoods(userId, query, stage, category);

    const foods = babyFoods.map((food, index) => {
    return <div key={index}>
        <FoodLogForm food={food} userId={userId}/>
    </div>
    })

    console.log(totalPages + " is total pages number")

    return (
        <div className="m-4">
            {foods}

            <div className="text-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}