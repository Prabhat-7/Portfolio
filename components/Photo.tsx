"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="relative">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0, duration: 0.4, ease: "easeIn" },
          }}
          className="w-[300px] h-[300px] mix-blend-lighten absolute inset-0"
        >
          <Image
            src="/assets/home/photo.png"
            priority
            quality={100}
            fill
            alt="myImage"
            className="object-contain"
          />
        </motion.div>
        {/* Circle */}
        <motion.svg
          className="w-[300px] h-[300px]"
          fill="transparent"
          viewBox="0 0 404 404"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="202" // Centered at half the viewBox width
            cy="202" // Centered at half the viewBox height
            r="200"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: "24 10 0 0",
            }}
            animate={{
              strokeDasharray: ["12 96 20 20", "13 20 73 57", "3 200 18 18"],

              rotate: ["120", "360"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default Photo;
