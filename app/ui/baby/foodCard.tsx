import { fetchFoodLog } from "@/app/lib/data";
import FoodCardPart from "./foodCardPart";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsEmojiAngry } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";

export default async function FoodCard({ userId }: { userId: string }) {

    const babyFoods = await fetchFoodLog(userId);

    const loves = babyFoods.filter(item => item.opinion === 'love');
    const likes = babyFoods.filter(item => item.opinion === 'like');
    const dislikes = babyFoods.filter(item => item.opinion === 'dislike');

    return (
        <div className="mb-10">
            <FoodCardPart opinion={<BsEmojiHeartEyes size="2em" color="grey" />} foods={loves} />
            <FoodCardPart opinion={<BsEmojiSmile size="2em" color="grey" />} foods={likes} />
            <FoodCardPart opinion={<BsEmojiAngry size="2em" color="grey" />} foods={dislikes} />
        </div>
    );
}