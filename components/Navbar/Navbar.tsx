"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";

const menuItems = [
  { name: "Home", path: "#home" },
  { name: "Services", path: "#services" },
  { name: "About", path: "#about" },
  { name: "Contact", path: "#contact" },
];

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.18 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25 },
  },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-50 mx-6 my-2 md:mx-12"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          aria-label="Go to home section"
          onClick={closeMenu}
          className="shrink-0"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/logo.png"
              alt="Company logo"
              width={150}
              height={50}
              priority
              className="h-auto w-[120px] md:w-[150px]"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <ol className="hidden items-center gap-1 rounded-b-2xl bg-[#1e466b] px-3 py-3 md:flex">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="relative block rounded-lg px-4 py-2 text-sm text-[#fafafa] transition-colors duration-200 hover:text-[#67baf4]"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-1 left-4 right-4 h-px origin-left bg-[#67baf4]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25 }}
                />
              </Link>
            </li>
          ))}
        </ol>

        {/* Desktop Quote Button */}
        <motion.div
          className="hidden md:block"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-xl bg-[#1e466b] px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#295b86]"
          >
            Request a Quote
            <IoIosArrowRoundForward
              size={22}
              className="-rotate-45 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="flex items-center justify-center rounded-lg border border-gray-200 p-2 text-[#1e466b] transition-colors hover:bg-gray-100 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMenuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              {isMenuOpen ? (
                <IoClose size={26} />
              ) : (
                <GiHamburgerMenu size={26} />
              )}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-0 right-0 top-full mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#1e466b] p-4 shadow-xl md:hidden"
          >
            <motion.ol className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <motion.li key={item.path} variants={itemVariants}>
                  <Link
                    href={item.path}
                    onClick={closeMenu}
                    className="block rounded-lg px-4 py-3 text-white transition-colors hover:bg-white/10 hover:text-[#67baf4]"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}

              <motion.li variants={itemVariants} className="mt-2">
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="group flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-semibold text-[#1e466b] transition-colors hover:bg-gray-100"
                >
                  Request a Quote
                  <IoIosArrowRoundForward
                    size={22}
                    className="-rotate-45 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </motion.li>
            </motion.ol>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}