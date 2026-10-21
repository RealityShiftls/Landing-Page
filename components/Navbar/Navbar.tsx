"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const menuItems = [
  { name: "Home", path: "#home" },
  { name: "Services", path: "#services" },
  { name: "About", path: "#about" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="mx-6 my-2 md:mx-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" aria-label="Go to home section">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ol className="hidden items-center space-x-4 rounded-b-2xl bg-[#1e466b] px-4 py-4 md:flex">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className=" transition-colors text-[#fafafa] duration-200 hover:text-[#67baf4]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ol>

        {/* Desktop Quote Button */}
        <Link
          href="#contact"
          className="hidden rounded-xl bg-[#1e466b] px-4 py-4 text-white transition-colors hover:bg-[#295b86] md:block"
        >
          Request a Quote
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="rounded-md border p-2  flex md:hidden"
        >
          {isMenuOpen ? (
            <IoClose size={26} />
          ) : (
            <GiHamburgerMenu size={26} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mt-3 rounded-xl bg-[#1e466b] p-4 shadow-lg md:hidden">
          <ol className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white transition-colors hover:text-[#67baf4]"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg bg-white px-4 py-3 text-center font-medium text-[#1e466b] transition-colors hover:bg-gray-100"
              >
                Request a Quote
              </Link>
            </li>
          </ol>
        </div>
      )}
    </nav>
  );
}