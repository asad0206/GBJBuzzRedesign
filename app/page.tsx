import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="p-20">
      <Navbar />
      <Hero />
    </main>
  );
}
