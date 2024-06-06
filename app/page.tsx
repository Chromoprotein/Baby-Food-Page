import Image from "next/image";
import InfoCard from "./ui/infocard";
import Input from "./ui/input";
import WideButton from "./ui/wideButton";

export default function Home() {
  return (
    <main className="">
      <div className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-t from-white">

        <div className="-z-10">
          <Image
            priority
            src="/hero-desktop.webp"
            className="opacity-90"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Drawings of fruits and vegetables, desktop version"
          />
        </div>

        <div className="text-black relative flex flex-col justify-center items-center gap-4 w-96 mt-10">
          <h1 className="text-3xl text-lime-800 tracking-wide font-bold p-1 m-1 text-center">Baby food tracking made simple</h1>
          <p className="font-medium text-lg tracking-wide text-center p-1 m-1 w-96">Focus on food diversity with this easy-to-use tracker without unnecessary micromanagement</p>
          <WideButton name="Get started" />
        </div>

      </div>
      
      <div className="w-full mx-auto my-10 px-10 flex flex-col justify-center items-center">
        <h2 className="text-3xl text-lime-600 text-center pb-10">How it works</h2>

        <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-center items-center">

          <InfoCard imgSrc="/babyicon.webp">Add your baby&apos;s birthdate</InfoCard>

          <InfoCard imgSrc="/babyfoodicon.webp">Get recs for age-appropriate foods</InfoCard>

          <InfoCard imgSrc="/jarsicon.webp">Check foods off the list as your baby tastes them</InfoCard>

          <InfoCard imgSrc="/messybabyicon.webp">View your baby&apos;s progress</InfoCard>

        </div>

        <div className="w-full md:w-1/2 shadow mx-auto my-20 px-10 flex flex-col justify-center items-center border-t-2 border-lime-600 p-10">
          <h2 className="text-3xl text-lime-600 text-center pb-10">Register</h2>
          
          <Input name="name" placeholder="Baby Bob"/>

          <Input name="email" placeholder="myemail@mail.com"/>

          <Input name="birthdate" placeholder="DD-MM-YYYY"/>

          <WideButton name="Submit" />
        </div>

      </div>
    </main>
  );
}