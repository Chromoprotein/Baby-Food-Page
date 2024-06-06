import Link from 'next/link';
 
export default function NavLinks() {

    const links = [
        {
            name: "New foods",
            href: "/babyfood",
        },
        {
            name: "Stats",
            href: "/babyfood/baby",
        }
    ]

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
    </div>
  );
}