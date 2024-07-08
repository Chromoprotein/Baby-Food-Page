import { Suspense } from 'react';
import { FoodLogSkeleton } from '@/app/ui/skeletons';
import Image from 'next/image';
import FoodLogWrapper from '@/app/ui/baby/foodLogWrapper';
import { auth } from '@/auth';

export default async function Page() {

  const session = await auth()

  if (!session?.user?.id) {
      // Handle the case where session or session.user.id is undefined
      throw new Error("User is not authenticated");
  }

  return (
    <div>
        <div className="flex pt-20 flex-row justify-center items-center">
          <Image
            priority
            src="/babyicon.webp"
            className="w-32 p-4"
            width={1024}
            height={1024}
            alt="Baby icon"
          />
          <div>
            <h1 className="text-lime-700 text-xl"><p>Welcome {session?.user?.name}!</p></h1>
          </div>
        </div>

        <Suspense fallback={<FoodLogSkeleton/>}>
          <FoodLogWrapper userId={session?.user?.id}/>
        </Suspense>

    </div>
  );
}