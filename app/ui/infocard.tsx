import Image from "next/image";
import { InfoCardProps } from "../lib/definitions";

export default function InfoCard({ children, imgSrc }: InfoCardProps) {
    return (
        <div className="bg-white w-64 h-48 rounded-b-lg text-center flex items-center justify-center shadow border-t-2 border-lime-600 p-3">
          <Image
            priority
            src={imgSrc}
            className="w-32 p-4"
            width={1024}
            height={1024}
            alt="Baby icon"
          />
          <p>{children}</p>
        </div>
    );
}