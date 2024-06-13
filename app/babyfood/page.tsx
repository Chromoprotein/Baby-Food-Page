import { Suspense } from 'react';
import { BabyFoodsSkeleton } from '../ui/skeletons';
import AllFoodsCard from '../ui/babyfood/allFoodsCard';
import Search from '../ui/Search';

// Page receives the search and pagination parameters as props directly from the URL
// Passes them to allFoodsCard which fetches the data using them

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    category?: string;
    page?: string;
  };
}) {

  const query = searchParams?.query || '';
  const category = searchParams?.category || '';
  const currentPage = Number(searchParams?.page) || 1;

  // Keystring is needed to trigger Suspense
  const keyString = `search=${query}${category}${currentPage}`;

  return (
    <div className="flex flex-col md:flex-row justify-center items-start">

      <div className="bg-slate-50 p-5 mb-10 w-96 border-t-2 border-lime-600 flex flex-col">
        <Search placeholder="Search foods" />
      </div>

      <Suspense key={keyString} fallback={<BabyFoodsSkeleton />}>
        <AllFoodsCard query={query} category={category} currentPage={currentPage} />
      </Suspense>

    </div>
  );
}