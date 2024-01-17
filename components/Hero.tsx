import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import ArrowRight from "@heroicons/react/24/solid";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

function Hero() {
  return (
    <div className="realtive justify-center p-10">
      <div>
        <Card className="flex justify flex-col">
          <CardHeader>
            <CardTitle className="font-semibold justify text-7xl">
              <p>Supercharge your</p>
              <p>Business Growth</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="font-medium justify text-xl text-pretty max-w-prose">
            <p>
              We&apos;re a top business devlopment firm, experts in crafting
              SaaS & PaaS solutions.
            </p>
            <p>
              Comitted to understanding your unique needs for successful growth.
            </p>
          </CardContent>
          <CardFooter className="flex justify">
            <Button className="flex gird grid-cols-2 gap-2 rounded-full md:size-auto justify max-w-prose hover:bg-[#FFC900] hover:text-black">
              Schedule a call
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <HoverCard>
              <HoverCardTrigger>
                <Button
                  variant="link"
                  className="underline justify underline-offset-4 md:size-auto max-w-prose"
                >
                  Let&apos;s Act Now
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="text-sm justify text-pretty max-w-prose">
                Seize the moment with decisive action! Let&apos;s act now to
                create a future of possibilities and positive change. Embrace
                the power of action and make a lasting impact.
              </HoverCardContent>
            </HoverCard>
          </CardFooter>
          <CardFooter className="flex justify relative gap-4">
            <Image src="/google-logo.svg" alt="google" width="64" height="22" />
            <Image
              src="/facebook-logo.svg"
              alt="facebook"
              width="75"
              height="22"
            />
            <Image
              src="/microsoft-logo.svg"
              alt="microsft"
              width="75"
              height="22"
            />
            <Image src="/adobe-logo.svg" alt="adobe" width="75" height="22" />
            <Image
              src="/salesforce-logo.svg"
              alt="salesforce"
              width="75"
              height="22"
            />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Hero;
