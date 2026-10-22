
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Agri-tech Solutions",
  "Drone Mining",
  "Powerline Inspection",
  "Software Development",
  "Hardware & IoT",
];

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Footer() {
const [currentYear, setCurrentYear] = useState<number | null>(null);

useEffect(() => {
  setCurrentYear(new Date().getFullYear());
}, []);

  return (
    <footer className="overflow-hidden bg-[#102c45] px-6 pb-6 pt-14 text-white md:px-12 md:pt-16">
      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-10 border-b border-white/15 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_0.8fr] lg:gap-12"
        >
          {/* Brand */}
          <motion.div variants={columnVariants}>
            <Link
              href="#home"
              aria-label="RealityShift home"
              className="inline-block"
            >
              <Image
                src="/logo.png"
                alt="RealityShift logo"
                width={150}
                height={50}
                className="h-auto w-[140px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
              Bringing software, drone technology and hardware together to
              create practical solutions for modern businesses.
            </p>

            <p className="mt-5 text-sm font-medium text-[#67baf4]">
              Software. Hardware. Integrated.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={columnVariants}>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block text-sm text-white/65 transition-all duration-200 hover:translate-x-1 hover:text-[#67baf4]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={columnVariants}>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="inline-block text-sm text-white/65 transition-all duration-200 hover:translate-x-1 hover:text-[#67baf4]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={columnVariants}>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Let&apos;s Connect
            </h3>

            <p className="text-sm leading-6 text-white/65">
              Have an idea or a project in mind? Let&apos;s discuss how
              technology can help.
            </p>

            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 inline-flex"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#1e466b] transition-colors hover:bg-[#67baf4]"
              >
                Get In Touch
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {currentYear} RealityShift. All rights reserved.</p>

          <p>Built with purpose. Designed for progress.</p>
        </motion.div>
      </div>
    </footer>
  );
}