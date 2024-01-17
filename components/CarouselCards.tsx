"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CarouselCards() {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  return (
    <div>
      <p className="text-center p-8 font-bold text-2xl md:text-5xl">
        Companies We&apos;ve Fueled to New Heights.
      </p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="flex flex-col justify-center items-center"
      >
        <CarouselContent>
          <CarouselItem>
            <Card className="justify-center items-center">
              <CardHeader>
                <Image
                  src="/hoora.svg"
                  alt="Hoora"
                  width="175"
                  height="50"
                  className="sm:py-5 flex items-center self-center sm:mt-4 sm:mb-10 sm:block w-52 tab:w-40 sm:w-44 mx-auto"
                />
              </CardHeader>
              <CardContent className="justify justify-center items-center text-center">
                "A reliable partner in our business development, Their
                team&apos;s dedication to understanding our business and
                delivering unique solutions sets them apart"
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardHeader className="justify-center items-center text-center">
                <Image
                  src="/the-bliss-events.svg"
                  alt="The Bliss Events"
                  width="175"
                  height="50"
                  className="sm:py-5 flex items-center self-center sm:mt-4 sm:mb-10 sm:block w-52 tab:w-40 sm:w-44 mx-auto"
                />
              </CardHeader>
              <CardContent className="justify justify-center text-center">
                <p>
                  Results-driven professionals! The team consistently analyzes
                  data, making strategic adjustments that keep our marketing
                  campaigns effective."
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardHeader>
                <Image
                  src="/my-fit-meals.svg"
                  alt="My Fit Meals"
                  width="175"
                  height="50"
                  className="sm:py-5 flex items-center self-center sm:mt-4 sm:mb-10 sm:block w-52 tab:w-40 sm:w-44 mx-auto"
                />
              </CardHeader>
              <CardContent className="justify justify-center text-center">
                <p>
                  "Our social media presence has never been stronger. The
                  team&apos;s social media marketing strategies are on point,
                  engaging our audience effectively."
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
