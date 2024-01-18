import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CarouselCards from "@/components/CarouselCards";
import CardsContainer from "@/components/CardsContainer";
import DropDown from "@/components/DropDown";
import Services from "@/components/Services";
import Frequent from "@/components/Frequent";


export default function Home() {
  return (
    <main className="p-20">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <CardsContainer />
      <CarouselCards />
      <Frequent />
    </main>
  );
}
