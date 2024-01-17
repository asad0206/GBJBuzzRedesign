import React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardsProps {
  cardTitle: string;
  cardImage: string;
  cardContent: string;
  index: number;
  additionalContent?: string;
}

interface CardsContainerProps {
  // Add any additional props if needed
}

const CardsContainer: React.FC<CardsContainerProps> = () => {
  return (
    <div>
        <p className="text-center p-8 font-bold text-2xl md:text-5xl">Grow Your Business At Junction</p>
        <div className="flex flex-wrap items-center justify-center">
        
        {[...Array(4)].map((_, index) => (
          <Cards
            key={index}
            cardTitle={`0${index + 1}`}
            cardImage={`/revolutionize${index + 1}.png`}
            cardContent={getContentByIndex(index)}
            additionalContent={getadditionalContentByIndex(index)}
            index={index}
          />
        ))}
      </div>
        
    </div>
    
  );
};


const Cards: React.FC<CardsProps> = ({ cardTitle, cardImage, cardContent, additionalContent, index }) => {
    const isEven = index % 2 === 0;
  
    return (
      <Card className={`mx-2 mb-4 w-full m-10 md:w-72 m-2 ${isEven ? "bg-white" : "bg-[#FFC900]"} group`}>
        <CardHeader>
          <CardTitle className="text-3xl">{cardTitle}</CardTitle>
          <CardDescription className="flex items-center justify-center opacity-100 ">
            <Image
              src={cardImage}
              alt="logo"
              width={96}  
              height={96} 
              className="group-hover:opacity-0 transition-opacity"
            />
          </CardDescription>
          <p className="opacity-0 transition-opacity group-hover:opacity-100 text-center justify-center">{additionalContent}</p>
          <p className="opacity-100 group-hover:opacity-0 transition-opacity text-center text-2xl bold">{cardContent}</p>

        </CardHeader>
      </Card>
    );
  };
  
  

const getContentByIndex = (index: number): string => {
  switch (index) {
    case 0:
      return "Lead";
    case 1:
      return "Amplify";
    case 2:
      return "Revolutionize";
    case 3:
      return "Innovate";
    default:
      return "";
  };
};

const getadditionalContentByIndex = (index: number): string => {
    switch (index) {
      case 0:
        return "We lead the market, driving your client's business forward.";
      case 1:
        return "Optimize for maximum efficiency in business operations.";
      case 2:
        return "Leverage Al for enhanced performance.";
      case 3:
        return "Adapt to the ever-evolving technology landscape.";
      default:
        return "";
    };
  };


export default CardsContainer;



