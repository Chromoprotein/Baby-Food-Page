import { fetchBabyFoods } from "@/app/lib/data";
import WideButton from "../wideButton";

export default async function AllFoodsCard() {

    const babyFoods = await fetchBabyFoods("410544b2-4001-4271-9855-fec4b6a6442a");

    const foods = babyFoods.map((food, index) => {
    return <div key={index} className="bg-slate-50 m-3 p-5 border-l-2 border-lime-600 hover:bg-slate-100 w-96">
        <input type="checkbox" name={food.name} id={food.name} value={food.name}/>
        <label 
            htmlFor={food.name}
            className="w-full p-3 text-sm font-bold text-lime-800"
        >
            {food.name.toUpperCase()}
        </label>
    </div>
    })

    return (
        <div className="m-4">
            <div>{foods}</div>

            <div className="text-center">
                <WideButton name="More ideas" />
            </div>
        </div>
    );
}