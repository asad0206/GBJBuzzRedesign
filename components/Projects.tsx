import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="p-20">
      <div className="flex space-x-4 justify-between py-20 px-10 pr-6">
        <div className="text-neutral-900 text-5xl font-semibold text-left">
            {/* add hover effect to the span */}
          Discover exclusive deals and seize lucrative <span>opportunities.</span>
        </div>
        <p className="text-zinc-500 text-lg text-justify w-5/6">
          GBJ Buzz’s commitment lies in propelling enterprises forward in the
          digital landscape. We distinguish ourselves from the market by
          delivering cutting-edge IT services & consistently staying abreast of
          industry advancements.
        </p>
      </div>

      <div className="flex">
        {/* left element */}
        <div className="w-[65%] pr-2">
          <Image
            src="/image.png"
            alt="logo"
            width={1090}
            height={510}
            className="rounded-3xl"
          />
        </div>
        {/* right element */}
        <div className="w-[33%] bg-black rounded-[40px] p-10 ml-auto">
          <div className="flex justify-center space-x-2">
            <span className="text-white text-[96px] font-semibold">920</span>
            <span className="text-yellow-400 text-[96px] font-semibold">+</span>
          </div>
          <div className="text-zinc-400 text-xl font-semibold flex justify-center">
            Projects finished till now
          </div>
          <div className="flex items-center justify-center p-6">
            <Image
              src="/Automobile.png"
              alt="logo"
              width={64}
              height={64}
              className="rounded-3xl filter grayscale"
            />
            <Image
              src="/Realestate.png"
              alt="logo"
              width={64}
              height={64}
              className="rounded-3xl filter grayscale"
            />
            <Image
              src="/cloudkitchen.png"
              alt="logo"
              width={64}
              height={64}
              className="rounded-3xl filter grayscale"
            />
            <Image
              src="/foodindustry.png"
              alt="logo"
              width={64}
              height={64}
              className="rounded-3xl filter grayscale"
            />
            <span className="text-white text-[40px] font-semibold">+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
