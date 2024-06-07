import { fetchFoodLog, fetchTotalLogs } from '../../lib/data';
import { Suspense } from 'react';
import { FoodLogSkeleton } from '@/app/ui/skeletons';
import FoodCard from '@/app/ui/baby/foodCard';
import Image from 'next/image';
import { BsEmojiAngry } from "react-icons/bs";

import { BsEmojiSmile } from "react-icons/bs";

export default async function Page() {

  const totalLogs = await fetchTotalLogs("410544b2-4001-4271-9855-fec4b6a6442a");

  const foodPercentage = (totalLogs / 10) * 100;

  const style: React.CSSProperties = {
    width: `${foodPercentage}%`
  };

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

        <div className="mx-auto w-full md:w-1/2 m-10">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-lime-700">FOOD TASTING PROGRESS</span>
            <span className="text-sm font-medium text-lime-700">45%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5">
            <div className="bg-lime-600 h-5 rounded-full" style={style}></div>
          </div>
        </div>


        <Suspense fallback={<FoodLogSkeleton />}>
          <FoodCard />
        </Suspense>

    </div>
  );
}