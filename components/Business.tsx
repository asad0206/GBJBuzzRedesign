"use client";

import React from "react";
import { Button } from "@/components/ui/button";

function Business() {
  return (
    <div className="mt-10 w-full justify-between md:flex md:flex-row">
      <div className="md:w-1/2">
        <p className="text-2xl md:text-5xl text-wrap font-medium ">
          <span className="bg-[#FFC900] rounded-2xl">
            Strategic Business Growth
          </span>{" "}
          Solutions and IT Innovations for Driving Revenue.
        </p>
      </div>
      <div className="md:w-1/2">
        <p className="w-full text-wrap justify-center items-center text-sm md:text-lg">
          Choose our Strategic Solutions Agency for expert corporate branding.
          Our tailored services are crafted to boost business visibility and
          drive enhanced traffic and sales for our clients&apos; enterprises.
        </p>
        <Button
          size="lg"
          className="mt-3 text-black bg-[#FFC900] hover:text-white rounded-3xl"
        >
          See more
        </Button>
      </div>
    </div>
  );
}

export default Business;
