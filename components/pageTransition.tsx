"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);

  const getDirection = () => {
    if (prevPath.length < pathname.length) return -100;
    return 100;
  };

  useEffect(() => {
    setPrevPath(pathname);
  }, [pathname]);

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.div
        key={pathname}
        initial={{ x: getDirection() }}
        animate={{ x: 0 }}
        exit={{ x: -getDirection() }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 50,
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
