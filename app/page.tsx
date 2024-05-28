import Image from "next/image";
import { lusitana } from '@/app/ui/fonts';
import NavLinks from '@/app/ui/nav-links';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavLinks/>
      <Image
        src="/hero-desktop.webp"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Drawings of fruits and vegetables, desktop version"
      />
      <Image
        src="/hero-mobile.webp"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Drawings of fruits and vegetables, mobile version"
      />
      
    </main>
  );
}