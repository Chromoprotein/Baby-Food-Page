import { fetchFoodLog } from "@/app/lib/data";
import FoodCardPart from "./foodCardPart";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsEmojiAngry } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { auth } from "@/auth";

export default async function FoodCard() {

    const session = await auth()

    if (!session?.user?.id) {
        // Handle the case where session or session.user.id is undefined
        throw new Error("User is not authenticated");
    }

    const babyFoods = await fetchFoodLog(session?.user?.id);

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