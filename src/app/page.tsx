"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-full md:w-1/3 border-r-2 min-h-screen flex flex-col items-center justify-center">
        <Link href={"/meteora"}>
          <div className="relative w-full max-w-xs">
            <Image
              src="/assets/meteorboy.png"
              alt="Meteor Boy"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <h1 className="text-4xl md:text-6xl text-center mt-4">
            Meteora DLLM
          </h1>
        </Link>
      </div>

      <div className="hidden md:block w-2/3">
        {/* Content for the right side */}
      </div>
    </div>
  );
}
