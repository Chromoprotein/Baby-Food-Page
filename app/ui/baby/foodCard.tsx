import { fetchFoodLog } from "@/app/lib/data";

export default async function FoodCard() {
    const babyFoods = await fetchFoodLog("410544b2-4001-4271-9855-fec4b6a6442a");

    const foods = babyFoods.map((food, index) => {
        return <ul key={index}>
            <li>{food.name}</li>
        </ul>
    })

    return (
        <div>{foods}</div>
    );
}