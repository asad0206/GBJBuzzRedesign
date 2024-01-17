import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="p-5 md:p-5">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-between py-10 px-5 md:px-10 pr-3">
        {/* div one */}
        <div className="text-neutral-900 text-2xl md:text-5xl font-semibold text-left">
          {/* add hover effect to the span */}
          Discover exclusive deals and seize lucrative <span>opportunities.</span>
        </div>
        {/* div two */}
        <p className="text-zinc-500 text-sm md:text-lg text-justify w-full md:w-5/6">
          GBJ Buzz’s commitment lies in propelling enterprises forward in the
          digital landscape. We distinguish ourselves from the market by
          delivering cutting-edge IT services & consistently staying abreast of
          industry advancements.
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* left element */}
        {/* div three */}
        <div className="w-full md:w-[65%] pr-2">
          <Image
            src="/image.png"
            alt="logo"
            width={1090}
            height={510}
            className="rounded-3xl"
          />
        </div>
        {/* right element */}
        {/* div four */}
        <div className="w-full md:w-[33%] bg-black rounded-[40px] p-5 md:p-10 mt-5 md:mt-0">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
            <span className="text-white text-[48px] md:text-[96px] font-semibold">920</span>
            <span className="text-yellow-400 text-[48px] md:text-[96px] font-semibold">+</span>
          </div>
          <div className="text-zinc-400 text-sm md:text-xl font-semibold flex justify-center mt-2 md:mt-6">
            Projects finished till now
          </div>
          <div className="flex items-center justify-center p-3 md:p-6">
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
            <span className="text-white text-[24px] md:text-[40px] font-semibold mt-2 md:mt-0">+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
