"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const paths = ["/", "/services", "/resume", "/work", "/contact"];

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [direction, setDirection] = useState(0);
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    const currentIndex = paths.indexOf(pathname);
    const prevIndex = paths.indexOf(prevPath);
    setDirection(currentIndex > prevIndex ? 1 : -1); // Correct direction setting
    setPrevPath(pathname);
  }, [pathname]);

  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={pathname}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
