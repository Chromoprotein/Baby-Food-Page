import { fetchFoodLog, fetchTotalLogs } from '../../lib/data';
import { Suspense } from 'react';
import { FoodLogSkeleton } from '@/app/ui/skeletons';
import FoodCard from '@/app/ui/baby/foodCard';

export default async function Page() {

  const totalLogs = await fetchTotalLogs("410544b2-4001-4271-9855-fec4b6a6442a");

  return (
    <div>
      <h1>Your baby has tried these foods</h1>

      <Suspense fallback={<FoodLogSkeleton />}>
        <FoodCard />
      </Suspense>

      Total foods tried: {totalLogs}
    </div>
  );
}