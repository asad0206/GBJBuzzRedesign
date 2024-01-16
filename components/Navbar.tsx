import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
  return (
    <div>
     <div className="flex items-center gap-4">
        <Link href="/">
        <Image src="/gbjlogo.png" alt="logo" width="200" height="200" />

        </Link>

      <div className="flex gap-4">
        <Link href="/About" className="text-black hover:underline">About</Link>
        <Link href="/Services" className="text-black hover:underline">Services</Link>
        <Link href="/Contacts" className="text-black hover:underline">Contact</Link>
        <Link href="/Career" className="text-black hover:underline">Career</Link>
        <Link href="/Blog" className="text-black hover:underline">Blog</Link>
      </div>
    </div>
    </div>
  )
}