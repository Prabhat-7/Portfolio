"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const hoverVariants = {
  initial: {
    scale: 1,
    color: "inherit",
  },
  whileHover: {
    scale: 1.1,
    color: "rgb(0,225,153)",
    transition: { type: "tween", delay: 0 },
  },
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium transition-all`}
        >
          <motion.p
            variants={hoverVariants}
            initial="initial"
            whileHover="whileHover"
          >
            {link.name}
          </motion.p>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
