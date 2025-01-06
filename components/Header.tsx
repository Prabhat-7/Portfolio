import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />

          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
        <div className="xl:hidden ">
          <Navbar />
          mobile
        </div>
      </div>
    </header>
  );
}
