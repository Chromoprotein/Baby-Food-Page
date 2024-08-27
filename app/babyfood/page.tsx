import { Suspense } from 'react';
import { BabyFoodsSkeleton } from '../ui/skeletons';
import AllFoodsCard from '../ui/babyfood/allFoodsCard';
import Search from '../ui/Search';
import { auth } from '@/auth';

// Page receives the search and pagination parameters as props directly from the URL
// Passes them to allFoodsCard which fetches the data using them

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    category?: string;
    stage?: string;
    page?: string;
  };
}) {

  const query = searchParams?.query || '';
  const category = searchParams?.category || '';
  const stage = Number(searchParams?.stage);
  const currentPage = Number(searchParams?.page) || 1;

  // Keystring is needed to trigger Suspense
  const keyString = `search=${query}${category}${stage}${currentPage}`;

  const session = await auth()

  if (!session?.user?.id) {
      // Handle the case where session or session.user.id is undefined
      throw new Error("User is not authenticated");
  }

  return (
    <div className="flex pt-20 flex-col md:flex-row justify-center items-start">

      <div className="bg-slate-50 p-5 mb-10 w-96 border-t-2 border-lime-600 flex flex-col">
        <Search placeholder="Search foods" />
      </div>

      <Suspense key={keyString} fallback={<BabyFoodsSkeleton />}>
        <AllFoodsCard query={query} category={category} stage={stage} currentPage={currentPage} userId={session?.user?.id}/>
      </Suspense>

    </div>
  );
}