"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Header() {
  return (
    <header className="relative mx-7 h-87.5 md:mx-10 md:h-125">
      {/* Border wrapper */}
      <div
        className="absolute inset-0 rounded-2xl bg-white md:rounded-4xl
        md:[clip-path:polygon(0_0,100%_0,100%_70%,55%_70%,55%_100%,0_100%)]"
      />

      {/* Image and overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute inset-0.5 overflow-hidden rounded-2xl md:rounded-4xl"
      >
        <Image
          src="/drone.jpg"
          alt="Agricultural drone flying over a farm"
          fill
          priority
          sizes="(max-width: 768px) calc(100vw - 56px), calc(100vw - 96px)"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Hero content */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center
        px-5 text-center text-white md:items-start md:px-9 md:text-left"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs text-white/70"
        >
          The latest innovation for multi-domain applications
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-sans text-xl md:text-4xl md:font-semibold"
        >
          Building Technology That Moves Businesses Forward
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-3 flex gap-4"
        >
          <Link
            href="#contact"
            className="flex items-center gap-1 border-b-[1.5px] text-xs md:text-base"
          >
            Get In Touch
            <motion.span
              whileHover={{ x: 4, y: -2 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <IoIosArrowRoundForward size={25} className="-rotate-45" />
            </motion.span>
          </Link>

          <Link
            href="#services"
            className="flex items-center gap-1 border-b-[1.5px] text-xs md:text-base"
          >
            Our Services
            <motion.span
              whileHover={{ x: 4, y: -2 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <IoIosArrowRoundForward size={25} className="-rotate-45" />
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom-right white statistics panel */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        className="absolute bottom-0 right-0 z-20 hidden h-[30%] w-[45%]
        items-center justify-center rounded-tl-3xl rounded-tr-xl
        bg-[#fafafa] text-black md:flex"
      >
        <div className="grid w-full grid-cols-3 gap-4 px-6 text-center">
          <div>
            <p className="text-2xl font-semibold">0</p>
            <p className="text-xs text-gray-500">Projects</p>
          </div>

          <div>
            <p className="text-2xl font-semibold">0K</p>
            <p className="text-xs text-gray-500">Users</p>
          </div>

          <div>
            <p className="text-2xl font-semibold">0K</p>
            <p className="text-xs text-gray-500">Reach</p>
          </div>
        </div>
      </motion.div>
    </header>
  );
}