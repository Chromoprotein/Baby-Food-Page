export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="pt-36 w-full md:w-2/3 mx-auto h-min-screen">
      {children}
    </div>
  )
}