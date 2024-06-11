'use client';
 
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import WideMildButton from './wideMildButton';
 
export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
 
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
 
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
        <WideMildButton name="Previous" href={createPageURL(currentPage - 1)}
        isDisabled={currentPage === 1} />
        <WideMildButton name="Next" href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages} />
    </div>
  );
}