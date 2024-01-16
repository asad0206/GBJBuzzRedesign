import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Start</h1>
      <Link href="/About"> About</Link>
      <Link href="/Contacts">Contact</Link>
    </main>
  );
}
