import { fetchFoodLogById } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {

    const id = params.id;
    const foodLogItem = await fetchFoodLogById(id);

    return (
        <>
            This is testing finding an item by the ID: {foodLogItem.name}
        </>
    );

}