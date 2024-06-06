import { Suspense } from 'react';
import { BabyFoodsSkeleton } from '../ui/skeletons';
import AllFoodsCard from '../ui/babyfood/allFoodsCard';
import CaterpillarButton from '../ui/caterpillarButton';
import WideButton from '../ui/wideButton';

export default async function Page() {

  return (
    <div className="flex flex-col flex-col-reverse md:flex-row justify-center items-center">

      <Suspense fallback={<BabyFoodsSkeleton />}>
        <AllFoodsCard />
      </Suspense>

      <div>
        <div className="bg-slate-50 p-5 mb-10 w-96 border-t-2 border-lime-600 flex flex-col">
          <p>Here are some foods your baby has not tried yet!</p>

          <CaterpillarButton options={["MAIN MEALS", "SNACKS"]} label="CATEGORY" />
          <CaterpillarButton options={["4", "6", "8", "10", "12"]} label="AGE (MONTHS)" />

          <div className="p-3">
            <label htmlFor="search" className="text-sm font-bold text-lime-800 p-3 block">SEARCH</label>
            <input type="text" className="rounded-full py-2 px-4 border-2 border-lime-600 w-64" placeholder="Type to search"/>
          </div>

          <WideButton name="Search" />
        </div>
      </div> 

    </div>
  );
}