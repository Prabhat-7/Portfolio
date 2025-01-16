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
        <SheetTitle>
          {" "}
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="54.1515 26.2942 21.3 29.21"
              fill="none"
              className="h-[30] w-[30] cursor-pointer"
            >
              <path
                d="M61 46 61 54C56 53 55 49 56 43 73 56 86 25 56 28 57 55 79 33 61 34L61 41"
                stroke="#e0e0e0"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
        </SheetTitle>

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
