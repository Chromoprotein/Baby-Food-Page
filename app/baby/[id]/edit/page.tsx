import { fetchFoodLogById } from "@/app/lib/data";
import UpdateLogForm from "@/app/ui/baby/updateLogForm";
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {

    const id = params.id;
    const foodLogItem = await fetchFoodLogById(id);
    
  if (!foodLogItem) {
    notFound();
  }

    return (
        <div className="pt-20 flex justify-center items-center">
            <UpdateLogForm log={foodLogItem} />
        </div>
    );

}