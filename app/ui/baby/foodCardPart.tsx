import { FoodCardPartProps } from "@/app/lib/definitions";
import { UpdateLogButton } from "./updateLogButton";
import { DeleteLogButton } from "./deleteLogButton";

export default function FoodCardPart({opinion, foods}: FoodCardPartProps) {

    return (
        <div className="border-t-2 border-lime-600 shadow my-4 p-4 flex flex-row flex-wrap justify-start items-center w-full md:w-2/3 mx-auto">
            {opinion}
            {foods.length === 0 ? <p className="p-3 m-3">Nothing here yet</p> :
            foods.map((food, index) => {
                    return <span key={index} className="rounded-full bg-green-100 p-3 m-3">
                        {food.name} 
                        <UpdateLogButton id={food.id} />
                        <DeleteLogButton id={food.id} />
                    </span>
                })}
        </div>
    );
}