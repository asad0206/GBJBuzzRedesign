"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

import Questions from "./Questions";
import DropDown from "./DropDown";
import { Button } from "@/components/ui/button";

function Frequent() {
  return (
    <Card className="mt-6 w-full">
      <CardContent className="mx-3 justify justify-center items-center flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Questions />
          <div className="mt-3 justify-around">
            <Button className="rounded-3xl bg-[#FFC900] hover:bg-white text-black">
              More Questions
            </Button>
            <Button variant="link">Contact Us</Button>
          </div>
        </div>
        <div className="sm:mt-2 md:my-2 md:w-1/2">
          <DropDown />
        </div>
      </CardContent>
    </Card>
  );
}

export default Frequent;
