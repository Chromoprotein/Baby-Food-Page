'use client';

import CaterpillarButton from '../ui/caterpillarButton';
import Input from './input';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {

    // Used to access the parameters of the URL, here they're query and category
    const searchParams = useSearchParams();
    // Used to get the path name, e.g. /babyfood/baby
    const pathname = usePathname();
    // Used to update the URL bar
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        // API that creates a query string that can be manipulated
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        // Updates the URL bar with the query string
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const handleCategory = ((term: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term && term !== "X") {
            params.set('category', term);
        } else {
            params.delete('category');
        }
        replace(`${pathname}?${params.toString()}`);
    });
 
  return (
    <>
        <CaterpillarButton 
            options={["MAIN MEALS", "SNACKS", "X"]} 
            label="CATEGORY"
            action={(e) => { 
                const target = e.target as HTMLButtonElement;
                handleCategory(target.value); 
            }}
            defaulty={searchParams.get('category')?.toString()}
        />

        <div className="p-3">
          <Input 
            name="SEARCH" 
            placeholder="Type to search" 
            action={(e) => {handleSearch(e.target.value); }}
            defaulty={searchParams.get('query')?.toString()}
            />
        </div>
    </>

  );
}