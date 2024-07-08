import Link from 'next/link';
import { auth, signOut } from '@/auth';
 
export default async function NavLinks() {

    const links = [
        {
            name: "New foods",
            href: "/babyfood",
        },
        {
            name: "Stats",
            href: "/baby",
        }
    ]

    const session = await auth()

  return (
    <div className="fixed w-full flex flex-row justify-start p-4 h-20 items-center z-10 gap-5 bg-gradient-to-b from-lime-50">
      <Link href="/" className="tracking-wide font-bold text-xl hover:text-lime-800 h-12 flex items-center px-5 m-0 text-center text-lime-600">BabyFoodTracker</Link>
      {links.map((link) => {
        return (
          <Link
            className="text-black hover:text-lime-800 h-12 flex items-center px-5 m-0 text-center font-bold"
            key={link.name}
            href={link.href}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
      {session ?
        <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
          <button className="text-black hover:text-lime-800 h-12 flex items-center px-5 m-0 text-center font-bold">Sign Out</button>
        </form>
      :           <Link
            className="text-black hover:text-lime-800 h-12 flex items-center px-5 m-0 text-center font-bold"
            href="/login"
          >
            <p>Login</p>
          </Link>}
    </div>
  );
}