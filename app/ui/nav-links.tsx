import Link from 'next/link';
 
export default function NavLinks() {

    const links = [
        {
            name: "Explore foods",
            href: "/babyfood",
        },
        {
            name: "Try a new food",
            href: "/babyfood/new",
        },
        {
            name: "Edit baby info",
            href: "/baby",
        }
    ]

  return (
    <div className="">
      {links.map((link) => {
        return (
          <Link
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