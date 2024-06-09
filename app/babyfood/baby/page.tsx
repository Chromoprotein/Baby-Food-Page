import TotalLogsBar from '@/app/ui/baby/totalLogsBar';
import { Suspense } from 'react';
import { FoodLogSkeleton, TotalLogsBarSkeleton } from '@/app/ui/skeletons';
import FoodCard from '@/app/ui/baby/foodCard';
import Image from 'next/image';

export default async function Page() {

  return (
    <div>
        <div className="flex flex-row justify-center items-center">
          <Image
            priority
            src="/babyicon.webp"
            className="w-32 p-4"
            width={1024}
            height={1024}
            alt="Baby icon"
          />
          <div>
            <h1 className="text-lime-700 text-xl">Baby A - 6 months</h1>
          </div>
        </div>

        <Suspense fallback={<TotalLogsBarSkeleton/>}>
          <TotalLogsBar/>
        </Suspense>

        <Suspense fallback={<FoodLogSkeleton />}>
          <FoodCard />
        </Suspense>

    </div>
  );
}