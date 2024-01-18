"use client";
import { Button } from "@/components/ui/button";

export default function Ready() {
  return (
    <div className="bg-[#0c0c0c] bg-[url('/rocket-image.svg')] bg-no-repeat bg-cover py-4 px-6 md:px-12 lg:px-24 xl:px-48 2xl:px-72 rounded-2xl mt-7">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col mb-4 md:mb-0">
          <h2 className="text-white text-3xl font-bold leading-tight mb-2">
            Ready to work with us?
          </h2>
          <div>
            <Button
              size="lg"
              className="bg-[#FFC900] text-black hover:bg-white"
            >
              Get Quote
            </Button>
          </div>
        </div>
        <div className="visible lg:invisible flex space-x-4 items-end sm:invsible ">
          <MoonStarIcon className=" sm:w-12 sm:h-12 md:w-32 md:h-32 text-white animate-pulse" />
          <RocketIcon className=" sm:w-12 sm:h-12 md:w-24 md:h-24 text-white animate-bounce" />
        </div>
      </div>
    </div>
  );
}

function MoonStarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      <path d="M19 3v4" />
      <path d="M21 5h-4" />
    </svg>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
