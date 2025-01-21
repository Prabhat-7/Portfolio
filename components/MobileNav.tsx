"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/components/Navbar";
export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[20px] text-accent"></CiMenuFries>
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <nav className="flex flex-col justify-center items-center gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path == pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transiton-all `}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
