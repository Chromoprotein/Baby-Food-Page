'use client';

import CaterpillarButton from '../ui/caterpillarButton';
import Input from './input';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
 
export default function Search({ placeholder }: { placeholder: string }) {

    // Used to access the parameters of the URL, here they're query, age, category
    const searchParams = useSearchParams();
    // Used to get the path name, e.g. /babyfood/baby
    const pathname = usePathname();
    // Used to update the URL bar
    const { replace } = useRouter();

    function handleSearch(term: string) {
        // API that creates a query string that can be manipulated
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        // Updates the URL bar with the query string
        replace(`${pathname}?${params.toString()}`);
    }

    function handleCategory(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term && term !== "X") {
            params.set('category', term);
        } else {
            params.delete('category');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    function handleAge(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term && term !== "X") {
            params.set('age', term);
        } else {
            params.delete('age');
        }
        replace(`${pathname}?${params.toString()}`);
    }
 
  return (
    <>
        <CaterpillarButton 
            options={["MAIN MEALS", "SNACKS", "X"]} 
            label="CATEGORY" 
            selectedOption="MAIN MEALS" 
            action={(e) => { 
                const target = e.target as HTMLButtonElement;
                handleCategory(target.value); 
            }}
            defaulty={searchParams.get('category')?.toString()}
        />
        <CaterpillarButton 
            options={["4", "6", "8", "X"]} 
            label="AGE (MONTHS)" 
            selectedOption="6" 
            action={(e) => { 
                const target = e.target as HTMLButtonElement;
                handleAge(target.value); 
            }}
            defaulty={searchParams.get('age')?.toString()}
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