import { fetchFilteredBabyFoods } from "@/app/lib/data";
import { fetchTotalFilteredBabyFoods } from "@/app/lib/data";
import Pagination from "../Pagination";
import FoodLogForm from "./foodLogForm";

export default async function AllFoodsCard({ query, category, currentPage } : { query: string; category: string; currentPage: number; }) {

    const userId = "410544b2-4001-4271-9855-fec4b6a6442a";
    const babyFoods = await fetchFilteredBabyFoods(userId, query, category, currentPage);

    const totalPages = await fetchTotalFilteredBabyFoods(userId, query, category);

    const foods = babyFoods.map((food, index) => {
    return <div key={index}>
        <FoodLogForm food={food}/>
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