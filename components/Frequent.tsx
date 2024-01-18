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
import { Divider } from "@nextui-org/react";

function Frequent() {
  return (
    <div className="p-10 w-full">
      <Card>
        <CardContent className="mx-3 justify justify-center items-center flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Questions />
          </div>
          <div className="md:w-1/2">
            <DropDown />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Frequent;
