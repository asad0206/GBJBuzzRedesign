"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { dropData } from "./dropdata";

import React from "react";

const DropDown: React.FC = () => {
  return (
    <div>
      <Accordion type="single" defaultValue="item-1" collapsible>
        {dropData.map((dropData) => (
          <AccordionItem value={dropData.val}>
            <AccordionTrigger className="text-base md:text-2xl font-bold">
              {dropData.text}
            </AccordionTrigger>
            <AccordionContent className="font-extralight text-pretty text-sm md:text-base">
              {dropData.desc}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default DropDown;
