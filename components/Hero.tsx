"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  HoverCardTrigger,
  HoverCardContent,
  HoverCard,
} from "@/components/ui/hover-card";
import { ResponsiveBar } from "@nivo/bar";

export default function Hero() {
  return (
    <section key="1" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Supercharge your Business Growth
          </h1>
          <p className="text-lg text-gray-700">
            We&apos;re a top business development firm, experts in crafting SaaS
            & PaaS solutions. Committed to understanding your unique needs for
            successful growth.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <Button className="bg-black text-white px-6 py-3 rounded-full flex items-center justify-between">
              Schedule Call
              <ArrowRightIcon className="ml-2" />
            </Button>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link className="text-lg underline text-black" href="#">
                  Let&apos;s Act Now
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="p-4">
                  <p className="text-sm">
                    Take the first step towards supercharging your business
                    growth. Let&apos;s act now!
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="flex space-x-4 items-center">
            <img
              alt="Google"
              className="h-6"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "72/24",
                objectFit: "cover",
              }}
              width="72"
            />
            <img
              alt="Facebook"
              className="h-6"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "72/24",
                objectFit: "cover",
              }}
              width="72"
            />
            <img
              alt="Microsoft"
              className="h-6"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "72/24",
                objectFit: "cover",
              }}
              width="72"
            />
            <img
              alt="Adobe"
              className="h-6"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "72/24",
                objectFit: "cover",
              }}
              width="72"
            />
            <img
              alt="Salesforce"
              className="h-6"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "72/24",
                objectFit: "cover",
              }}
              width="72"
            />
          </div>
          <Link className="text-sm underline text-gray-500" href="#">
            Partner Ecosystem at GBJ Buzz
          </Link>
        </div>
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Drive more traffic and product sales
            </h2>
            <div className="text-right">
              <p className="text-5xl font-bold text-gray-900 animate-bounce">
                106+
              </p>
              <p className="text-base text-gray-500">
                Major clients, earning their profound trust and collaboration.
              </p>
              <div className="w-full h-1 bg-[#FFA500] mt-2" />
            </div>
          </div>
          <BarChart className="w-full h-[300px]" />
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}
