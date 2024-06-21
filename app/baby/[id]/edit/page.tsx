import { fetchFoodLogById } from "@/app/lib/data";
import UpdateLogForm from "@/app/ui/baby/updateLogForm";

export default async function Page({ params }: { params: { id: string } }) {

    const id = params.id;
    const foodLogItem = await fetchFoodLogById(id);
    
    return (
        <>
            <UpdateLogForm log={foodLogItem} />
        </>
    );

}