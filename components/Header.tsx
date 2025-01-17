"use client";
import React from "react";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { use } from "react";

const headerVariants = {
  initial: { y: "-100vh" },
  animate: {
    y: 0,
    transition: { type: "tween", duration: 0.8, when: "beforeChildren" },
  },
};
const svgVariants = {
  initial: {
    scale: 1.3,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};
const pathVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
export default function Header() {
  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className=""
    >
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <motion.svg
            variants={svgVariants}
            whileHover={{
              scale: 1.1,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="54.1515 26.2942 21.3 29.21"
            fill="none"
            className="h-[30] w-[30] cursor-pointer  "
          >
            <motion.path
              variants={pathVariants}
              d="M61 46 61 54C56 53 55 49 56 43 73 56 86 25 56 28 57 55 79 33 61 34L61 41"
              stroke="#e0e0e0"
              strokeWidth="1.5"
            />
          </motion.svg>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button variant={"outlineGlow"}>Contact me </Button>
          </Link>
        </div>
        <div className="xl:hidden ">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
