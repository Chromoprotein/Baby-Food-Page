import { Suspense } from 'react';
import { BabyFoodsSkeleton } from '../ui/skeletons';
import AllFoodsCard from '../ui/babyfood/allFoodsCard';
import CaterpillarButton from '../ui/caterpillarButton';
import WideButton from '../ui/wideButton';
import Input from '../ui/input';
import Search from '../ui/Search';

export default async function Page() {

  return (
    <div className="flex flex-col md:flex-row justify-center items-start">

      <div className="bg-slate-50 p-5 mb-10 w-96 border-t-2 border-lime-600 flex flex-col">
        <Search placeholder="Search foods" />
      </div>

      <Suspense fallback={<BabyFoodsSkeleton />}>
        <AllFoodsCard />
      </Suspense>

    </div>
  );
}