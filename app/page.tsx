import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CarouselCards from "@/components/CarouselCards";
import Cards from "@/components/Cards";
import CardsContainer from "@/components/Cards";
export default function Home() {
  return (
    <main className="p-20">
      <Navbar />
      <Hero />
      <Projects />
      <CardsContainer />
      <CarouselCards />
    </main>
  );
}
